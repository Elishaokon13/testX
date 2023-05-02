import { Box, Flex, VStack, useBreakpointValue, Button, ButtonGroup, Text, useDisclosure, Collapse } from '@chakra-ui/react'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ContainerLayout from '../layout/container'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsXLg } from 'react-icons/bs'


export default function Navbar() {

    const router = useRouter()
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    const { isOpen, onToggle } = useDisclosure()

    const [dropdown, setDropdown] = useState(false)

    return (
        <>
            <Box as="nav" mb={5} p='30px' color='white' borderBottom='1px' borderColor='whiteAlpha.500' position='fixed' w='full' zIndex={1000} top='0' backdropFilter='blur(20px)' >
                <ContainerLayout>
                    <Flex justify="space-between" align={'center'}>

                        <Link href="/">
                            <Image src='/assets/ARBFURBO.png' height={48} width={36} alt='Atap Logo' />
                        </Link>
                        {
                            !isDesktop && (
                                <>
                                    {
                                        isOpen ? (
                                            <Box onClick={onToggle}>
                                                <BsXLg size={30} />
                                            </Box>
                                        ) : (
                                            <Box onClick={onToggle}>
                                                <AiOutlineMenu size={30} />
                                            </Box>
                                        )
                                    }
                                </>
                            )
                        }
                        {isDesktop ? (
                            <ButtonGroup variant="link" spacing="40px" fontWeight='500' >
                                <Button fontWeight='500' onClick={() => router.push('/')} _hover={{ textDecoration: 'none', color: 'white' }} className={router.asPath != '/' ? "" : "nav-active"}>Home</Button>
                                <Button fontWeight='500' onClick={() => router.push('#tokenomics')} _hover={{ textDecoration: 'none', color: 'white' }} className={router.pathname != '#tokenomics' ? "" : "nav-active"}>Tokenomics</Button>
                                <Button fontWeight='500' onClick={() => router.push('#roadmap')} _hover={{ textDecoration: 'none', color: 'white' }} className={router.pathname != '#roadmap' ? "" : "nav-active"}>Roadmap</Button>
                                
                            </ButtonGroup>
                        ) : null}
                        {isDesktop ? (
                            <Flex gap='20px'>
                                <Link href='/'>
                                    <Button px='20px' bg='brand.700' fontWeight={400} color='white'>WHITEPAPER</Button>
                                </Link>
                            </Flex>
                        ) : null}

                    </Flex>
                    {
                        !isDesktop && (
                            <Collapse in={isOpen} animateOpacity>
                                <Flex flexDir='column' justify='flex-end' align='left' gap='20px' color='white' fontSize={20} fontWeight={700} h='50vh'>
                                    <Link href='/'>
                                        <Text py='2' px='1' cursor='pointer' _hover={{ color: 'whiteAlpha.500' }}>Home</Text>
                                    </Link>
                                    <Link href='#tokenomics'>
                                        <Text py='2' px='1' cursor='pointer' _hover={{ color: 'whiteAlpha.500' }}>Tokenomics</Text>
                                    </Link>
                                    <Link href='#roadmap'>
                                        <Text py='2' px='1' cursor='pointer' _hover={{ color: 'whiteAlpha.500' }}>Roadmap</Text>
                                    </Link>
                                    <Link href='/assets/mintyplex_whitepaper_v1.pdf'>
                                        <Text py='2' px='1' cursor='pointer' _hover={{ color: 'whiteAlpha.500' }}>Whitepaper</Text>
                                    </Link>
                                </Flex>
                            </Collapse>
                        )
                    }
                </ContainerLayout>
            </Box>
            {dropdown && (
                <VStack gap='10px' position='absolute' top={-5} right={480} p='10px' bg='brand.100' rounded='8px' border='1px' borderColor='brand.500' >
                    <Flex as='a' href='#faqs' justify='center' rounded='6px' px='40px' py='6px' _hover={{ bg: 'brand.700' }} fontSize='12px' w='full' bg='brand.100' border='1px' borderColor='brand.500'>
                        <Text>Faqs</Text>
                    </Flex>
                    <Flex as='a' href='#community' justify='center' rounded='6px' px='40px' py='6px' _hover={{ bg: 'brand.700' }} fontSize='12px' w='full' bg='brand.100' border='1px' borderColor='brand.500'>
                        <Text>Community</Text>
                    </Flex>
                    <Flex as='a' href='/assets/mintyplex_whitepaper_v1.pdf' justify='center' rounded='6px' px='40px' py='6px' _hover={{ bg: 'brand.700' }} fontSize='12px' w='full' bg='brand.100' border='1px' borderColor='brand.500'>
                        <Text>Whitepaper</Text>
                    </Flex>
                    <Flex as='a' href='#footer' justify='center' rounded='6px' px='40px' py='6px' _hover={{ bg: 'brand.700' }} fontSize='12px' w='full' bg='brand.100' border='1px' borderColor='brand.500'>
                        <Text>Contact Us</Text>
                    </Flex>
                </VStack>
            )}
        </>
    )
}



