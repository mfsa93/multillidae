import '../styles/globals.css'
import type { AppProps } from 'next/app'
function Multillidae({ Component, pageProps }: AppProps) {
  return (
    <div className="content max-w-screen min-h-screen">
      <Component {...pageProps} />
    </div>
  )
}

export default Multillidae
