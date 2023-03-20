import React,{Suspense} from 'react'
import { Helmet } from 'react-helmet'
import { Navbar, Landing } from '../components';

const About = React.lazy(() => import('../components/About/About'));
const Skills = React.lazy(() => import('../components/Skills/Skills'));
const Education = React.lazy(() => import('../components/Education/Education'));
const Achievement = React.lazy(() => import('../components/Achievement/Achievement'));
const Contacts = React.lazy(() => import('../components/Contacts/Contacts'));

import {headerData} from '../data/headerData'
export const Main = () => {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Portfolio</title>
            </Helmet>
            <Navbar/>
            <Landing />
            <Suspense fallback={<div>Loading...</div>}>
            <About />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
            <Skills />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
            <Education />            
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
            <Achievement />
            </Suspense>
            {/* <Blog /> */}
            <Suspense fallback={<div>Loading...</div>}>
            <Contacts />
            </Suspense>
            {/* <Footer /> */}
            </div>
    )
}