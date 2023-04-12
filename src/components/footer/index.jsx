import { Box, Flex, Text, Stack, List, ListItem, VStack, Heading, Input, InputGroup, InputLeftAddon, InputRightElement, Button } from '@chakra-ui/react'
import React from 'react'
import ContainerLayout from '../layout/container'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaDiscord, FaFacebook, FaLinkedinIn, FaTelegram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <Box mt={5} id='footer'>
            <Box p='20px'>
                <ContainerLayout pt='60px'>
                    <Flex align="center" justify='center' p={{ base: '10px', md: '' }}>
                        <Stack spacing='60px' width='100%'>
                            <Box>
                                <Stack direction={['column', 'row']} justify='space-between' spacing={10}>
                                    <VStack align={['flex-start']} spacing='20px'>
                                        <Flex gap='10px'>
                                            <Image src='/assets/logo.png' height={36} width={36} alt='Atap Logo' />
                                            <Text fontWeight='700'>MINTYPLEX</Text>
                                        </Flex>
                                        {/* <Box as='a' >
                                        <Button>Contact Us</Button>
                                        </Box> */}
                                        {/* <InputGroup>
                                            <Input type='email' placeholder='Email Address' />
                                            <InputRightElement type='submit'><FaArrowRight /></InputRightElement>
                                        </InputGroup> */}
                                        <Text maxW='450px'>Stay in the know, subscribe to our email list to receive updates, news, and specials offers.</Text>
                                        <Flex gap='10px' color='whiteAlpha.600'>
                                            <Box as='a' href='https://twitter.com/Mintyplex' rounded='full' p='6px' border='1px' _hover={{ color: 'white' }}>
                                                <FaTwitter />
                                            </Box>
                                            <Box as='a' href='https://www.facebook.com/mintyplex' rounded='full' p='6px' border='1px' _hover={{ color: 'white' }}>
                                                <FaFacebook />
                                            </Box>
                                            <Box as='a' href='https://www.linkedin.com/company/mintyplex/' rounded='full' p='6px' border='1px' _hover={{ color: 'white' }}>
                                                <FaLinkedinIn />
                                            </Box>
                                            <Box as='a' href='https://discord.gg/Fu5bXmZNVU' rounded='full' p='6px' border='1px' _hover={{ color: 'white' }}>
                                                <FaDiscord />
                                            </Box>
                                            <Box as='a' href='https://t.me/mintyplex' rounded='full' p='6px' border='1px' _hover={{ color: 'white' }}>
                                                <FaTelegram />
                                            </Box>
                                        </Flex>
                                        <Text fontSize={{ base: '12px', sm: '14px', }} fontWeight='500' color='white' >Mintyplex © 2023. All Rights Reserved.</Text>
                                    </VStack>
                                    <VStack align='left' spacing='30px' display={['none', 'flex']}>
                                        <Stack direction={['row']} spacing={10} justify='space-around'>
                                            <List display='flex' flexDirection='column' gap='10px'>
                                                <Box as='a' href="/" target='_blank'><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.8' cursor='pointer' color='white'>Home</ListItem></Box>
                                                <Box as='a' href="/" target='_blank'><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.8' cursor='pointer'>Tokenomics</ListItem></Box>
                                                <Box as='a' href="/" target='_blank'><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.8' cursor='pointer'>Roadmap</ListItem></Box>
                                                <Box as='a' href="/" target='_blank'><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.8' cursor='pointer'>Team</ListItem></Box>
                                                <Box as='a' href="/" target='_blank'><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.8' cursor='pointer'>Community</ListItem></Box>
                                                <Box as='a' href="/assets/mintyplex_whitepaper_v1.pdf" target='_blank'><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.8' cursor='pointer'>Whitepaper</ListItem></Box>
                                            </List>
                                        </Stack>
                                    </VStack>
                                </Stack>
                            </Box>
                        </Stack>
                    </Flex>
                </ContainerLayout>
            </Box >
        </Box>
    )
}
