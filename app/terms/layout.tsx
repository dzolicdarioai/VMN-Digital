import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | VMN Digital',
  description:
    'Placeholder terms of service for VMN Digital. Replace with counsel-approved content before production.',
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
