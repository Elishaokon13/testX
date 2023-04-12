// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import '@/styles/globals.css'
import theme from '@/theme'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  )
}

export default MyApp