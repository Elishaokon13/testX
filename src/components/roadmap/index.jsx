import { Box, Flex, Heading, HStack, ListItem, UnorderedList, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ContainerLayout from '../layout/container'
import { Grid, GridItem } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react'
import Link from 'next/link'


export default function Roadmap() {
    return (
        <Box my='100px' id='buytoken'>
            <ContainerLayout>
                <Heading textAlign='center' mb='50px' fontSize={['32px', '60px']} color='brand.200' >How to Buy $BFARB</Heading>
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={6}>
                    <Card align={"center"} bg={"brand.700"}>
                        <CardHeader>
                            <Heading size='md' align={"center"} > STEP 1 <br />
                            SETUP YOUR WALLET</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>You can begin using the Arbitrum-One Chain by setting up an account with Metamask or Trust Wallet and adding funds to your ETH balance.</Text>
                        </CardBody>
                        
                    </Card>
                    <Card align={"center"} bg={"brand.200"}>
                        <CardHeader>
                            <Heading size='md' align={"center"}>Step 2<br />
                            GO TO SUSHISWAP</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>Open SushiSwap and connect your wallet safely</Text>
                        </CardBody>
                        <CardFooter>
                            <Link href='https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x3f515f0a8e93F2E2f891ceeA3AeDfAeAbC0a4AAd'>
                            <Button bg={"brand.700"} color={"brand.200"}>View here</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card align={"center"} bg={"brand.700"}>
                        <CardHeader>
                            <Heading size='md' align={"center"}>STEP 3 <br />
                            SWAP $BFARB</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>Start buy $BFARB and hold to earn rewards passively.</Text>
                        </CardBody>
                        
                    </Card>
                </Grid>
            </ContainerLayout>
            <Box rounded='full' w={150} h={150} bg='brand.600' opacity={0.5} position='absolute' top={2200} filter='blur(70px)' />
            <Box rounded='full' w={150} h={150} bg='brand.500' opacity={0.5} position='absolute' top={2550} right='0' filter='blur(70px)' />
        </Box >
    )
}
