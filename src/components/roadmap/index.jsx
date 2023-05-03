import { Box, Flex, Heading, HStack, ListItem, UnorderedList, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ContainerLayout from '../layout/container'
import { SimpleGrid } from '@chakra-ui/react'

export default function Roadmap() {
    return (
        <Box my='100px' id='buytoken'>
            <ContainerLayout>
                <Heading textAlign='center' mb='50px' fontSize={['32px', '60px']}  color='brand.200' >How to Buy $BFARB</Heading>
                <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
                    <Text fontSize='24px' textAlign={"center"} fontWeight='500' color='brand.700'>1. Download Metamask</Text>
                    <Text fontSize='24px' textAlign={"center"} fontWeight='500' color='brand.700'>2. Buy ETH</Text>
                    <Text fontSize='24px' textAlign={"center"} fontWeight='500' color='brand.700'>3. Go to SushiSwap</Text>
                    <Text fontSize='24px' textAlign={"center"} fontWeight='500' color='brand.700'>4. Connect your wallet</Text>
                    <Text fontSize='24px' textAlign={"center"} fontWeight='500' color='brand.700'>5. Swap ETH for $BFARB</Text>
                    <Text fontSize='24px' textAlign={"center"} fontWeight='500' color='brand.700'>6. HODL</Text>
                
                </SimpleGrid>
            </ContainerLayout>
            <Box rounded='full' w={150} h={150} bg='brand.600' opacity={0.5} position='absolute' top={2200} filter='blur(70px)' />
            <Box rounded='full' w={150} h={150} bg='brand.500' opacity={0.5} position='absolute' top={2550} right='0' filter='blur(70px)' />
        </Box>
    )
}
