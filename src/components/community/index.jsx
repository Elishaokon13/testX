import { Box, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import ContainerLayout from '../layout/container'

export default function Community() {
    return (
        // <Box my='50px' id='community'>
        //     <Box>
        //       <VStack py='40px' bg='brand.800' gap='30px' borderTop='4px' borderColor='brand.400'>
        //             <Text>Partnered with Innovative Brands</Text>
        //             <Flex align='center' gap='50px' justify='center' flexWrap='wrap'>
        //                 <VStack>
        //                     <Box rounded='10px' overflow='hidden'>
        //                         <Image
        //                             src='/assets/udlogo.svg'
        //                             width={60}
        //                             height={60}
        //                             alt=''
        //                         />
        //                     </Box>
        //                     <Text fontSize='14px'>Unstopable Domains</Text>
        //                 </VStack>
        //                 <VStack>
        //                     <Box rounded='10px' overflow='hidden'>
        //                         <Image
        //                             src='/assets/nrlogo.svg'
        //                             width={60}
        //                             height={60}
        //                             alt=''
        //                         />
        //                     </Box>
        //                     <Text>NoRamp</Text>
        //                 </VStack>
        //                 <VStack>
        //                     <Box rounded='10px' overflow='hidden'>
        //                         <Image
        //                             src='/assets/cdlogo.svg'
        //                             width={60}
        //                             height={60}
        //                             alt=''
        //                         />
        //                     </Box>
        //                     <Text>Core Dao</Text>
        //                 </VStack>
        //             </Flex>
        //         </VStack> 
        //         <ContainerLayout mt='50px'>
        //             <HStack w='full' rounded='20px' py={['20px', '40px']} px={['20px', '70px']} bgGradient={["linear(to-r, brand.800, brand.600)"]}>
        //                 <VStack align='left' gap='10px' maxW={[ 'auto', '450px']}>
        //                     <Text fontSize='20px' fontWeight='600'>Join our community</Text>
        //                     <Text fontWeight='700' fontSize='28px'>Let&lsquo;s Come Together and Transform the Way People View Digital Ownership!</Text>
        //                     <Text fontWeight='400'>At Mintyplex, we see NFTs as the missing link in enabling millions of people to embrace the Web3 space. By joining us, we can work together to make this vision a reality.</Text>
        //                     <Button href='https://discord.gg/Fu5bXmZNVU' bg='white' color='blue.600' w='fit-content'>Join discord</Button>
        //                 </VStack>
        //             </HStack>
        //         </ContainerLayout>
        //     </Box>
        // </Box>
<div className="my-50" id="community">
  <div>
    <div className="py-40 bg-brand-800 border-t-4 border-brand-400 gap-30">
      <p>Partnered with Innovative Brands</p>
      <div className="flex items-center justify-center gap-50 flex-wrap">
        <div className="flex flex-col items-center">
          <div className="rounded-10 overflow-hidden">
            <img
              src="/assets/udlogo.svg"
              width={60}
              height={60}
              alt=""
            />
          </div>
          <p className="text-sm">Unstopable Domains</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-10 overflow-hidden">
            <img
              src="/assets/nrlogo.svg"
              width={60}
              height={60}
              alt=""
            />
          </div>
          <p className="text-sm">NoRamp</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-10 overflow-hidden">
            <img
              src="/assets/cdlogo.svg"
              width={60}
              height={60}
              alt=""
            />
          </div>
          <p className="text-sm">Core Dao</p>
        </div>
      </div>
    </div>
    <div className="mt-50">
      <div className="w-full place-content-between place-items-center md:gap-20  rounded-20 py-20 sm:py-20 bg-[rgb(39,145,255)] grid md:grid-cols-2 grid-cols-1 px-20 sm:px-70 bg-[gradient-to-r from-purpple-800 to black-600]">
        <div className="max-w-auto sm:max-w-450">
          <p className="font-bold text-2xl sm:text-3xl mb-2">Join our community</p>
          <p className="font-bold text-2xl sm:text-4xl mb-6">Let&lsquo;s Come Together and Transform the Way People View Digital Ownership!</p>
          <p className="font-normal mb-6">At Mintyplex, we see NFTs as the missing link in enabling millions of people to embrace the Web3 space. By joining us, we can work together to make this vision a reality.</p>
          <a href="https://discord.gg/Fu5bXmZNVU" className="text-white rounded-lg bg-blue-800 px-8 py-4 inline-block font-bold">Join discord</a>
        </div>
        <div className="max-w-auto sm:max-w-450">
   
        <Image
    src='/assets/black-woman-sitting-sofa-working-laptop-freelancer-home-office_254685-470-removebg-preview.png'
    width={400}
    height={500}
    alt='Profile'
    />
        </div>
      </div>
    </div>
  </div>
</div>



    )
}
