import { Box, Button, Flex, Heading, Tag, TagLabel, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <Box mt='130px' py='30px' w='full'  >
      <VStack gap='30px' w='full'>
        <Image src='/assets/ARBFURBO.png' height={500} width={500} alt='Atap Logo' />
        <Text textColor={'brand.200'} fontWeight={200}>Our Predecessor $FARB gave us the idea of rewarding our holders and we added a twist. Holders get rewarded in both $FARB and $ARB tokens</Text>
        <Button px='20px' bg='brand.200' fontWeight={400}>JOIN OUR COMMUNITY</Button>
      </VStack>
    </Box>
  )
}
