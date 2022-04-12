import BlogA from './blog/BlogA'
import BlogB from './blog/BlogB'
import BlogC from './blog/BlogC'
import BlogD from './blog/BlogD'
import BlogE from './blog/BlogE'

import ContactA from './contact/ContactA'

import HeaderOne from "@/components/blocks/header/HeaderOne.vue"

import HeroOne from "@/components/blocks/hero/HeroOne.vue"



export default function getBlock() {
  return {
    Blog: {
      BlogA: <BlogA />,
      BlogB: <BlogB />,
      BlogC: <BlogC />,
      BlogD: <BlogD />,
      BlogE: <BlogE />,
    },
    Hero: {
      HeroA: <HeroOne />,
      HeroB: <HeroOne heroType="center" />,
      HeroC: <HeroOne heroType="image-first" />,
    },
    Contact: {
      ContactA: <ContactA />,
    },
    Header: {
      HeaderA: <HeaderOne />,
      HeaderB: <HeaderOne navOption="all-left" />,
      HeaderC: <HeaderOne navOption="brand-middle" />,
      HeaderD: <HeaderOne navOption="space-between" />,
    },
  }
}

