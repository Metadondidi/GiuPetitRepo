import './globals.css'

export const metadata = {
  title: 'Giulia Petit - Avocat à Marseille',
  description: 'Cabinet d\'avocat spécialisé en droit civil, droit de la famille et droit des affaires à Marseille',
  keywords: 'avocat, Marseille, droit civil, droit de la famille, droit des affaires, Giulia Petit',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
