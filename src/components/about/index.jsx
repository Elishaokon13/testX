import { Box, Heading, VStack, Text, Flex } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { BsFillPhoneFill, BsFire, BsBasketFill } from 'react-icons/bs'
import { SiCashapp } from 'react-icons/si'
export default function AboutSection() {
    return (
        // <Box my='50px'>

        //     <VStack align={"center"} my='100px' gap='50px' textAlign='center'>
        //         <VStack gap='20px'>
        //             <Heading fontSize={['32px', '60px']} color='brand.200' >What is HO LEE $HEET?</Heading>
        //             <Text maxW='800px' textAlign='center' fontSize={['14px', '16px']}>Our Predecessor, $FARB gave us the idea of rewarding our holders and we added a twist. Holders get rewarded in both $FARB and $ARB tokens!</Text>
        //         </VStack>

        //         <Card bgColor={'brand.200'}>
        //             <CardHeader>
        //                 <Heading size='md' id='tokenomics'>$HEET TOKENOMICS</Heading>
        //             </CardHeader>

        //             <CardBody>
        //                 <VStack spacing='4'>
        //                     <Box>
        //                         <Heading size='xs' textTransform='uppercase'>
        //                         Total Supply
        //                         </Heading>
        //                         <Text pt='2' fontSize='sm'>
        //                          10,000,000,000
        //                         </Text>
        //                     </Box>
        //                     <Box>
        //                         <Heading size='xs' textTransform='uppercase'>
        //                         🔥 Burn
        //                         </Heading>
        //                         <Text pt='2' fontSize='sm'>
        //                         40%
        //                         </Text>
        //                     </Box>
        //                     <Box>
        //                         <Heading size='xs' textTransform='uppercase'>
        //                         💰 Supply 
        //                         </Heading>
        //                         <Text pt='2' fontSize='sm'>
        //                         50%
        //                         </Text>
        //                     </Box>
        //                     <Box>

        //                         <Heading size='xs' textTransform='uppercase'>

        //                         💲 Marketing 

        //                         </Heading>

        //                         <Text pt='2' fontSize='sm'>

        //                         10%

        //                         </Text>

        //                     </Box>
        //                     <Box>

        //                         <Heading size='xs' textTransform='uppercase'>

        //                         BUY/SELL TAXES

        //                         </Heading>

        //                         <Text pt='2' fontSize='sm'>

        //                         6%

        //                         </Text>

        //                     </Box>
        //                 </VStack>
        //             </CardBody>
        //         </Card>

        //     </VStack>
        //     <Box rounded='full' w={150} h={150} bg='brand.200' opacity={0.5} position='absolute' top={960} filter='blur(70px)' />
        //     <Box rounded='full' w={150} h={150} bg='brand.200' opacity={0.5} position='absolute' top={1600} right='0' filter='blur(70px)' />
        // </Box>

        <div className=" py-16">
            <div className="grid grid-cols-1 ">
                <div className="flex flex-col px-12">
                    <h1 className="text-2xl md:text-4xl text-brand-200 font-bold ">Tokenomics</h1>

                    {/* <div className='block justify-between md:flex  items-center '>

                        <p className="max-w-md md:max-w-lg text-sm md:text-base mt-6">Our Predecessor, $FARB gave us the idea of rewarding our holders and we added a twist. Holders get rewarded in both $FARB and $ARB tokens!</p>
                        <a className="pt-[1rem] " href="https://app.sushi.com/swap?outputCurrency=0x721ebf5c9fa9b4c93194cbfae4060638374fbd61&chainId=1">
                            <button className="py-4 px-8 rounded-lg  w-200 bg-blue-700 font-medium mt-6">BUY $HEET</button>
                        </a>
                    </div> */}

                    <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 lg:px-10 ">

                        <div className="lg:max-w-sm  bg-white  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <Image
                                    src="/assets/meme 1.png"
                                    width={800}
                                    height={500}

                                />
                            </a>
                            <div className="p-5">
                                {/* <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is HO LEE $HEET?</h5>
                                </a> */}
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Insert Chart here after token deploy</p>
                                {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a> */}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:h-[2rem] mt-20">

                            <div className="max-w-sm p-6 bg-white border border-gray-200 h-fit rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className='pb-3'>
                                    <BsFillPhoneFill size={20} b color='yellow' />
                                </div>
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total Supply</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">10,000,000,000</p>

                            </div>
                            <div className="max-w-sm p-6 bg-white border border-gray-200 h-fit rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className='pb-3'>
                                    <BsFire size={20} color='red' />
                                </div>
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Burn</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">40%</p>

                            </div>
                            <div className="max-w-sm p-6 bg-white border border-gray-200 h-fit rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className='pb-3'>
                                    <BsBasketFill color='red' size={22} />
                                </div>
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Supply </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">10%</p>

                            </div>
                            <div className="max-w-sm p-6 bg-white border border-gray-200 h-fit rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className='pb-3'>
                                    <SiCashapp color='yellow' size={22} />
                                </div>
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Marketing</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">10,000,000,000</p>

                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
