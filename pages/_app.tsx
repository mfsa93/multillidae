import '../styles/globals.css'
import type { AppProps } from 'next/app'

function Multillidae({ Component, pageProps }: AppProps) {
  return (
    <div className="content min-h-screen max-w-screen">
        <Component {...pageProps} />
    </div>
  )
}

export default Multillidae
