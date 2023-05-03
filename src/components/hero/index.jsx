import { Box, Button, Flex, Heading, Tag, TagLabel, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <Box mt='5px' bgColor={'brand.200'} py='10px' w='full'>
      <VStack  w='full'>
        <Image src='/assets/ARBFURBO.png' height={500} width={800} alt='Atap Logo' />
        {/* <Text textColor={'brand.700'} maxW={"420px"} fontSize={"120px"}  fontWeight={800}>BABY FURBO</Text> */}
        <Link href='https://app.sushi.com/swap?outputCurrency=0x721ebf5c9fa9b4c93194cbfae4060638374fbd61&chainId=1'>
        <Button px='20px' bg='brand.700' fontWeight={400}>BUY $BFARB</Button>
        </Link>
      </VStack>
    </Box>
  )
}
