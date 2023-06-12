/* import './globals.css' */
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Leonardo Ramirez',
  description: 'Este es mi portafolio personal de Leonardo Ramirez',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* index follow */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Leonardo Ramirez" />
        <meta name="keywords" content="Leonardo Ramirez, Leonardo, Ramirez, Portafolio, Portafolio Leonardo Ramirez, Leonardo Ramirez Portafolio" />
        
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
