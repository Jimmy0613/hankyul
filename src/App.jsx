// App.jsx 최상단
import {BrowserRouter as Router, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import {useEffect} from 'react';

import AOS from 'aos';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import PureCounter from '@srexi/purecounterjs';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Breadcrumb from './components/layout/Breadcrumb';
import Home from './pages/Home';
import HelloPage from './pages/About/HelloPage';
import TeamPage from "./pages/About/TeamPage.jsx";
import SpecialPage from "./pages/About/SpecialPage.jsx";
import ServiceMedicalPage from "./pages/Service/ServiceMedicalPage.jsx";
import DirectionsPage from "./pages/Contact/DirectionsPage.jsx";
import BlogPage from "./pages/Case/BlogPage.jsx";
import SuccessPage from "./pages/Case/SuccessPage.jsx";
import ServiceSchoolPage from "./pages/Service/ServiceSchoolPage.jsx";
import ServiceLayout from "./pages/Service/ServiceLayout.jsx";
import ServiceCriminalPage from "./pages/Service/ServiceCriminalPage.jsx";
import ServiceCivilPage from "./pages/Service/ServiceCivilPage.jsx";
import BookPage from "./pages/Contact/BookPage.jsx";

function App() {

    useEffect(() => {
        // main.js 로직
        "use strict";

        /**
         * Animation on scroll function and init
         */
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });

        /**
         * Init isotope layout and filters
         */
        document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
            let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
            let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
            let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

            let initIsotope;

            const container = isotopeItem.querySelector('.isotope-container');
            if (container) {
                imagesLoaded(container, function () {
                    initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
                        itemSelector: '.isotope-item',
                        layoutMode: layout,
                        filter: filter,
                        sortBy: sort
                    });
                })
            }

            isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
                filters.addEventListener('click', function () {
                    isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
                    this.classList.add('filter-active');

                    if (initIsotope) {
                        initIsotope.arrange({
                            filter: this.getAttribute('data-filter')
                        });
                    }

                    if (typeof aosInit === 'function') {
                        aosInit();
                    }
                }, false);
            });

        });

        /**
         * Initiate Pure Counter
         */
        new PureCounter();
    }, []);

    return (
        <Router>
            <Header/>
            <main className="main">
                <Breadcrumb/>
                <Routes>
                    <Route path="/" element={<Home/>}/>

                    <Route path="/About" element={<Outlet />}>
                        <Route index element={<Navigate to="hello" replace />}/>
                        <Route path="hello" element={<HelloPage/>}/>
                        <Route path="team" element={<TeamPage/>}/>
                        <Route path="special" element={<SpecialPage/>}/>
                    </Route>

                    <Route path="/Service" element={<ServiceLayout />}>
                        <Route index element={<Navigate to="medical" replace />} />
                        <Route path="medical" element={<ServiceMedicalPage />} />
                        <Route path="school" element={<ServiceSchoolPage />} />
                        <Route path="criminal" element={<ServiceCriminalPage />} />
                        <Route path="civil" element={<ServiceCivilPage />} />
                    </Route>

                    <Route path="/Case" element={<Outlet />}>
                        <Route index element={<Navigate to="blog" replace />} />
                        <Route path="blog" element={<BlogPage/>}/>
                        <Route path="success" element={<SuccessPage/>}/>
                    </Route>

                    <Route path="/Contact" element={<Outlet />}>
                        <Route index element={<Navigate to="directions" replace />} />
                        <Route path="directions" element={<DirectionsPage/>}/>
                        <Route path="book" element={<BookPage/>}/>
                    </Route>

                </Routes>
            </main>
            <Footer/>
            {/* Scroll Top */}
            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a>
        </Router>
    );
}

export default App;