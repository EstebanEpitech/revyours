import '../styles/globals.css'
import type { AppProps } from 'next/app'
import  localFont  from 'next/font/local'

const myFont = localFont({ src: '../public/fonts/Avenir_Regular.ttf' })
function MyApp({ Component, pageProps }: AppProps) {
  return (
      <main className={myFont.className}>
        <Component {...pageProps} />
      </main>
  )
}

export default MyApp
