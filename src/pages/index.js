import AboutSection from '@/components/about'
import Community from '@/components/community'
import Faqs from '@/components/faqs'
import Hero from '@/components/hero'
import PageLayout from '@/components/layout'
import Roadmap from '@/components/roadmap'
import Team from '@/components/team'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mintyplex</title>
        <meta name="description" content="Mintyplex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <PageLayout title="Mintyplex - Home">
          <Hero />
          <AboutSection />
          <Roadmap />
          <Team />
          <Faqs />
          <Community />
        </PageLayout>
      </main>
    </>
  )
}
