import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'

import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {

  return(
  <ChakraProvider>
    
  <Component {...pageProps} />
    
  </ChakraProvider>
  )
}

export default MyApp
