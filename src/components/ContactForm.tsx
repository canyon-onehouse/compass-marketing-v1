'use client';

import { useActionState } from 'react';
import { submitInquiry, type InquiryState } from '@/app/contact/actions';
import { PROJECT_TYPES, INVESTMENT_BANDS, TIMELINES, OWNERSHIP_OPTIONS } from '@/data/site';

const initialState: InquiryState = { status: 'idle' };

function FieldError({ error }: { error?: string }) {
  if (!error) return null;
  return (
    <p className="hint" role="alert" style={{ color: 'var(--danger)' }}>
      {error}
    </p>
  );
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);
  const errors = state.fieldErrors ?? {};

  if (state.status === 'success') {
    return (
      <div className="card" id="inquiry">
        <div className="thanks">
          <h2 className="tg">Thank you{state.firstName ? `, ${state.firstName}` : ''}.</h2>
          <p>
            Your note is on its way to the studio. We&rsquo;ll write back within a few days to find
            a time to talk.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="card" id="inquiry" action={formAction} noValidate>
      <h2 className="ct">Start a conversation</h2>
      <div className="field-row">
        <div className="field">
          <label htmlFor="f-first">First name</label>
          <input id="f-first" name="first_name" type="text" placeholder="First name" required />
          <FieldError error={errors.first_name} />
        </div>
        <div className="field">
          <label htmlFor="f-last">Last name</label>
          <input id="f-last" name="last_name" type="text" placeholder="Last name" required />
          <FieldError error={errors.last_name} />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input id="f-email" name="email" type="email" placeholder="you@email.com" required />
          <FieldError error={errors.email} />
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone</label>
          <input id="f-phone" name="phone" type="tel" placeholder="(000) 000-0000" />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="f-type">Project type</label>
          <select id="f-type" name="project_type" required defaultValue="">
            <option value="">Select one</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <FieldError error={errors.project_type} />
        </div>
        <div className="field">
          <label htmlFor="f-place">Location</label>
          <input id="f-place" name="location" type="text" placeholder="City or county" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-msg">About the project</label>
        <textarea
          id="f-msg"
          name="description"
          rows={4}
          placeholder="Briefly describe your project and what you’re hoping to achieve."
        ></textarea>
      </div>
      <div className="field">
        <label htmlFor="f-budget">Total investment</label>
        <p className="hint">
          What is your total anticipated investment for this project, including construction?
        </p>
        <select id="f-budget" name="investment" defaultValue="">
          <option value="">Select one</option>
          {INVESTMENT_BANDS.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-timeline">Timeline</label>
        <p className="hint">When are you hoping to start your project?</p>
        <select id="f-timeline" name="timeline" defaultValue="">
          <option value="">Select one</option>
          {TIMELINES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-own">Ownership</label>
        <p className="hint">Do you own the home or property where this project will take place?</p>
        <select id="f-own" name="ownership" defaultValue="">
          <option value="">Select one</option>
          {OWNERSHIP_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      {/* honeypot — hidden from people, tempting to bots */}
      <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
        <label htmlFor="f-website">Company website</label>
        <input id="f-website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === 'error' && state.message && (
        <p className="hint" role="alert" style={{ color: 'var(--danger)' }}>
          {state.message}
        </p>
      )}

      <button className="btn btn-primary" type="submit" disabled={pending}>
        {pending ? 'Sending…' : 'Send inquiry'} <span className="ar">→</span>
      </button>
      <p className="fineprint">No newsletter, no spam — just a reply from the studio.</p>
    </form>
  );
}
