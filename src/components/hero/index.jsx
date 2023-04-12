import { Box, Button, Flex, Heading, Tag, TagLabel, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <Box mt='130px' py='80px' w='full' bgGradient={["radial(brand.800, brand.100, brand.100)"]} >
      <VStack gap='30px' w='full'>
        <Tag size='sm' color='brand.500' >
          <TagLabel>#DoTheRare</TagLabel>
        </Tag>
        <Heading p='10px' fontSize={['38px', '64px']} maxW='810px' textAlign='center'>Pioneering The Future of <Box as='span' textDecoration='underline' bgClip='text' bgGradient='linear(to-r, brand.200, brand.300)' >NFT 2.0</Box></Heading>
        <Text fontSize={['14px', '16px']} maxW='700px' textAlign='center'>Mintyplex is building a truly connected, empowering, and sustainable NFT ecosystem for creators, collectors, and enthusiasts on CoreDAO.</Text>
        <Button px='20px' bg='brand.700' fontWeight={400}>Launch App</Button>
      </VStack>
    </Box>
  )
}
