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
  { label: '5K personal best',  value: '24:23' },
  { label: '100m sprint best',  value: '13.8s' },
  { label: '400m best',         value: '59.8s' },
]

// ── Dynamic stat config ───────────────────────────────────
// Days punched calculated from startDate at avgDaysPerWeek
export const punchConfig = {
  startDate:       '2025-12-21',
  avgDaysPerWeek:  4,
}

// ── Collage images ────────────────────────────────────────
export const collageImages = [
  { src: '/images/sweat-swim.webp',    alt: 'Swimming',          cropFace: false, objectPosition: '95% 100%'  },
  { src: '/images/sweat-gym2.webp',    alt: 'Gym',               cropFace: true,  objectPosition: '95% 100%'  },
  { src: '/images/sweat-mirror.webp',  alt: 'Post gym',          cropFace: true,  objectPosition: 'center 65%' },
  { src: '/images/sweat-cycle.webp',   alt: 'Cycling',           cropFace: false, objectPosition: 'center top' },
  { src: '/images/sweat-machine.webp', alt: 'Machine training',  cropFace: false, objectPosition: '40% 55%'    },
]
