// Small monoline icon set — deliberately plain geometric strokes (no fill,
// consistent stroke weight, rounded caps) in the style of app icons like
// Uber, Robinhood, and Airbnb: simple enough to read at a glance, no detail.

// Real reference images (not recreations) — swap the files in public/icons/
// to change them. Each entry below is the actual screenshot the user sent.
function makeImageIcon(src) {
  return function ImageIcon({ className }) {
    return <img src={src} alt="" className={`${className} object-contain`} />
  }
}

export const CalendarImageIcon = makeImageIcon('/icons/calendar.png')
export const CameraImageIcon = makeImageIcon('/icons/camera.png')
export const LinkImageIcon = makeImageIcon('/icons/link.png')
export const LeasingImageIcon = makeImageIcon('/icons/leasing.png')
export const TimeSpentImageIcon = makeImageIcon('/icons/time-spent.png')
export const DeniedClaimImageIcon = makeImageIcon('/icons/denied-claim.png')
export const DisputeImageIcon = makeImageIcon('/icons/dispute.png')

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A15.5 15.5 0 0 1 3.5 6.1 1.5 1.5 0 0 1 5 4.5Z" />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="M4.5 7l7.5 6 7.5-6" />
    </svg>
  )
}

export function MapPinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  )
}

export const ICONS = {
  calendar: CalendarImageIcon,
  camera: CameraImageIcon,
  link: LinkImageIcon,
  trending: LeasingImageIcon,
  clock: TimeSpentImageIcon,
  shield: DeniedClaimImageIcon,
  scale: DisputeImageIcon,
  phone: PhoneIcon,
  mail: MailIcon,
  pin: MapPinIcon,
}
