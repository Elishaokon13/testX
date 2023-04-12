import { Box } from '@chakra-ui/react'
import React from 'react'

export default function ContainerLayout({ children, ...props }) {
    return (
        <Box mx="auto" maxW="1268px" w="full" px={{ base: '4', md: '8', lg: '12' }} {...props}>
            {children}
        </Box>
    )
}
