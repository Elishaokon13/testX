import { Box, Button, Flex, Heading, Tag, TagLabel, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <Box mt='130px' py='30px' w='full'  >
      <VStack gap='30px' w='full'>
        <Image src='/assets/ARBFURBO.png' height={500} width={500} alt='Atap Logo' />
        <Text textColor={'brand.200'} maxW={"450px"} fontWeight={200}>If you missed out on $FARB, Do not miss out on this</Text>
        <Button px='20px' bg='brand.200' fontWeight={400}>JOIN OUR COMMUNITY</Button>
      </VStack>
    </Box>
  )
}
