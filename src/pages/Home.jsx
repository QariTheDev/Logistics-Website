import React from 'react'
import Hero from '../components/Hero/Hero'
import AboutUs from '../components/AboutUs/AboutUs'
import MiniServices from '../components/MiniServices/MiniServices'
import Request from '../components/Forms/Request/Request'
import Portfolio from '../components/Cards/Portfolio/Portfolio'
import CustomerSupport from '../components/Stripe/CustomerSupport'
import imgg from '../assets/img/Front page.jpg'

export default function Home() {
    return (
        <>
            <Hero img={imgg} h1="WE'RE PROVIDE BEST SERVICES" p1="TRANSPORT" h2="FOR EVERYTHING" p2={`Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus, Quisque velit nisi pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero`} />
            <AboutUs />
            <MiniServices />
            <Request />
            <Portfolio />
            <CustomerSupport />
        </>
    )
}
