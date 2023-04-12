import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import AuthBG from '../assets/auth-image.png'

export default function AuthLayout({ children }) {
    return (
        <Box h='100vh'>
            <Flex h='full' overflow='hidden'>
                <Box w='30%' h='full' objectPosition='center' objectFit='contain'>
                    <Image src={AuthBG} alt='background' />
                </Box>
                <Box w='70%' p='100px' overflowY='scroll'>
                    <Flex justify='center'>
                        {children}
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}
