import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata = {
  title: 'EB Field Support AS',
  description:
    'Endring, vedlikehold og support på lysstyringssystemer. ' +
    'Changes, maintenance and support for lighting control systems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="no" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  )
}
