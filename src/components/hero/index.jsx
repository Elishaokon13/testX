import { Box, Button, Flex, Heading, Tag, TagLabel, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <Box mt='5px' bgColor={'brand.200'} py='10px' w='full'>
      <VStack  w='full'>
        <Image src='/assets/ARBFURBO.png' height={500} width={800} alt='Atap Logo' />
        {/* <Text textColor={'brand.700'} maxW={"420px"} fontSize={"120px"}  fontWeight={800}>BABY FURBO</Text> */}
        <Button px='20px' bg='brand.700' fontWeight={400}>BUY $BFARB</Button>
      </VStack>
    </Box>
  )
}
