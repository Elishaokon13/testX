import { AccordionItem, Accordion, Box, AccordionPanel, AccordionIcon, AccordionButton, Heading } from '@chakra-ui/react'
import React from 'react'
import ContainerLayout from '../layout/container'

export default function Faqs() {
    return (
        <Box my='50px' id='faqs'className='' >
            <ContainerLayout>
                <Heading textAlign='center' mb='50px' fontSize={['32px', '60px']} className='outline-text' outlineColor='black' color='' >Frequently Asked Questions</Heading>
                <Accordion defaultIndex={[0]} allowMultiple display='flex' flexDirection='column' gap='10px'>
                    <AccordionItem border='1px' rounded='5px' color='black '  borderColor='white.200'  bg='white' className='py-3'>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    What is Mintyplex?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Mintyplex is an innovative ecosystem built on the CoreDAO blockchain that empowers creators, collectors, and enthusiasts by providing solutions for digital ownership and monetization.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem  rounded='5px' color='black '  borderColor='white.200'  bg='white' className='py-3'>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    What is the Mintyplex token ($MTPX)?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            $MPTX is the native token that powers the ecosystem, used for transactions, incentivizing the community, and proposing/voting on changes through the Mintyplex DAO.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem  rounded='5px' color='black '  borderColor='white.200'  bg='white' className='py-3'>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    What is DynastyPad?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            DynastyPad is the flagship product of Mintyplex, an NFT marketplace, launchpad, and aggregator that aims to become the go-to platform on Core Chain for discovering, analyzing, trading and launching NFTs.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem  rounded='5px' color='black '  borderColor='white.200'  bg='white' className='py-3'>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    What types of NFTs are available on DynastyPad?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            DynastyPad will feature a variety of NFTs, including art, music, collectibles, and more.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem  rounded='5px' color='black '  borderColor='white.200'  bg='white' className='py-3'>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    How does the Mintyplex community work?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Users earn rewards through an incentive program by interacting with products and participating in community activities. The community features chat rooms, forums, events, and governance participation.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem  rounded='5px' color='black '  borderColor='white.200'  bg='white' className='py-3'>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    How is Mintyplex different from other NFT marketplaces?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Mintyplex&lsquo;s curation process, user interface, and search capabilities set it apart, along with its gamified experience and commitment to sustainability and community engagement.

                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem  rounded='5px' color='black '  borderColor='white.200'  bg='white' className='py-3'>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    What is the Mintyplex roadmap?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            The roadmap consists of 4 phases: Migration, Integration, Optimization, and Expansion, with milestones and activities planned for each phase.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem  rounded='5px' color='black '  borderColor='white.200'  bg='white' className='py-3'>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    How can I participate in the Mintyplex ecosystem?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Users can participate by buying, selling, and trading NFTs on DynastyPad, earning rewards through community involvement and governance participation, and staying up to date on upcoming events and partnerships.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem  rounded='5px' color='black '  borderColor='white.200'  bg='white' className='py-3'>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    How can I learn more about Mintyplex?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            For more information, join the community on social media, and read the whitepaper for a comprehensive overview.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </ContainerLayout>
        </Box >
    )
}
