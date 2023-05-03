import { Box, Flex, Heading, HStack, ListItem, UnorderedList, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ContainerLayout from '../layout/container'
import { Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react'


export default function Roadmap() {
    return (
        <Box my='100px' id='buytoken'>
            <ContainerLayout>
                <Heading textAlign='center' mb='50px' fontSize={['32px', '60px']} color='brand.200' >How to Buy $BFARB</Heading>

                <Card>
                    <CardHeader>
                        <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button>View here</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button>View here</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button>View here</Button>
                    </CardFooter>
                </Card>

            </ContainerLayout>
            <Box rounded='full' w={150} h={150} bg='brand.600' opacity={0.5} position='absolute' top={2200} filter='blur(70px)' />
            <Box rounded='full' w={150} h={150} bg='brand.500' opacity={0.5} position='absolute' top={2550} right='0' filter='blur(70px)' />
        </Box >
    )
}
