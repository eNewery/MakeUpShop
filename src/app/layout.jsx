
import { MiContextoProvider } from './Components/CartContext'
import Footer from './Components/Footer'
import Header from './Components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Maybelline',
  description: 'Make up shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   <MiContextoProvider>
      <body className="container">
        <Header/>
        {children}
        <Footer/>
        </body>
   </MiContextoProvider>
    </html>
  )
}
