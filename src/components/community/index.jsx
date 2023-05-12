import { Box, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import ContainerLayout from '../layout/container'

export default function Community() {
    return (
        // <Box my='50px' id='community'>
        //     <Box>
        //         {/* <VStack py='40px' bg='brand.800' gap='30px' borderTop='4px' borderColor='brand.400'>
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
        //         </VStack> */}

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
        <div className="contenair bg-cover min-h-screen w-full flex justify-center items-center"
style="background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100');'">
  
  <div className="w-1/2 bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
    <div className="header-card flex justify-between font-semibold">
      <div className="">Team members</div>
      <div className="flex items-center gap-x-1 text-sm text-blue-500">
         <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
      <span>See all</span>
      </div>
    </div>

    <div className="card-content divide-y flex flex-col gap-y-3 mt-5">

      <div className="card-content-profil flex justify-between items-center">
        <div className=" flex gap-x-2 items-center">
          
          <div className="card-name-user text-xs">
            <h3 className="font-semibold">Chris Wood</h3>
            <div className=" flex items-center gap-x-1">
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <span>Online</span>
            </div>
          </div>
        </div>

        <div className="card-action">
          <button className="flex items-center px-2 py-1 text-xs text-white bg-gray-500 hover:bg-gray-600">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
            <span className="">Invite</span>
          </button>
        </div>
      </div>

      <div className="card-content-profil pt-3 flex justify-between items-center">
        <div className=" flex gap-x-2 items-center">
          <img className="avatar h-10 w-10 rounded-full border-4 border-opacity-40" src='' />
          <div className="card-name-user text-xs">
            <h3 className="font-semibold">Jose Leos</h3>
            <div className=" flex items-center gap-x-1">
              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
              <span>Busy</span>
            </div>
          </div>
        </div>

        <div className="card-action">
           <button className="flex items-center px-2 py-1 text-xs text-white bg-green-500 hover:bg-green-600">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            <span className="">Invite</span>
          </button>
        </div>
      </div>

      <div className="card-content-profil pt-3 flex justify-between items-center">
        <div className=" flex gap-x-2 items-center">
          <img className="avatar h-10 w-10 rounded-full border-4 border-opacity-40" src="https://ui.glass/generator/static/profile-picture-3-b701fcb37cb1fef6a7e720dccd16e4c0.jpg" alt="" />
          <div className="card-name-user text-xs">
            <h3 className="font-semibold">Jeny Green</h3>
            <div className=" flex items-center gap-x-1">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span>Offline</span>
            </div>
          </div>
        </div>

        <div className="card-action">
           <button className="flex items-center px-2 py-1 text-xs text-white bg-green-500 hover:bg-green-600">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            <span className="">Invite</span>
          </button>
        </div>
      </div>

      <div className="card-content-profil pt-3 flex justify-between items-center">
        <div className=" flex gap-x-2 items-center">
          
          <div className="card-name-user text-xs">
            <h3 className="font-semibold">Neil Sims</h3>
            <div className=" flex items-center gap-x-1">
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <span>Online</span>
            </div>
          </div>
        </div>

        <div className="card-action">
          <button className="flex items-center px-2 py-1 text-xs text-white bg-green-500 hover:bg-green-600">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            <span className="">Invite</span>
          </button>
        </div>
      </div>
    </div>
</div>
  </div>
    )
}
