import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Footer from '../footer'
import Navbar from '../navbar'

export default function PageLayout(props) {

    const children = props.children

    return (
        <>
            <Head>
                <title>{props?.title || 'Mintyplex'}</title>
            </Head>
            <Box>
                <Navbar />
                {children}
                <Footer />
            </Box>
        </>
    )
}
