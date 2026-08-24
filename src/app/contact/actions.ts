'use server';

import { Resend } from 'resend';
import {
  CONTACT,
  PROJECT_TYPES,
  INVESTMENT_BANDS,
  TIMELINES,
  OWNERSHIP_OPTIONS,
} from '@/data/site';

export interface InquiryState {
  status: 'idle' | 'success' | 'error';
  firstName?: string;
  message?: string;
  fieldErrors?: Record<string, string>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_SHORT = 200;
const MAX_LONG = 5000;

function optional(value: FormDataEntryValue | null, allowed?: readonly string[]): string {
  const v = (typeof value === 'string' ? value : '').trim().slice(0, MAX_SHORT);
  if (allowed && v && !allowed.includes(v)) return '';
  return v;
}

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  // Honeypot — bots fill every field; humans never see this one.
  if (typeof formData.get('company_website') === 'string' && formData.get('company_website')) {
    return { status: 'success', firstName: '' };
  }

  const firstName = optional(formData.get('first_name'));
  const lastName = optional(formData.get('last_name'));
  const email = optional(formData.get('email'));
  const phone = optional(formData.get('phone'));
  const projectType = optional(formData.get('project_type'), PROJECT_TYPES);
  const location = optional(formData.get('location'));
  const description = (String(formData.get('description') ?? '')).trim().slice(0, MAX_LONG);
  const investment = optional(formData.get('investment'), INVESTMENT_BANDS);
  const timeline = optional(formData.get('timeline'), TIMELINES);
  const ownership = optional(formData.get('ownership'), OWNERSHIP_OPTIONS);

  const fieldErrors: Record<string, string> = {};
  if (!firstName) fieldErrors.first_name = 'Please add your first name.';
  if (!lastName) fieldErrors.last_name = 'Please add your last name.';
  if (!email) fieldErrors.email = 'Please add your email.';
  else if (!EMAIL_RE.test(email)) fieldErrors.email = 'That email doesn’t look right.';
  if (!projectType) fieldErrors.project_type = 'Please select a project type.';

  if (Object.keys(fieldErrors).length > 0) {
    return { status: 'error', fieldErrors, message: 'Please check the highlighted fields.' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[contact] RESEND_API_KEY is not set — inquiry logged but not emailed.');
    console.warn('[contact] inquiry from', `${firstName} ${lastName} <${email}>`);
    return { status: 'success', firstName };
  }

  const to = (process.env.CONTACT_TO_EMAIL ?? CONTACT.emails.join(',')).split(',');
  const lines = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    projectType && `Project type: ${projectType}`,
    location && `Location: ${location}`,
    investment && `Total investment: ${investment}`,
    timeline && `Timeline: ${timeline}`,
    ownership && `Owns the property: ${ownership}`,
    '',
    'About the project:',
    description || '(no description provided)',
  ].filter((l) => l !== undefined && l !== '' || l === '');

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? 'Compass Website <onboarding@resend.dev>',
      to,
      replyTo: email,
      subject: `Website inquiry — ${firstName} ${lastName}${location ? ` (${location})` : ''}`,
      text: lines.join('\n'),
    });
    if (error) {
      console.error('[contact] Resend error:', error);
      return {
        status: 'error',
        message: 'Something went wrong sending your note. Please email us directly.',
      };
    }
  } catch (err) {
    console.error('[contact] send failed:', err);
    return {
      status: 'error',
      message: 'Something went wrong sending your note. Please email us directly.',
    };
  }

  return { status: 'success', firstName };
}
