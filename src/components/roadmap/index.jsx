import { Box, Flex, Heading, HStack, ListItem, UnorderedList, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ContainerLayout from '../layout/container'

export default function Roadmap() {
    return (
        <Box my='100px' id='roadmap'>
            <ContainerLayout>
                <Heading textAlign='center' mb='50px' fontSize={['32px', '60px']} className='outline-text' color='brand.100' >Our Roadmap</Heading>
                <Flex justify='center' w='full'>
                    <Flex direction='column' gap='40px' maxW='350px' align='left'>
                        <HStack align='top' gap='40px'>
                            <Text w='150px' fontWeight='700' fontSize='20px'>Migration</Text>
                            <Flex justify='center'>
                                <Box position='absolute' width='5px' height='350px' bg='brand.300' rounded='full' />
                                <Box position='absolute' width='20px' height='20px' bg='white' rounded='full' />
                            </Flex>
                            <UnorderedList w='150px'>
                                <Text fontWeight='700' fontSize='20px' mb='10px'>Phase 1:</Text>
                                <ListItem>Launch</ListItem>
                                <ListItem>Website Revamp</ListItem>
                                <ListItem>Tokenomics Design</ListItem>
                                <ListItem>Release Whitepaper v1</ListItem>
                            </UnorderedList>
                        </HStack>
                        <HStack align='top' gap='40px'>
                            <Text w='150px' fontWeight='700' fontSize='20px'>Integration</Text>
                            <Flex justify='center'>
                                <Box position='absolute' width='5px' height='350px' bg='brand.300' rounded='full' />
                                <Box position='absolute' width='20px' height='20px' bg='white' rounded='full' />
                            </Flex>
                            <UnorderedList w='150px'>
                                <Text fontWeight='700' fontSize='20px' mb='10px'>Phase 2:</Text>
                                <ListItem>Prototype</ListItem>
                                <ListItem>Launch Testnet</ListItem>
                                <ListItem>Partnership</ListItem>
                                <ListItem>Public Sale</ListItem>
                                <ListItem>Audit</ListItem>
                                <ListItem>List on CMC</ListItem>
                            </UnorderedList>
                        </HStack>
                        <HStack align='top' gap='40px'>
                            <Text w='150px' fontWeight='700' fontSize='20px'>Optimization</Text>
                            <Flex justify='center'>
                                <Box position='absolute' width='5px' height='350px' bg='brand.300' rounded='full' />
                                <Box position='absolute' width='20px' height='20px' bg='white' rounded='full' />
                            </Flex>
                            <UnorderedList w='150px'>
                                <Text fontWeight='700' fontSize='20px' mb='10px'>Phase 3:</Text>
                                <ListItem>List on CEX</ListItem>
                                <ListItem>Launch Mainnet</ListItem>
                                <ListItem>Incentive Program</ListItem>
                                <ListItem>Launchpad</ListItem>
                                <ListItem>NFT Collection</ListItem>
                                <ListItem>Aggregator</ListItem>
                            </UnorderedList>
                        </HStack>
                        <HStack align='top' gap='40px'>
                            <Text w='150px' fontWeight='700' fontSize='20px'>Expansion</Text>
                            <Flex justify='center'>
                                <Box position='absolute' width='5px' height='250px' bg='brand.300' rounded='full' />
                                <Box position='absolute' width='20px' height='20px' bg='white' rounded='full' />
                            </Flex>
                            <UnorderedList w='150px'>
                                <Text fontWeight='700' fontSize='20px' mb='10px'>Phase 4:</Text>
                                <ListItem>Chat Room</ListItem>
                                <ListItem>Multilingual Support</ListItem>
                                <ListItem>NFT AMM</ListItem>
                                <ListItem>Multichain Support</ListItem>
                                <ListItem>DAO</ListItem>
                            </UnorderedList>
                        </HStack>
                    </Flex>
                </Flex> 
            </ContainerLayout>
            <Box rounded='full' w={150} h={150} bg='brand.600' opacity={0.5} position='absolute' top={2200} filter='blur(70px)' />
            <Box rounded='full' w={150} h={150} bg='brand.500' opacity={0.5} position='absolute' top={2550} right='0' filter='blur(70px)' />
        </Box>
    )
}
