import { Box, Heading, VStack, Text, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
    return (
        <Box my='50px'>
            <VStack py='40px' bg='brand.800' gap='30px' borderTop='4px' borderColor='brand.400'>
                <Text>All-in-one Platform</Text>
                <Flex align='center' gap='30px' justify='center' flexWrap='wrap' fontSize={['14px', '24px']} fontWeight='700'>
                    <Text>Marketplace</Text>
                    <Text>Launchpad</Text>
                    <Text>Aggregator</Text>
                    <Text>Chatroom</Text>
                </Flex>
            </VStack>
            <VStack my='100px' gap='50px' textAlign='center'>
                <VStack gap='20px'>
                    <Heading fontSize={['32px', '60px']} color='brand.100' className='outline-text' >What is Mintyplex?</Heading>
                    <Text maxW='800px' textAlign='center' fontSize={['14px', '16px']}>Mintyplex is an NFT-based ecosystem providing creators, collectors and enthusiasts on Core Chain with accessible and empowering tools for digital ownership and monetization.</Text>
                </VStack>
                <VStack gap='20px'>
                    <Heading fontSize={['32px', '60px']} color='brand.100' className='outline-text' >Get to know $MTPX</Heading>
                    <Text maxW='800px' textAlign='center' fontSize={['14px', '16px']}>$MTPX is our native token with a total supply of 100 million, which will power the Mintyplex Ecosystem. Enthusiasts will be able to use $MTPX for transactions, earning rewards, and participating in governance once we launch our DAO.</Text>
                </VStack>
                <Box p='20px' id='tokenomics'>
                    <Image src='/assets/data.svg' width={700} height={700} alt='tokenomics' />
                </Box>
            </VStack>
            <Box rounded='full' w={150} h={150} bg='brand.500' opacity={0.5} position='absolute' top={960} filter='blur(70px)'/>
            <Box rounded='full' w={150} h={150} bg='brand.600' opacity={0.5} position='absolute' top={1600} right='0' filter='blur(70px)'/>
        </Box>
    )
}
