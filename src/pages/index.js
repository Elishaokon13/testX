import AboutSection from '@/components/about'
import Community from '@/components/community'
import Faqs from '@/components/faqs'
import Hero from '@/components/hero'
// import Seo from '@/components/Seo'
import PageLayout from '@/components/layout'
import Roadmap from '@/components/roadmap'
import Team from '@/components/team'
import Head from 'next/head'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home() {

  return (
    <>
      <Head>
        <title>Baby Furbo</title>
        <meta name="description" content="Baby Furbo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ARBFURBO.png" />
      </Head>
      <main>
        <PageLayout title="Baby FURBO">
          <Hero />
          <AboutSection />
          <Roadmap />
          {/* <Seo /> */}
          <Community />
          <Team />
          <Faqs />
          
        </PageLayout>
      </main>
    </>
  )
}
