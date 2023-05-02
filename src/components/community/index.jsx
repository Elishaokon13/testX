import { Box, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import ContainerLayout from '../layout/container'

export default function Community() {
    return (
        <Box my='50px' id='community'>
            <Box>
                {/* <VStack py='40px' bg='brand.800' gap='30px' borderTop='4px' borderColor='brand.400'>
                    <Text>Partnered with Innovative Brands</Text>
                    <Flex align='center' gap='50px' justify='center' flexWrap='wrap'>
                        <VStack>
                            <Box rounded='10px' overflow='hidden'>
                                <Image
                                    src='/assets/udlogo.svg'
                                    width={60}
                                    height={60}
                                    alt=''
                                />
                            </Box>
                            <Text fontSize='14px'>Unstopable Domains</Text>
                        </VStack>
                        <VStack>
                            <Box rounded='10px' overflow='hidden'>
                                <Image
                                    src='/assets/nrlogo.svg'
                                    width={60}
                                    height={60}
                                    alt=''
                                />
                            </Box>
                            <Text>NoRamp</Text>
                        </VStack>
                        <VStack>
                            <Box rounded='10px' overflow='hidden'>
                                <Image
                                    src='/assets/cdlogo.svg'
                                    width={60}
                                    height={60}
                                    alt=''
                                />
                            </Box>
                            <Text>Core Dao</Text>
                        </VStack>
                    </Flex>
                </VStack> */}

                <ContainerLayout mt='50px'>
                    <HStack w='full' rounded='20px' py={['20px', '40px']} px={['20px', '70px']} bgGradient={["linear(to-r, brand.800, brand.600)"]}>
                        <VStack align='left' gap='10px' maxW={[ 'auto', '450px']}>
                            <Text fontSize='20px' fontWeight='600'>Join our community</Text>
                            <Text fontWeight='700' fontSize='28px'>Let&lsquo;s Come Together and Transform the Way People View Digital Ownership!</Text>
                            <Text fontWeight='400'>At Mintyplex, we see NFTs as the missing link in enabling millions of people to embrace the Web3 space. By joining us, we can work together to make this vision a reality.</Text>
                            <Button href='https://discord.gg/Fu5bXmZNVU' bg='white' color='blue.600' w='fit-content'>Join discord</Button>
                        </VStack>
                    </HStack>
                </ContainerLayout>
            </Box>
        </Box>
    )
}
