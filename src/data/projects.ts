export type Tone = 'tone-tan' | 'tone-stone' | 'tone-navy';

export interface GalleryTile {
  src: string;
  alt: string;
  caption: string;
  tone: Tone;
  modifier?: 'wide' | 'tall';
}

export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  /** case-head right-hand meta line — custom projects only */
  meta?: string;
  category: 'projects' | 'plans';
  /** card on the /projects grid */
  card: { src: string; alt: string; tone: Tone; label: string };
  hero: { src: string; alt: string; tone: Tone; capsule?: string };
  prose: string[];
  sheetHeading: string;
  sheet: { label: string; value: string }[];
  /** "Request plans" button under the sheet (ready-to-build plans) */
  sheetCta?: boolean;
  /** extra class on the case-gallery section (e.g. Hickerson's hk-gal) */
  galleryClass?: string;
  gallery: GalleryTile[];
  testimonial?: { quote: string; name: string; role: string };
  next: string; // slug of the next project
  description: string; // meta description
}

export const projects: Project[] = [
  {
    slug: 'hurricane-ranch',
    title: 'Hurricane Ranch',
    eyebrow: 'Residential · New build',
    meta: 'New Market · In Progress 2026',
    category: 'projects',
    card: {
      src: '/images/hurricane-exterior.webp',
      alt: 'Hurricane Ranch — two-story home in dark-stained board-and-batten and brick under a black standing-seam metal roof, with timber trusses and stone pier bases',
      tone: 'tone-stone',
      label: 'New Market · 2026',
    },
    hero: {
      src: '/images/hurricane-exterior.webp',
      alt: 'Hurricane Ranch — two-story home in dark-stained board-and-batten and brick under a black standing-seam metal roof, with timber trusses over the entry and balcony, stone pier bases, and autumn trees behind',
      tone: 'tone-stone',
      capsule: 'Hurricane Ranch · New Market · 2026',
    },
    prose: [
      'A fully custom house for a couple moving up from Texas, with roots in Washington state. They wanted both places in it — Texas in the scale and the porch, the Pacific Northwest in the wood and the way the light gets handled.',
      'The main floor splits about evenly between private space and space for entertaining. A solarium picks up the eastern view across the property, and a deep overhang porch wraps from the main entry around to the driveway, so nobody arrives in the rain.',
      'Inside, a custom curved stair opens the center of the house and the vaulted ceilings carry large rough-hewn beams over tongue-and-groove. Natural materials throughout — the light and the texture do the heavy lifting. A one-of-a-kind house tucked into the Appalachian foothills.',
    ],
    sheetHeading: 'Project sheet',
    sheet: [
      { label: 'Type', value: 'Single Family Home' },
      { label: 'Place', value: 'New Market, Alabama' },
      { label: 'Year', value: 'In Progress 2026' },
      { label: 'Scope', value: 'Residential Design · Interiors' },
    ],
    gallery: [
      {
        src: '/images/hurricane-kitchen.webp',
        alt: 'Kitchen with white oak cabinetry, marble island and backsplash, glass pendants, and a bank of windows on the east wall',
        caption: 'Kitchen · Island',
        tone: 'tone-tan',
        modifier: 'wide',
      },
      {
        src: '/images/hurricane-living.webp',
        alt: 'Living room under vaulted tongue-and-groove ceiling with rough-hewn beams, full-height stone chimney, and stacked black-framed windows to the east',
        caption: 'Living room · Hearth',
        tone: 'tone-stone',
        modifier: 'tall',
      },
      {
        src: '/images/hurricane-primary-bath.webp',
        alt: 'Primary bath with a steel-framed glass shower enclosure in travertine, freestanding soaking tub, brass floor filler, and a candle chandelier',
        caption: 'Primary bath · Shower',
        tone: 'tone-tan',
        modifier: 'tall',
      },
      {
        src: '/images/hurricane-primary-bed.webp',
        alt: 'Primary bedroom with white oak paneled headboard wall, brass branch chandelier and sconces, walnut bed and dresser, and two swivel chairs on a wool rug',
        caption: 'Primary bedroom',
        tone: 'tone-stone',
        modifier: 'wide',
      },
    ],
    testimonial: {
      quote:
        'We looked at so many houses that only checked some of the boxes. Compass checked all the boxes.',
      name: 'The Owner',
      role: 'Writer · New Market',
    },
    next: 'keel-cabin',
    description:
      'A fully custom house in New Market, Alabama — Texas in the scale and the porch, the Pacific Northwest in the wood and light. Residential design and interiors by Compass Design Studio.',
  },
  {
    slug: 'widner-residence',
    title: 'Widner Residence',
    eyebrow: 'Residential · New build',
    meta: 'New Market · In Progress 2026',
    category: 'projects',
    card: {
      src: '/images/widner-exterior-card.webp',
      alt: 'Widner Residence — white clapboard house with a steep gable and wraparound porch',
      tone: 'tone-navy',
      label: 'New Market · 2026',
    },
    hero: {
      src: '/images/widner-exterior.webp',
      alt: 'Widner Residence — white clapboard two-story house with a steep gable, shingled roof, dormer, and a wraparound porch on brick piers at sunset',
      tone: 'tone-navy',
      capsule: 'Widner Residence · New Market · 2026',
    },
    prose: [
      'The owner came to Compass with a floor plan already in hand and a clear idea of how she wanted to live in it. Our work was the redesign — reworking the plan and carrying it through to the interiors, with an eclectic farmhouse look that leans toward cottage.',
      'The great room does most of the work: kitchen, table, and hearth under one roof, with a brick-surround wood stove at one end and bedrooms held quiet on either side. Cream cabinetry and walnut butcher-block counters, a sage range and refrigerator, stained oak floors and trim throughout — warm, plain materials mixed rather than matched.',
      'The smaller rooms are where the eclectic side shows. A double oak vanity and green-tiled shower in the primary bath; a clawfoot tub in a glass wet room against dark floral wallpaper in the hall bath; olive-painted stair treads and a reading nook tucked under the run. Unlacquered brass throughout, left to age.',
    ],
    sheetHeading: 'Project sheet',
    sheet: [
      { label: 'Type', value: 'Single family home' },
      { label: 'Place', value: 'New Market, Alabama' },
      { label: 'Year', value: 'In Construction - 2026' },
      { label: 'Scope', value: 'Plan redesign · Interiors' },
    ],
    gallery: [
      {
        src: '/images/widner-kitchen.webp',
        alt: 'Kitchen with cream cabinetry, walnut butcher-block counters, sage range and refrigerator',
        caption: 'Kitchen · Island',
        tone: 'tone-tan',
        modifier: 'wide',
      },
      {
        src: '/images/widner-primary-bath.webp',
        alt: 'Primary bath with double oak vanity, marble counter, brass fittings, and a green-tiled walk-in shower over patterned mosaic floor',
        caption: 'Primary bath · Shower',
        tone: 'tone-tan',
        modifier: 'tall',
      },
      {
        src: '/images/widner-hall-bath.webp',
        alt: 'Hall bath with clawfoot tub in a glass-enclosed wet room, dark floral wallpaper, and an oak vanity with unlacquered brass fittings',
        caption: 'Hall bath · Shower',
        tone: 'tone-tan',
        modifier: 'tall',
      },
      {
        src: '/images/widner-dining-living.webp',
        alt: 'Great room with sectional sofa, farmhouse dining table, and a brick-surround wood stove beneath a gilt mirror',
        caption: 'Great room · Hearth',
        tone: 'tone-tan',
        modifier: 'wide',
      },
      {
        src: '/images/widner-stair.webp',
        alt: 'Stair hall with olive-painted treads and balustrade, oak stair caps, and a built-in reading nook tucked beneath the run',
        caption: 'Stair hall · Reading nook',
        tone: 'tone-tan',
        modifier: 'tall',
      },
    ],
    testimonial: {
      quote:
        "This has been such a fantastic experience, and I really appreciate all the time, patience, and thought you've put into helping bring this vision to life.",
      name: 'The Owners',
      role: 'Widner Residence',
    },
    next: 'stone-meadow',
    description:
      'A plan redesign carried through to the interiors — an eclectic farmhouse in New Market, Alabama that leans toward cottage. By Compass Design Studio.',
  },
  {
    slug: 'hickerson-home',
    title: 'Hickerson Home',
    eyebrow: 'Residential · Interior remodel',
    meta: 'Cullman · In Progress 2026',
    category: 'projects',
    card: {
      src: '/images/hickerson-home-exterior.webp',
      alt: 'Hickerson Home — front elevation at golden hour',
      tone: 'tone-tan',
      label: 'Cullman · 2026',
    },
    hero: {
      src: '/images/hickerson-home-exterior.webp',
      alt: 'Hickerson Home — front elevation with carport and covered porch at golden hour',
      tone: 'tone-tan',
      capsule: 'Hickerson Home · Cullman · 2026',
    },
    prose: [
      'An interior remodel of a single-story ranch house in Cullman — the plan reworked room by room while the shell and roofline stay as built.',
      'The kitchen is re-planned as a galley with a full run of white oak cabinetry and marble counters; the dining room opens to the living room to pull daylight through the middle of the house. In the primary suite, a patterned feature wall sets the bedroom against a bath in stone and brass.',
      'Interiors are white oak and warm plaster: a galley kitchen with marble counters and a stacked-tile backsplash, a dining room open to the living room, and a primary suite in soft pattern, stone, and brass.',
    ],
    sheetHeading: 'Project sheet',
    sheet: [
      { label: 'Type', value: 'Interior remodel' },
      { label: 'Place', value: 'Cullman, Alabama' },
      { label: 'Year', value: 'In Progress 2026' },
      { label: 'Scope', value: 'Interior remodel' },
    ],
    galleryClass: 'hk-gal',
    gallery: [
      {
        src: '/images/hickerson-living-dining.webp',
        alt: 'Dining room looking through to the living room, oak floors and brass pendants',
        caption: 'Dining · Living',
        tone: 'tone-tan',
        modifier: 'wide',
      },
      {
        src: '/images/hickerson-kitchen-01.webp',
        alt: 'Galley kitchen looking toward the sink, white oak cabinetry and marble counters',
        caption: 'Kitchen · Sink wall',
        tone: 'tone-tan',
        modifier: 'tall',
      },
      {
        src: '/images/hickerson-kitchen-02.webp',
        alt: 'Galley kitchen from the opposite end, range and hood on the left',
        caption: 'Kitchen · Range wall',
        tone: 'tone-tan',
        modifier: 'tall',
      },
      {
        src: '/images/hickerson-primary-bedroom.webp',
        alt: 'Primary bedroom with a patterned feature wall, black iron bed, and paired walnut nightstands',
        caption: 'Primary bedroom',
        tone: 'tone-tan',
        modifier: 'tall',
      },
      {
        src: '/images/hickerson-primary-bath-02.webp',
        alt: 'Primary bath double vanity with paired mirrors and brass sconces',
        caption: 'Primary bath · Vanity',
        tone: 'tone-tan',
        modifier: 'tall',
      },
      {
        src: '/images/hickerson-primary-bath-01.webp',
        alt: 'Primary bath shower in stacked tile with a floating oak shelf',
        caption: 'Primary bath · Shower',
        tone: 'tone-tan',
        modifier: 'tall',
      },
    ],
    next: 'aubrey-place',
    description:
      'An interior remodel of a single-story ranch house in Cullman, Alabama — white oak, warm plaster, stone, and brass. By Compass Design Studio.',
  },
  {
    slug: 'aubrey-place',
    title: 'Aubrey Place',
    eyebrow: 'Residential · Rehabilitation',
    meta: 'Huntsville · Completed 2025',
    category: 'projects',
    card: {
      src: '/images/aubrey-exterior.webp',
      alt: 'Aubrey Place — white painted brick street elevation with cedar-trimmed windows',
      tone: 'tone-navy',
      label: 'Huntsville · 2025',
    },
    hero: {
      src: '/images/aubrey-exterior.webp',
      alt: 'Aubrey Place — white painted brick and board-and-batten street elevation with cedar-trimmed windows, under a large hardwood',
      tone: 'tone-navy',
      capsule: 'Aubrey Place · Huntsville · 2025',
    },
    prose: [
      'A full rehabilitation of a split-level house in an established Huntsville neighborhood, carried out for a local non-profit that places underserved families into permanent, dignified housing. The brief was plain: bring the house back to sound, and make it a home someone would be proud to move into.',
      'The existing shell does the heavy lifting. Brick walls and the low roofline stay as built, unified under white paint so the two masses read as one house; new cedar-trimmed windows and board-and-batten on the upper story give the street face order it never had. Black shingle, black sconces, and a single square of front stoop are the only accents.',
      "Inside, the work is a whole-house rehabilitation — new systems, new kitchen and baths, refinished floors, and a plan corrected room by room. Durable, plain-spoken finishes throughout: this is a house built to be lived in hard for decades and maintained on a non-profit's budget.",
    ],
    sheetHeading: 'Project sheet',
    sheet: [
      { label: 'Type', value: 'Whole-house rehabilitation' },
      { label: 'Place', value: 'Huntsville, Alabama' },
      { label: 'Client', value: 'Huntsville housing non-profit' },
      { label: 'Year', value: 'Completed December 2025' },
    ],
    gallery: [
      {
        src: '/images/aubrey-living-asbuilt.webp',
        alt: 'Living room as completed — front door between two new windows, white walls, and wide-plank flooring, unfurnished',
        caption: 'Living room · As built',
        tone: 'tone-tan',
      },
      {
        src: '/images/aubrey-living-staged.webp',
        alt: 'The same living room staged — sofa, two armchairs, round oak coffee table on a jute rug, wall-mounted television',
        caption: 'Living room · Staged',
        tone: 'tone-tan',
      },
      {
        src: '/images/aubrey-bedroom-asbuilt.webp',
        alt: 'Bedroom as completed — white walls, new double-hung windows, and wide-plank flooring, unfurnished',
        caption: 'Bedroom · As built',
        tone: 'tone-tan',
      },
      {
        src: '/images/aubrey-bedroom-staged.webp',
        alt: 'The same bedroom staged — upholstered bed, oak nightstands, jute rug, and framed landscape',
        caption: 'Bedroom · Staged',
        tone: 'tone-tan',
      },
      {
        src: '/images/aubrey-kitchen-asbuilt.webp',
        alt: 'Kitchen as completed — white cabinetry, stainless appliances, black fixtures, and wide-plank flooring, unfurnished',
        caption: 'Kitchen · As built',
        tone: 'tone-tan',
      },
      {
        src: '/images/aubrey-kitchen-staged.webp',
        alt: 'The same kitchen staged — round oak table and spindle chairs at the window, greenery and bowls on the counters',
        caption: 'Kitchen · Staged',
        tone: 'tone-tan',
      },
      {
        src: '/images/aubrey-landing-asbuilt.webp',
        alt: 'Upstairs bedroom as completed — closet opening, panel door to the adjoining room, and wide-plank flooring, unfurnished',
        caption: 'Bedroom two · As built',
        tone: 'tone-tan',
      },
      {
        src: '/images/aubrey-landing-staged.webp',
        alt: 'The same bedroom staged — oak dresser with framed art and greenery, sitting room visible through the open door',
        caption: 'Bedroom two · Staged',
        tone: 'tone-tan',
      },
      {
        src: '/images/aubrey-bedroom3-asbuilt.webp',
        alt: 'Bedroom two as completed, second angle — single window to the trees, flush ceiling fixture, and wide-plank flooring, unfurnished',
        caption: 'Bedroom two · As built',
        tone: 'tone-tan',
      },
      {
        src: '/images/aubrey-bedroom3-staged.webp',
        alt: 'The same bedroom staged with two twin beds, a shared nightstand and lamp, and framed landscape prints',
        caption: 'Bedroom two · Staged',
        tone: 'tone-tan',
      },
      {
        src: '/images/aubrey-sitting-asbuilt.webp',
        alt: 'Upstairs sitting room as completed — window to the trees and an open door through to the bedroom, unfurnished',
        caption: 'Sitting room · As built',
        tone: 'tone-tan',
      },
      {
        src: '/images/aubrey-sitting-staged.webp',
        alt: 'The same sitting room staged — sofa, round oak coffee table, floor lamp, and wall-mounted television, twin beds visible beyond',
        caption: 'Sitting room · Staged',
        tone: 'tone-tan',
      },
    ],
    next: 'hurricane-ranch',
    description:
      'A full rehabilitation of a split-level Huntsville house for a local non-profit that places underserved families into permanent, dignified housing. By Compass Design Studio.',
  },
  {
    slug: 'hollis-house',
    title: 'Hollis House',
    eyebrow: 'Ready-to-build plan · Single story',
    category: 'plans',
    card: {
      src: '/images/hollis-exterior.webp',
      alt: 'Hollis House — low gable roof with deep overhangs and exposed beams, vertical cedar siding',
      tone: 'tone-tan',
      label: 'Coming soon',
    },
    hero: {
      src: '/images/hollis-exterior.webp',
      alt: 'Hollis House — low gable roof with deep overhangs and exposed beams, vertical cedar siding, and tall glazing along the main rooms',
      tone: 'tone-tan',
    },
    prose: [
      'Hollis House is a ready-to-build plan — a set of drawings you can buy and build on your own lot. Three bedrooms, two and a half baths, and a single-story footprint that suits a wide, gently sloping site.',
      "The public rooms run together: kitchen open to a combined dining and living space that holds a crowd without feeling like a hallway when it's just the two of you. A separate family room sits off the main run, so everyday mess and company can keep to different rooms.",
      'The exterior is mid-century in the plain sense — a low gable with deep overhangs, exposed beams carried past the wall, vertical cedar siding, and stone at the base. Tall glazing under the eave lines runs along the main rooms, so light comes in low and long while the overhang keeps the summer sun off. Natural materials throughout, left to weather.',
    ],
    sheetHeading: 'Ready-to-build plan',
    sheet: [
      { label: 'Bedrooms', value: '3' },
      { label: 'Bathrooms', value: '2.5' },
      { label: 'Sq ft', value: '2,300' },
      { label: 'Stories', value: '1' },
    ],
    sheetCta: true,
    gallery: [
      {
        src: '/images/hollis-great-room.webp',
        alt: 'Great room open to the kitchen and dining table, stone fireplace under a rough-hewn beam ceiling, and a full wall of glass to the yard',
        caption: 'Great room',
        tone: 'tone-stone',
        modifier: 'wide',
      },
      {
        src: '/images/hollis-family-room.webp',
        alt: 'Family room with built-in walnut shelving and cabinetry, beamed ceiling, and sliding glass to the patio',
        caption: 'Family room',
        tone: 'tone-tan',
      },
      {
        src: '/images/hollis-primary-bedroom.webp',
        alt: 'Primary bedroom with exposed beams and tongue-and-groove ceiling, sliding glass to the garden, plaster walls, brass sconces, and walnut case goods',
        caption: 'Primary bedroom',
        tone: 'tone-stone',
      },
    ],
    next: 'sand-mountain-farmhouse',
    description:
      'Hollis House — a ready-to-build single-story plan with 3 bedrooms and 2.5 baths. Mid-century in the plain sense, from Compass Design Studio.',
  },
  {
    slug: 'sand-mountain-farmhouse',
    title: 'Sand Mountain Farmhouse',
    eyebrow: 'Ready-to-build · Two story',
    category: 'plans',
    card: {
      src: '/images/sandmtn-exterior.webp',
      alt: 'Sand Mountain Farmhouse — board-and-batten farmhouse with metal roof and wraparound timber porch',
      tone: 'tone-navy',
      label: 'Coming soon',
    },
    hero: {
      src: '/images/sandmtn-exterior.webp',
      alt: 'Sand Mountain Farmhouse — two-story board-and-batten farmhouse with a standing-seam metal roof, shingled gables, dormers, and a wraparound timber porch',
      tone: 'tone-navy',
    },
    prose: [
      'A two-story board-and-batten farmhouse under a standing-seam metal roof, with shingled gables, dormers, and a porch that wraps the front and side.',
      'The main floor is one long room in three parts — living, dining, and kitchen — carried on heavy timber posts and beams under a plank ceiling. Nothing closes off; the timber frame does the dividing.',
      'The kitchen runs a long timber island under soapstone, with cream cabinetry, a timber range hood, and galvanized pendants. Upstairs, the primary bedroom sits under a beamed vault with a dormer window to the pasture. Drawings are available for build as designed, with adjustments to site and orientation on request.',
    ],
    sheetHeading: 'Ready-to-build plan',
    sheet: [
      { label: 'Bedrooms', value: '4' },
      { label: 'Bathrooms', value: '3.5' },
      { label: 'Sq ft', value: '2,500' },
      { label: 'Stories', value: '2' },
    ],
    sheetCta: true,
    gallery: [
      {
        src: '/images/sandmtn-living-dining.webp',
        alt: 'Living room open to the dining room and kitchen beyond, under heavy timber posts and beams with a plank ceiling',
        caption: 'Living and dining',
        tone: 'tone-tan',
        modifier: 'wide',
      },
      {
        src: '/images/sandmtn-kitchen.webp',
        alt: 'Kitchen with a long timber island under soapstone, cream cabinetry, timber range hood, and galvanized pendants',
        caption: 'Kitchen',
        tone: 'tone-tan',
      },
      {
        src: '/images/sandmtn-primary-bedroom.webp',
        alt: 'Upstairs primary bedroom under a beamed vaulted ceiling with a dormer window to the pasture',
        caption: 'Primary bedroom',
        tone: 'tone-tan',
      },
    ],
    next: 'hurricane-ranch',
    description:
      'Sand Mountain Farmhouse — a ready-to-build two-story board-and-batten farmhouse plan with 4 bedrooms and 3.5 baths. From Compass Design Studio.',
  },
  {
    slug: 'keel-cabin',
    title: 'Keel Cabin',
    eyebrow: 'Ready-to-build · One-bedroom cabin',
    category: 'plans',
    card: {
      src: '/images/keel-cabin-exterior.webp',
      alt: 'Keel Cabin — timber-framed gable, board-and-batten cedar, and stone chimney in the pines',
      tone: 'tone-tan',
      label: 'Coming soon',
    },
    hero: {
      src: '/images/keel-cabin-exterior.webp',
      alt: 'Keel Cabin — timber-framed gable with heavy beams, board-and-batten cedar, stone chimney and base, and a flagstone terrace in the pines',
      tone: 'tone-tan',
    },
    prose: [
      'Keel Cabin is a ready-to-build plan for a one-bedroom cabin in the Appalachian mountains — a compact footprint sized for a wooded or sloping lot, with the main room turned toward the long view.',
      'Heavy timber does the structural and visual work. A framed truss carries the front gable over a full wall of glass and French doors, with beams and brackets left exposed under deep eaves. Black metal — window frames, doors, hardware, the roof — draws every edge tight against the wood.',
      'The exterior is meant to age rather than date: stained board-and-batten cedar, a stone chimney mass and base, and a flagstone terrace that steps down with the grade. A low garage wing sits back from the gable, keeping the cabin the taller of the two.',
    ],
    sheetHeading: 'Ready-to-build plan',
    sheet: [
      { label: 'Bedrooms', value: '1' },
      { label: 'Bathrooms', value: '1' },
      { label: 'Sq ft', value: '750' },
      { label: 'Stories', value: '1' },
    ],
    sheetCta: true,
    gallery: [
      {
        src: '/images/keel-dining-kitchen.webp',
        alt: 'Dining table and kitchen beyond the hearth, open to the main room under exposed beams',
        caption: 'Dining and kitchen',
        tone: 'tone-tan',
        modifier: 'wide',
      },
      {
        src: '/images/keel-bedroom.webp',
        alt: 'Bedroom under a beamed sloped ceiling with paired windows to the pines and a plank door to the bath',
        caption: 'Bedroom',
        tone: 'tone-tan',
      },
      {
        src: '/images/keel-bathroom.webp',
        alt: 'Bath with a stained wood vanity, stone counter, oil-rubbed bronze fittings, and a tiled walk-in shower',
        caption: 'Bath',
        tone: 'tone-tan',
      },
      {
        src: '/images/keel-living-room.webp',
        alt: 'Living room under a heavy timber truss ceiling, stone fireplace to the ceiling, and black-framed French doors to the pines',
        caption: 'Living room',
        tone: 'tone-tan',
        modifier: 'wide',
      },
    ],
    next: 'cedar-ridge-house',
    description:
      'Keel Cabin — a ready-to-build one-bedroom cabin plan for the Appalachian mountains, in heavy timber, cedar, and stone. From Compass Design Studio.',
  },
  {
    slug: 'cedar-ridge-house',
    title: 'Cedar Ridge House',
    eyebrow: 'Ready-to-build · Split-level',
    category: 'plans',
    card: {
      src: '/images/cedar-exterior.webp',
      alt: 'Cedar Ridge House — split-level with a shed gable over a two-story glass wall and vertical cedar siding',
      tone: 'tone-navy',
      label: 'Coming soon',
    },
    hero: {
      src: '/images/cedar-exterior.webp',
      alt: 'Cedar Ridge House — split-level with a broad shed gable over a two-story glass wall, vertical cedar siding, and a low garage wing',
      tone: 'tone-navy',
    },
    prose: [
      'Cedar Ridge House is a ready-to-build plan — a split-level drawn for a wooded or gently sloping lot, with the main living level lifted to meet the trees.',
      'The kitchen sits at the center of the plan, open to the living room past a full-height cabinet wall that hides pantry and utility. A stone-topped island seats three, and clerestory glazing above the run brings light in over the counters without giving up wall space.',
      'Sleeping and working rooms hold the quiet end: a primary bedroom under a sloped beamed ceiling with a long window to the trees, an ensuite bath with a floating double vanity and glass shower, and a separate office with a built-in desk and credenza under a ribbon window. Beamed tongue-and-groove ceilings, walnut millwork, and plaster walls run throughout.',
    ],
    sheetHeading: 'Ready-to-build plan',
    sheet: [
      { label: 'Bedrooms', value: '4' },
      { label: 'Bathrooms', value: '3' },
      { label: 'Sq ft', value: '2,400' },
      { label: 'Stories', value: '1.5' },
    ],
    sheetCta: true,
    gallery: [
      {
        src: '/images/cedar-living-room.webp',
        alt: 'Living room with a two-story glass wall to the entry court, exposed beams, and the split-level stair rising past a built-in walnut credenza',
        caption: 'Living room',
        tone: 'tone-tan',
        modifier: 'wide',
      },
      {
        src: '/images/cedar-kitchen.webp',
        alt: 'Kitchen with walnut cabinetry, stone-topped island and bar stools, clerestory glazing, and a beamed tongue-and-groove ceiling',
        caption: 'Kitchen',
        tone: 'tone-tan',
        modifier: 'wide',
      },
      {
        src: '/images/cedar-primary-bedroom.webp',
        alt: 'Primary bedroom under a sloped beamed wood ceiling with a walnut headboard wall and a long window to the trees',
        caption: 'Primary bedroom',
        tone: 'tone-tan',
      },
      {
        src: '/images/cedar-primary-bath.webp',
        alt: 'Primary bath with a floating walnut double vanity, stone counter, brass sconces, and a glass walk-in shower',
        caption: 'Primary bath',
        tone: 'tone-tan',
      },
      {
        src: '/images/cedar-office.webp',
        alt: 'Home office with built-in walnut desk and credenza under a ribbon window to the garden',
        caption: 'Office',
        tone: 'tone-tan',
        modifier: 'wide',
      },
    ],
    next: 'quarry-court',
    description:
      'Cedar Ridge House — a ready-to-build split-level plan for a wooded or sloping lot, with 4 bedrooms and 3 baths. From Compass Design Studio.',
  },
  {
    slug: 'quarry-court',
    title: 'Quarry Court',
    eyebrow: 'Ready-to-build · Two story home',
    category: 'plans',
    card: {
      src: '/images/quarry-court-exterior.webp',
      alt: 'Quarry Court — two-story stucco house with slate hip roof, dark green shutters, and arched wood entry door',
      tone: 'tone-stone',
      label: 'Coming soon',
    },
    hero: {
      src: '/images/quarry-court-exterior.webp',
      alt: 'Quarry Court — two-story stucco house with a slate hip roof, bracketed eaves, dark green shutters, arched wood entry door, and stone-paved walk under mature trees',
      tone: 'tone-stone',
    },
    prose: [
      'A two-story plan in the manner of an older street. Stucco walls, a slate hip roof with bracketed eaves, and shuttered casements set in stone surrounds. The arched wood door sits under a lantern, centered on a stone walk.',
      'Inside, an entry hall runs the depth of the house with a stair of iron balusters against plaster, and rooms opening to either side. The living room takes a limestone fireplace between built-in walnut bookcases; the kitchen holds a plaster hood, a marble-topped island, and a bay-window table for morning light.',
      'Bedrooms sit above, quiet and square, with paired windows and wide plank floors carried through. Drawings are available for build as designed, with adjustments to site and orientation on request.',
    ],
    sheetHeading: 'Ready-to-build plan',
    sheet: [
      { label: 'Bedrooms', value: '5' },
      { label: 'Bathrooms', value: '3.5' },
      { label: 'Sq ft', value: '3,000' },
      { label: 'Stories', value: '2' },
    ],
    sheetCta: true,
    gallery: [
      {
        src: '/images/quarry-living-room.webp',
        alt: 'Living room with plaster walls, tall casement windows, a limestone fireplace flanked by built-in walnut bookcases, and an arched glazed door to the garden',
        caption: 'Living room',
        tone: 'tone-tan',
        modifier: 'wide',
      },
      {
        src: '/images/quarry-kitchen.webp',
        alt: 'Kitchen with a plaster range hood, marble backsplash, cream cabinetry with brass hardware, a walnut island under a marble top, and a bay-window breakfast table',
        caption: 'Kitchen',
        tone: 'tone-stone',
        modifier: 'wide',
      },
      {
        src: '/images/quarry-entry.webp',
        alt: 'Entry hall with an arched glazed front door, dark stained stair with iron balusters, wide plank floors, and a runner rug',
        caption: 'Entry',
        tone: 'tone-tan',
      },
      {
        src: '/images/quarry-primary-bedroom.webp',
        alt: 'Primary bedroom with an upholstered wood bed, paired casement windows in linen curtains, an antique chest, and a tall wardrobe',
        caption: 'Primary bedroom',
        tone: 'tone-stone',
      },
    ],
    next: 'lantern-house',
    description:
      'Quarry Court — a ready-to-build two-story plan in the manner of an older street: stucco, slate, stone surrounds. From Compass Design Studio.',
  },
  {
    slug: 'lantern-house',
    title: 'Lantern House',
    eyebrow: 'Ready-to-build · Two story house',
    category: 'plans',
    card: {
      src: '/images/lantern-exterior.webp',
      alt: 'Lantern House — cream painted-brick cottage with a steep shingled roof and dormers',
      tone: 'tone-tan',
      label: 'Coming soon',
    },
    hero: {
      src: '/images/lantern-exterior.webp',
      alt: 'Lantern House — cream painted-brick cottage with a steep shingled roof, dormers, arched entry hood, and a stone walk',
      tone: 'tone-tan',
    },
    prose: [
      'A cream painted-brick cottage under a steep shingled roof, with dormers set into the slope and an arched hood over the front door. A stone walk leads straight in.',
      'The entry hall opens on an oak stair with turned balusters and a brass lantern overhead, with a view through to the hearth. The living room takes a white painted-brick fireplace and timber mantel, divided-light windows on two walls, and an arched opening into the next room.',
      'In the kitchen, cream cabinetry and brass fittings surround a work island, with a farmhouse sink and the dining table set in a window bay. Upstairs the bedrooms tuck under the roof slopes, with a dormer window seat and built-in cabinetry below the eave. Drawings are available for build as designed, with adjustments to site and orientation on request.',
    ],
    sheetHeading: 'Ready-to-build plan',
    sheet: [
      { label: 'Bedrooms', value: '3' },
      { label: 'Bathrooms', value: '2.5' },
      { label: 'Sq ft', value: '2,200' },
      { label: 'Stories', value: '2' },
    ],
    sheetCta: true,
    gallery: [
      {
        src: '/images/lantern-living-room.webp',
        alt: 'Living room with a white painted-brick fireplace and timber mantel, divided-light windows on two walls, and an arched opening through to the kitchen',
        caption: 'Living room',
        tone: 'tone-tan',
        modifier: 'wide',
      },
      {
        src: '/images/lantern-kitchen.webp',
        alt: 'Kitchen with cream cabinetry, farmhouse sink, brass fittings and pendants, a work island, and a dining table in the window bay',
        caption: 'Kitchen and dining',
        tone: 'tone-tan',
        modifier: 'wide',
      },
      {
        src: '/images/lantern-entry-stair.webp',
        alt: 'Entry hall with an oak stair and turned balusters, brass lantern overhead, and a view through to the living room hearth',
        caption: 'Entry and stair',
        tone: 'tone-tan',
      },
      {
        src: '/images/lantern-primary-bed.webp',
        alt: 'Upstairs bedroom tucked under the roof slopes with a dormer window seat and built-in cabinetry below the eave',
        caption: 'Primary bedroom',
        tone: 'tone-tan',
      },
    ],
    next: 'widner-residence',
    description:
      'Lantern House — a ready-to-build cream painted-brick cottage plan with 3 bedrooms and 2.5 baths. From Compass Design Studio.',
  },
  {
    slug: 'stone-meadow',
    title: 'Stone Meadow',
    eyebrow: 'Ready-to-build · 1-1/2 story',
    category: 'plans',
    card: {
      src: '/images/stone-exterior.webp',
      alt: 'Stone Meadow — cream clapboard bungalow with a deep columned porch and gabled dormer',
      tone: 'tone-stone',
      label: 'Coming soon',
    },
    hero: {
      src: '/images/stone-exterior.webp',
      alt: 'Stone Meadow — cream clapboard bungalow with a deep columned porch, gabled dormer, and brick chimney under mature trees',
      tone: 'tone-stone',
    },
    prose: [
      'A cream clapboard bungalow with a deep columned porch across the front, a gabled dormer above, and a brick chimney holding one end. The proportions are modest and the roof does most of the work.',
      'Inside, the living room opens under a whitewashed beamed cathedral ceiling to a painted brick fireplace and a wall of divided-light windows. The dining room takes windows on two sides and a wide opening back through to the living room, so the main floor reads as one bright volume.',
      'The kitchen is stained cabinetry against marble and subway tile, with brass pendants over the island. Upstairs, the primary bedroom sits under a sloped beamed ceiling lit by a band of dormer windows. Drawings are available for build as designed, with adjustments to site and orientation on request.',
    ],
    sheetHeading: 'Ready-to-build plan',
    sheet: [
      { label: 'Bedrooms', value: '4' },
      { label: 'Bathrooms', value: '3' },
      { label: 'Sq ft', value: '1,900' },
      { label: 'Stories', value: '1.5' },
    ],
    sheetCta: true,
    gallery: [
      {
        src: '/images/stone-living-room.webp',
        alt: 'Living room with painted brick fireplace, whitewashed beamed cathedral ceiling, and a wall of divided-light windows',
        caption: 'Living room',
        tone: 'tone-tan',
        modifier: 'wide',
      },
      {
        src: '/images/stone-kitchen.webp',
        alt: 'Kitchen with stained cabinetry, marble island and counters, subway tile, brass pendants, and a stainless range under a wall hood',
        caption: 'Kitchen',
        tone: 'tone-stone',
      },
      {
        src: '/images/stone-dining-room.webp',
        alt: 'Dining room with a long farm table, divided-light windows on two walls, and a wide opening through to the living room',
        caption: 'Dining room',
        tone: 'tone-tan',
      },
      {
        src: '/images/stone-primary-bedroom.webp',
        alt: 'Upstairs primary bedroom under a sloped beamed ceiling with a band of dormer windows and wide-plank floors',
        caption: 'Primary bedroom',
        tone: 'tone-stone',
        modifier: 'wide',
      },
    ],
    next: 'harbor-line',
    description:
      'Stone Meadow — a ready-to-build 1½-story clapboard bungalow plan with 4 bedrooms and 3 baths. From Compass Design Studio.',
  },
  {
    slug: 'harbor-line',
    title: 'Harbor Line',
    eyebrow: 'Ready-to-build · Two story house',
    category: 'plans',
    card: {
      src: '/images/harbor-exterior.webp',
      alt: 'Harbor Line — green shingled lake house with timber-bracketed porch and stone chimney',
      tone: 'tone-stone',
      label: 'Coming soon',
    },
    hero: {
      src: '/images/harbor-exterior.webp',
      alt: 'Harbor Line — green shingled lake house with timber-bracketed porch, stone chimney and base, and a flagstone walk through the trees',
      tone: 'tone-stone',
    },
    prose: [
      'A green shingled lake house on a stone base, with a timber-bracketed porch and a stone chimney rising through the eave. A flagstone walk arrives through the trees.',
      'The living room is built around a floor-to-ceiling stone fireplace with a timber mantel, exposed beams overhead, and glass doors out to a screened porch. That porch is the center of the plan — timber posts and brackets on stone piers, a plank ceiling, and the water in full view.',
      'The kitchen runs a long green island under stone counters, with a timber range hood and lantern pendants, and the dining table set to the windows. The primary bedroom sits under a beamed vault with one wide black-framed window. Drawings are available for build as designed, with adjustments to site and orientation on request.',
    ],
    sheetHeading: 'Ready-to-build plan',
    sheet: [
      { label: 'Bedrooms', value: '4' },
      { label: 'Bathrooms', value: '3.5' },
      { label: 'Sq ft', value: '2,500' },
      { label: 'Stories', value: '2' },
    ],
    sheetCta: true,
    gallery: [
      {
        src: '/images/harbor-living-room.webp',
        alt: 'Living room with a floor-to-ceiling stone fireplace and timber mantel, exposed beams, and glass doors out to the screened porch and lake',
        caption: 'Living room',
        tone: 'tone-tan',
        modifier: 'wide',
      },
      {
        src: '/images/harbor-kitchen.webp',
        alt: 'Kitchen with a long green island under stone counters, stained cabinetry, timber range hood, and lantern pendants, dining table to the lake windows',
        caption: 'Kitchen and dining',
        tone: 'tone-tan',
        modifier: 'wide',
      },
      {
        src: '/images/harbor-porch.webp',
        alt: 'Screened three-season porch with timber posts and brackets, plank ceiling, stone piers, and wicker seating facing the lake at sunset',
        caption: 'Three-season porch',
        tone: 'tone-tan',
      },
      {
        src: '/images/harbor-primary-bed.webp',
        alt: 'Primary bedroom under a beamed vaulted ceiling with a wide black-framed window to the lake',
        caption: 'Primary bedroom',
        tone: 'tone-tan',
      },
    ],
    next: 'hollis-house',
    description:
      'Harbor Line — a ready-to-build green shingled lake house plan with 4 bedrooms and 3.5 baths. From Compass Design Studio.',
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
