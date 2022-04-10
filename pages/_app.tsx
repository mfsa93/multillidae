import '../styles/globals.css'
import type { AppProps } from 'next/app'

function Multillidae({ Component, pageProps }: AppProps) {
  return (
    <div className="content flex min-h-screen max-w-screen py-2">
        <Component {...pageProps} />
    </div>
  
  )
}

export default Multillidae
