import { Box, Heading, VStack, Text, Flex } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
    return (
        <Box my='50px'>
            {/* <VStack py='40px' bg='brand.200' gap='30px' borderTop='4px' borderColor='brand.400'>
                <Text>All-in-one Platform</Text>
                <Flex align='center' gap='30px' justify='center' textColor={"brand.800"} flexWrap='wrap' fontSize={['14px', '24px']} fontWeight='700'>
                    <Text>Marketplace</Text>
                    <Text>Launchpad</Text>
                    <Text>Aggregator</Text>
                    <Text>Chatroom</Text>
                </Flex>
            </VStack> */}
            <VStack align={"center"} my='100px' gap='50px' textAlign='center'>
                <VStack gap='20px'>
                    <Heading fontSize={['32px', '60px']} color='brand.100' className='outline-text' >What is BABY FURBO?</Heading>
                    <Text maxW='800px' textAlign='center' fontSize={['14px', '16px']}>Mintyplex is an NFT-based ecosystem providing creators, collectors and enthusiasts on Core Chain with accessible and empowering tools for digital ownership and monetization.</Text>
                </VStack>
                <VStack gap='20px'>
                    <Heading fontSize={['32px', '60px']} color='brand.100' className='outline-text' >Get to know $MTPX</Heading>
                    <Text maxW='800px' textAlign='center' fontSize={['14px', '16px']}>$MTPX is our native token with a total supply of 100 million, which will power the Mintyplex Ecosystem. Enthusiasts will be able to use $MTPX for transactions, earning rewards, and participating in governance once we launch our DAO.</Text>
                </VStack>
                <Card>
                    <CardHeader>
                        <Heading size='md'>$FARB TOKENOMICS</Heading>
                    </CardHeader>

                    <CardBody>
                        <VStack spacing='4'>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                Total Supply
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                 10,000,000,000
                                </Text>
                            </Box>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                🔥 Burn
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                40%
                                </Text>
                            </Box>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                💰 Supply 
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                50%
                                </Text>
                            </Box>
                        </VStack>
                    </CardBody>
                </Card>

            </VStack>
            <Box rounded='full' w={150} h={150} bg='brand.200' opacity={0.5} position='absolute' top={960} filter='blur(70px)' />
            <Box rounded='full' w={150} h={150} bg='brand.200' opacity={0.5} position='absolute' top={1600} right='0' filter='blur(70px)' />
        </Box>
    )
}
