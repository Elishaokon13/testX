import { Box, Flex, Heading, HStack, ListItem, UnorderedList, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ContainerLayout from '../layout/container'
import { Grid, GridItem } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react'
import Link from 'next/link'


export default function Roadmap() {
    return (
        //<Box my='100px' id='buytoken'>
        //     <ContainerLayout>
        //         <Heading textAlign='center' mb='50px' fontSize={['32px', '60px']} color='brand.200' >How to Buy $BFARB</Heading>
        //         <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={6}>
        //             <Card align={"center"} bg={"brand.700"}>
        //                 <CardHeader>
        //                     <Heading size='md' align={"center"} > STEP 1 <br />
        //                     SETUP YOUR WALLET</Heading>
        //                 </CardHeader>
        //                 <CardBody>
        //                     <Text>You can begin using the Arbitrum-One Chain by setting up an account with Metamask or Trust Wallet and adding funds to your ETH balance.</Text>
        //                 </CardBody>

        //             </Card>
        //             <Card align={"center"} bg={"brand.200"}>
        //                 <CardHeader>
        //                     <Heading size='md' align={"center"}>Step 2<br />
        //                     GO TO SUSHISWAP</Heading>
        //                 </CardHeader>
        //                 <CardBody>
        //                     <Text>Click the button to open SushiSwap and connect your wallet safely</Text>
        //                 </CardBody>
        //                 <CardFooter>
        //                     <Link href='https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x3f515f0a8e93F2E2f891ceeA3AeDfAeAbC0a4AAd'>
        //                     <Button bg={"brand.700"} color={"brand.200"}>Click Here</Button>
        //                     </Link>
        //                 </CardFooter>
        //             </Card>
        //             <Card align={"center"} bg={"brand.700"}>
        //                 <CardHeader>
        //                     <Heading size='md' align={"center"}>STEP 3 <br />
        //                     SWAP $BFARB</Heading>
        //                 </CardHeader>
        //                 <CardBody>
        //                     <Text>Start buy $BFARB and hold to earn rewards passively.</Text>
        //                 </CardBody>

        //             </Card>
        //         </Grid>
        //     </ContainerLayout>
        //     <Box rounded='full' w={150} h={150} bg='brand.600' opacity={0.5} position='absolute' top={2200} filter='blur(70px)' />
        //     <Box rounded='full' w={150} h={150} bg='brand.500' opacity={0.5} position='absolute' top={2550} right='0' filter='blur(70px)' />
        // </Box >

        <div>
            <div className="flex justify-center items-center py-20">
                <h1 className='md:text-[3rem] font-bold 3xl'>How to Buy $BFARB</h1>
            </div>
            <div className="grid grid-cols-1 md:mx-0 lg:mx-12 gap-x-3 gap-y-6 md:gap-0 md:grid-cols-3">
                <div className="w-full max-w-sm  bg-white border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <div className="flex flex-col py-5 pb-10">
                        <div className='flex flex-col items-center'>
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://th.bing.com/th/id/OIP.9lJ5n080xdxfGtuHYLe_XAHaE7?pid=ImgDet&rs=1" alt="Bonnie image" />
                        </div>
                        <div className='px-4'>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">STEP 1</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400"> SETUP YOUR WALLET</span>
                        </div>

                    </div>
                </div>
                <div className="w-full max-w-sm  bg-white border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <div className="flex flex-col py-5 pb-10">
                        <div className='flex flex-col items-center'>
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://th.bing.com/th/id/OIP.9lJ5n080xdxfGtuHYLe_XAHaE7?pid=ImgDet&rs=1" alt="Bonnie image" />
                        </div>
                        <div className='px-4'>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">STEP 2</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400"> GO TO SUSHISWAP</span>

                            <div>
                                <span className="text-sm text-gray-500 dark:text-gray-400"> Click the button to open SushiSwap and connect your wallet safely</span>

                            </div>
                            <div>
                                <a href='https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x3f515f0a8e93F2E2f891ceeA3AeDfAeAbC0a4AAd' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                                    click here
                                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-full max-w-sm bg-white border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <div className="flex flex-col py-5 pb-10">
                        <div className='flex flex-col items-center'>
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://th.bing.com/th/id/OIP.9lJ5n080xdxfGtuHYLe_XAHaE7?pid=ImgDet&rs=1" alt="Bonnie image" />
                        </div>
                        <div className='px-4'>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">STEP 3</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">  SWAP $BFARB</span>

                            <div>
                                <span className="text-sm text-gray-500 dark:text-gray-400"> Start buy $BFARB and hold to earn rewards passively.</span>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
