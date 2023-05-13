import { Box, Card, CardBody, Flex, Heading, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa'

export default function Team() {
    const styleObject = {
        borderRadius: '0px 20px 0px 0px',
        overflow: 'hidden'
    };
    return (
        // <Box my='100px' id='team'>
        //     <VStack>
        //         <Heading fontSize={['32px', '60px']} classNameName='outline-text' color='brand.100' textAlign='center' >Meet Our Team</Heading>
        //         <SimpleGrid columns={[1, 2, 3]} gap='20px'>
        //             <Card maxW='sm' bg='none' color='white'>
        //                 <CardBody>
        //                     <Box borderRadius='0px 20px 0px 0px' overflow='hidden'>
        //                     <Image
        //                         src='/assets/five.jpg'
        //                         width={300}
        //                         height={300}
        //                         alt='Profile'
        //                     />
        //                     </Box>
        //                     <Stack mt='4' spacing='2'>
        //                         <Heading size='sm' fontWeight='600' >Sadiq</Heading>
        //                         <Text fontSize='14px' fontWeight='300'>Team Lead</Text>
        //                         <Flex gap='10px' color='whiteAlpha.600'>
        //                             <Box as='a' href='https://twitter.com/sadiqisiakaa' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
        //                                 <FaTwitter />
        //                             </Box>
        //                             <Box as='a' href='https://www.linkedin.com/in/sadiqannes' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
        //                                 <FaLinkedinIn />
        //                             </Box>
        //                         </Flex>
        //                     </Stack>
        //                 </CardBody>
        //             </Card>
        //             <Card maxW='sm' bg='none' color='white'>
        //                 <CardBody>
        //                     <Box borderRadius='0px 20px 0px 0px' overflow='hidden'>
        //                         <Image
        //                             src='/assets/three.jpg'
        //                             width={300}
        //                             height={300}
        //                             alt='Profile'
        //                         />
        //                     </Box>
        //                     <Stack mt='4' spacing='2'>
        //                         <Heading size='sm' fontWeight='600' >Isaac</Heading>
        //                         <Text fontSize='14px' fontWeight='300'>Operations Lead</Text>
        //                         <Flex gap='10px' color='whiteAlpha.600'>
        //                             <Box as='a' href='https://twitter.com/isikcomen' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
        //                                 <FaTwitter />
        //                             </Box>
        //                             <Box as='a' href='https://www.linkedin.com/in/temidayo-isaac-b57631122' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
        //                                 <FaLinkedinIn />
        //                             </Box>
        //                         </Flex>
        //                     </Stack>
        //                 </CardBody>
        //             </Card>
        //             <Card maxW='sm' bg='none' color='white'>
        //                 <CardBody>
        //                     <Box borderRadius='0px 20px 0px 0px' overflow='hidden'>
        //                         <Image
        //                             src='/assets/six.jpg'
        //                             width={300}
        //                             height={300}
        //                             alt='Profile'
        //                         />
        //                     </Box>
        //                     <Stack mt='4' spacing='2'>
        //                         <Heading size='sm' fontWeight='600' >Bright</Heading>
        //                         <Text fontSize='14px' fontWeight='300'>Dev Lead</Text>
        //                         <Flex gap='10px' color='whiteAlpha.600'>
        //                             <Box as='a' href='https://twitter.com/OlumideSilas' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
        //                                 <FaTwitter />
        //                             </Box>
        //                             <Box as='a' href='https://www.linkedin.com/in/olumide-silas/' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
        //                                 <FaLinkedinIn />
        //                             </Box>
        //                         </Flex>
        //                     </Stack>
        //                 </CardBody>
        //             </Card>
        //             <Card maxW='sm' bg='none' color='white'>
        //                 <CardBody>
        //                     <Box borderRadius='0px 20px 0px 0px' overflow='hidden'>
        //                         <Image
        //                             src='/assets/four.jpg'
        //                             width={300}
        //                             height={300}
        //                             alt='Profile'
        //                         />
        //                     </Box>
        //                     <Stack mt='4' spacing='2'>
        //                         <Heading size='sm' fontWeight='600' >Emmanuel</Heading>
        //                         <Text fontSize='14px' fontWeight='300'>Community Lead</Text>
        //                         <Flex gap='10px' color='whiteAlpha.600'>
        //                             <Box as='a' href='https://twitter.com/EmmanuelNFTs' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
        //                                 <FaTwitter />
        //                             </Box>
        //                             <Box as='a' href='https://www.linkedin.com/in/adeyemi-emmanuel' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
        //                                 <FaLinkedinIn />
        //                             </Box>
        //                         </Flex>
        //                     </Stack>
        //                 </CardBody>
        //             </Card>
        //             <Card maxW='sm' bg='none' color='white'>
        //                 <CardBody>
        //                     <Box borderRadius='0px 20px 0px 0px' overflow='hidden'>
        //                         <Image
        //                             src='/assets/two.jpg'
        //                             width={300}
        //                             height={300}
        //                             alt='Profile'
        //                         />
        //                     </Box>
        //                     <Stack mt='4' spacing='2'>
        //                         <Heading size='sm' fontWeight='600' >Clement</Heading>
        //                         <Text fontSize='14px' fontWeight='300'>Product Lead</Text>
        //                         <Flex gap='10px' color='whiteAlpha.600'>
        //                             <Box as='a' href='https://twitter.com/DesignRabbi' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
        //                                 <FaTwitter />
        //                             </Box>
        //                             <Box as='a' href='https://www.linkedin.com/in/fadeyi-clement-7b0aa422a' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
        //                                 <FaLinkedinIn />
        //                             </Box>
        //                         </Flex>
        //                     </Stack>
        //                 </CardBody>
        //             </Card>
        //             <Card maxW='sm' bg='none' color='white'>
        //                 <CardBody>
        //                     <Box borderRadius='0px 20px 0px 0px' overflow='hidden'>
        //                         <Image
        //                             src='/assets/one.jpg'
        //                             width={300}
        //                             height={300}
        //                             alt='Profile'
        //                         />
        //                     </Box>
        //                     <Stack mt='4' spacing='2'>
        //                         <Heading size='sm' fontWeight='600' >Gabriel</Heading>
        //                         <Text fontSize='14px' fontWeight='300'>Brand Lead</Text>
        //                         <Flex gap='10px' color='whiteAlpha.600'>
        //                             <Box as='a' href='https://twitter.com/gabrielboazz' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
        //                                 <FaTwitter />
        //                             </Box>
        //                             <Box as='a' href='' rounded='full' p='6px' border='1px' _hover={{color: 'white'}}>
        //                                 <FaLinkedinIn />
        //                             </Box>
        //                         </Flex>
        //                     </Stack>
        //                 </CardBody>
        //             </Card>
        //         </SimpleGrid>
        //     </VStack>
        //     <Box rounded='full' w={150} h={150} bg='brand.600' opacity={0.5} position='absolute' top={4000} right='0' filter='blur(70px)' />
        // </Box>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  lg:px-20">
<div className="relative group  rounded-r-md w-[300px]
        h-[300px] overflow-hidden bg-black m-auto mt-36" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" style={styleObject}>
            <Image
                src='/assets/five.jpg'
                width={300}
                height={300}
                alt='Profile'
                className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
            />
            <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
            <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                <div className="absolute w-full -mt-8 flex place-content-center">
                    <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">Sadiq</p>
                </div>
                <div className="absolute w-full flex place-content-center mt-5">
                    <p className="font-sans text-center w-4/5 text-white mt-5 font-bold">Team Lead</p>
                </div>
                <div className='flex items-center mx-auto justify-center '>
                    <a href='https://twitter.com/sadiqisiakaa'>             <button className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-full  p-4"><FaTwitter size={20} />
                    </button></a>
                    <a href='https://www.linkedin.com/in/sadiqannes'>                <button className="absolute left-2  bottom-4 bg-white text-black font-bold rounded-full  p-4"><FaWhatsapp size={20} /></button></a>

                </div>
            </div>
        </div>
<div className="relative group  rounded-r-md w-[300px]
        h-[300px] overflow-hidden bg-black m-auto mt-36" style={styleObject}>
            <Image
                src='/assets/four.jpg'
                width={300}
                height={300}
                alt='Profile'
                className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
            />
            <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
            <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                <div className="absolute w-full -mt-8 flex place-content-center">
                    <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">Emmanuel</p>
                </div>
                <div className="absolute w-full flex place-content-center mt-5">
                    <p className="font-sans text-center w-4/5 text-white mt-5 font-bold">Community Lead</p>
                </div>
                <div className='flex items-center mx-auto justify-center '>
                    <a href='https://twitter.com/EmmanuelNFTs'>             <button className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-full  p-4"><FaTwitter size={20} />
                    </button></a>
                    <a  href='https://www.linkedin.com/in/adeyemi-emmanuel'>                <button className="absolute left-2  bottom-4 bg-white text-black font-bold rounded-full  p-4"><FaWhatsapp size={20} /></button></a>

                </div>
            </div>
        </div>

        <div className="relative group  rounded-r-md w-[300px]
        h-[300px] overflow-hidden bg-black m-auto mt-36" style={styleObject}>
            <Image
                src='/assets/three.jpg'
                width={300}
                height={300}
                alt='Profile'
                className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
            />
            <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
            <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                <div className="absolute w-full -mt-8 flex place-content-center">
                    <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">Isaac</p>
                </div>
                <div className="absolute w-full flex place-content-center mt-5">
                    <p className="font-sans text-center w-4/5 text-white mt-5 font-bold">Operations Lead</p>
                </div>
                <div className='flex items-center mx-auto justify-center '>
                    <a href='https://twitter.com/isikcomen'>             <button className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-full  p-4"><FaTwitter size={20} />
                    </button></a>
                    <a href='https://www.linkedin.com/in/temidayo-isaac-b57631122'>                <button className="absolute left-2  bottom-4 bg-white text-black font-bold rounded-full  p-4"><FaWhatsapp size={20} /></button></a>

                </div>
            </div>
        </div>
        <div className="relative group  rounded-r-md w-[300px]
        h-[300px] overflow-hidden bg-black m-auto mt-36" style={styleObject}>
            <Image
                src='/assets/four.jpg'
                width={300}
                height={300}
                alt='Profile'
                className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
            />
            <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
            <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                <div className="absolute w-full -mt-8 flex place-content-center">
                    <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">Bright</p>
                </div>
                <div className="absolute w-full flex place-content-center mt-5">
                    <p className="font-sans text-center w-4/5 text-white mt-5 font-bold">Dev Lead</p>
                </div>
                <div className='flex items-center mx-auto justify-center '>
                    <a  href='https://twitter.com/OlumideSilas'>             <button className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-full  p-4"><FaTwitter size={20} />
                    </button></a>
                    <a  href='https://www.linkedin.com/in/olumide-silas/' >                <button className="absolute left-2  bottom-4 bg-white text-black font-bold rounded-full  p-4"><FaWhatsapp size={20} /></button></a>

                </div>
            </div>
        </div>
        <div className="relative group  rounded-r-md w-[300px]
        h-[300px] overflow-hidden bg-black m-auto mt-36" style={styleObject}>
            <Image
                src='/assets/two.jpg'
                width={300}
                height={300}
                alt='Profile'
                className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
            />
            <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
            <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                <div className="absolute w-full -mt-8 flex place-content-center">
                    <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">Clement</p>
                </div>
                <div className="absolute w-full flex place-content-center mt-5">
                    <p className="font-sans text-center w-4/5 text-white mt-5 font-bold">Product Lead</p>
                </div>
                <div className='flex items-center mx-auto justify-center '>
                    <a  href='https://twitter.com/DesignRabbi'>             <button className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-full  p-4"><FaTwitter size={20} />
                    </button></a>
                    <a href='https://www.linkedin.com/in/fadeyi-clement-7b0aa422a'>                <button className="absolute left-2  bottom-4 bg-white text-black font-bold rounded-full  p-4"><FaWhatsapp size={20} /></button></a>

                </div>
            </div>
        </div>
        <div className="relative group  rounded-r-md w-[300px]
        h-[300px] overflow-hidden bg-black m-auto mt-36" style={styleObject}>
            <Image
                src='/assets/one.jpg'
                width={300}
                height={300}
                alt='Profile'
                className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
            />
            <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
            <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                <div className="absolute w-full -mt-8 flex place-content-center">
                    <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">Gabriel</p>
                </div>
                <div className="absolute w-full flex place-content-center mt-5">
                    <p className="font-sans text-center w-4/5 text-white mt-5 font-bold">Brand Lead</p>
                </div>
                <div className='flex items-center mx-auto justify-center '>
                    <a href='https://twitter.com/gabrielboazz'>             <button className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-full  p-4"><FaTwitter size={20} />
                    </button></a>
                    <a href='https://www.linkedin.com/in/sadiqannes'>                <button className="absolute left-2  bottom-4 bg-white text-black font-bold rounded-full  p-4"><FaWhatsapp size={20} /></button></a>

                </div>
            </div>
        </div>
</div>
    )
}
