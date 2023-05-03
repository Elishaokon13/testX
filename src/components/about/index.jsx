import { Box, Heading, VStack, Text, Flex } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
    return (
        <Box my='50px'>
            
            <VStack align={"center"} my='100px' gap='50px' textAlign='center'>
                <VStack gap='20px'>
                    <Heading fontSize={['32px', '60px']} color='brand.200' >What is BABY FURBO?</Heading>
                    <Text maxW='800px' textAlign='center' fontSize={['14px', '16px']}>Our Predecessor, $FARB gave us the idea of rewarding our holders and we added a twist. Holders get rewarded in both $FARB and $ARB tokens!</Text>
                </VStack>
                
                <Card bgColor={'brand.200'}>
                    <CardHeader>
                        <Heading size='md' id='tokenomics'>$BFARB TOKENOMICS</Heading>
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
                            <Box>

                                <Heading size='xs' textTransform='uppercase'>

                                💲 Marketing 

                                </Heading>

                                <Text pt='2' fontSize='sm'>

                                10%

                                </Text>

                            </Box>
                            <Box>

                                <Heading size='xs' textTransform='uppercase'>

                                BUY/SELL TAXES

                                </Heading>

                                <Text pt='2' fontSize='sm'>

                                6%

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
