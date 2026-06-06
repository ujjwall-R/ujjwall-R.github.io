// ── Activities ────────────────────────────────────────────
export const activities = [
  { name: 'Strength Training', icon: '🏋️' },
  { name: 'Running',           icon: '🏃' },
  { name: 'Swimming',          icon: '🏊' },
  { name: 'Cycling',           icon: '🚴' },
  { name: 'Badminton',         icon: '🏸' },
]

// ── Static stats ──────────────────────────────────────────
export const staticStats = [
  { label: 'Strength sessions / week', value: '3–4' },
  { label: '5K personal best',         value: '24:23' },
  { label: '100m sprint best',         value: '14s' },
  { label: '400m best',                value: '59s' },
]

// ── Dynamic stat config ───────────────────────────────────
// Days punched calculated from startDate at avgDaysPerWeek
export const punchConfig = {
  startDate:       '2025-12-21',
  avgDaysPerWeek:  4,
}

// ── Collage images ────────────────────────────────────────
export const collageImages = [
  { src: '/images/sweat-swim.png',    alt: 'Swimming',          cropFace: false, objectPosition: '90% 100%'  },
  { src: '/images/sweat-gym2.png',    alt: 'Gym',               cropFace: true,  objectPosition: '95% 100%'  },
  { src: '/images/sweat-cycle.png',   alt: 'Cycling',           cropFace: false, objectPosition: 'center top' },
  { src: '/images/sweat-mirror.png',  alt: 'Post gym',          cropFace: true,  objectPosition: 'center 65%' },
  { src: '/images/sweat-machine.png', alt: 'Machine training',  cropFace: false, objectPosition: '35% 55%'    },
]
