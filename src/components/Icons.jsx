const base = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }
const mk = (d) => (props) => <svg {...base} {...props} aria-hidden="true">{d}</svg>

export const PhoneIcon = mk(<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />)
export const MailIcon = mk(<><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></>)
export const ChatIcon = mk(<path d="M4 5h16v11H9l-5 4Z" />)
export const PinIcon = mk(<><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></>)
export const ClockIcon = mk(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>)
export const ArrowUp = mk(<path d="M12 19V5m-6 6 6-6 6 6" />)
export const CheckIcon = mk(<path d="m5 12 5 5 9-10" />)
export const PlusIcon = mk(<path d="M12 5v14M5 12h14" />)
export const ShieldIcon = mk(<><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6Z" /><path d="m9 12 2 2 4-4" /></>)
export const BoltIcon = mk(<path d="M13 3 5 14h6l-1 7 8-11h-6Z" />)

export const Instagram = mk(<><rect x="4" y="4" width="16" height="16" rx="5" /><circle cx="12" cy="12" r="3.6" /><circle cx="17" cy="7" r=".6" fill="currentColor" /></>)
export const Facebook = mk(<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5A.5.5 0 0 1 14 8Z" />)
export const XIcon = mk(<path d="M4 4l16 16M20 4 4 20" />)
export const YouTube = mk(<><rect x="3" y="6" width="18" height="12" rx="4" /><path d="m10 9.5 5 2.5-5 2.5Z" fill="currentColor" /></>)
export const WhatsApp = mk(<><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7Z" /><path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 .700c-1-.400-2-1.4-2.4-2.4L11.3 10l-1-2Z" /></>)
