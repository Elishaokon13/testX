import { Box, Card, CardBody, Flex, Heading, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function Team() {

    return (
        <Box my='100px' id='team'>
            <VStack>
                <Heading fontSize={['32px', '60px']} className='outline-text' color='brand.100' textAlign='center' >Meet Our Team</Heading>
                <SimpleGrid columns={[1, 2, 3]} gap='20px'>
                    <Card maxW='sm' bg='none' color='white'>
                        <CardBody>
                            <Box borderRadius='0px 20px 0px 0px' overflow='hidden'>
                            <Image
                                src='/assets/five.jpg'
                                width={300}
                                height={300}
                                alt='Profile'
                            />
                            </Box>
                            <Stack mt='4' spacing='2'>
                                <Heading size='sm' fontWeight='600' >Sadiq</Heading>
                                <Text fontSize='14px' fontWeight='300'>Team Lead</Text>
                                <Flex gap='10px' color='whiteAlpha.600'>
                                    <Box as='a' href='https://twitter.com/sadiqisiakaa' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
                                        <FaTwitter />
                                    </Box>
                                    <Box as='a' href='https://www.linkedin.com/in/sadiqannes' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
                                        <FaLinkedinIn />
                                    </Box>
                                </Flex>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card maxW='sm' bg='none' color='white'>
                        <CardBody>
                            <Box borderRadius='0px 20px 0px 0px' overflow='hidden'>
                                <Image
                                    src='/assets/three.jpg'
                                    width={300}
                                    height={300}
                                    alt='Profile'
                                />
                            </Box>
                            <Stack mt='4' spacing='2'>
                                <Heading size='sm' fontWeight='600' >Isaac</Heading>
                                <Text fontSize='14px' fontWeight='300'>Operations Lead</Text>
                                <Flex gap='10px' color='whiteAlpha.600'>
                                    <Box as='a' href='https://twitter.com/isikcomen' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
                                        <FaTwitter />
                                    </Box>
                                    <Box as='a' href='https://www.linkedin.com/in/temidayo-isaac-b57631122' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
                                        <FaLinkedinIn />
                                    </Box>
                                </Flex>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card maxW='sm' bg='none' color='white'>
                        <CardBody>
                            <Box borderRadius='0px 20px 0px 0px' overflow='hidden'>
                                <Image
                                    src='/assets/six.jpg'
                                    width={300}
                                    height={300}
                                    alt='Profile'
                                />
                            </Box>
                            <Stack mt='4' spacing='2'>
                                <Heading size='sm' fontWeight='600' >Bright</Heading>
                                <Text fontSize='14px' fontWeight='300'>Dev Lead</Text>
                                <Flex gap='10px' color='whiteAlpha.600'>
                                    <Box as='a' href='https://twitter.com/OlumideSilas' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
                                        <FaTwitter />
                                    </Box>
                                    <Box as='a' href='https://www.linkedin.com/in/olumide-silas/' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
                                        <FaLinkedinIn />
                                    </Box>
                                </Flex>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card maxW='sm' bg='none' color='white'>
                        <CardBody>
                            <Box borderRadius='0px 20px 0px 0px' overflow='hidden'>
                                <Image
                                    src='/assets/four.jpg'
                                    width={300}
                                    height={300}
                                    alt='Profile'
                                />
                            </Box>
                            <Stack mt='4' spacing='2'>
                                <Heading size='sm' fontWeight='600' >Emmanuel</Heading>
                                <Text fontSize='14px' fontWeight='300'>Community Lead</Text>
                                <Flex gap='10px' color='whiteAlpha.600'>
                                    <Box as='a' href='https://twitter.com/EmmanuelNFTs' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
                                        <FaTwitter />
                                    </Box>
                                    <Box as='a' href='https://www.linkedin.com/in/adeyemi-emmanuel' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
                                        <FaLinkedinIn />
                                    </Box>
                                </Flex>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card maxW='sm' bg='none' color='white'>
                        <CardBody>
                            <Box borderRadius='0px 20px 0px 0px' overflow='hidden'>
                                <Image
                                    src='/assets/two.jpg'
                                    width={300}
                                    height={300}
                                    alt='Profile'
                                />
                            </Box>
                            <Stack mt='4' spacing='2'>
                                <Heading size='sm' fontWeight='600' >Clement</Heading>
                                <Text fontSize='14px' fontWeight='300'>Product Lead</Text>
                                <Flex gap='10px' color='whiteAlpha.600'>
                                    <Box as='a' href='https://twitter.com/DesignRabbi' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
                                        <FaTwitter />
                                    </Box>
                                    <Box as='a' href='https://www.linkedin.com/in/fadeyi-clement-7b0aa422a' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
                                        <FaLinkedinIn />
                                    </Box>
                                </Flex>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card maxW='sm' bg='none' color='white'>
                        <CardBody>
                            <Box borderRadius='0px 20px 0px 0px' overflow='hidden'>
                                <Image
                                    src='/assets/one.jpg'
                                    width={300}
                                    height={300}
                                    alt='Profile'
                                />
                            </Box>
                            <Stack mt='4' spacing='2'>
                                <Heading size='sm' fontWeight='600' >Gabriel</Heading>
                                <Text fontSize='14px' fontWeight='300'>Brand Lead</Text>
                                <Flex gap='10px' color='whiteAlpha.600'>
                                    <Box as='a' href='https://twitter.com/gabrielboazz' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
                                        <FaTwitter />
                                    </Box>
                                    <Box as='a' href='' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
                                        <FaLinkedinIn />
                                    </Box>
                                </Flex>
                            </Stack>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            </VStack>
            <Box rounded='full' w={150} h={150} bg='brand.600' opacity={0.5} position='absolute' top={4000} right='0' filter='blur(70px)' />
        </Box>
    )
}
