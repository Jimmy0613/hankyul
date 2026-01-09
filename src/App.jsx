// App.jsx 최상단
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Breadcrumb from './components/layout/Breadcrumb';
import Home from './pages/Home';
import HelloPage from './pages/About/HelloPage';

import {useEffect} from 'react';
import AOS from 'aos';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import Swiper from 'swiper';
import imagesLoaded from 'imagesloaded';
import PureCounter from '@srexi/purecounterjs'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper/css/bundle';

import './assets/css/main.css'
import TeamPage from "./pages/About/TeamPage.jsx";
import SpecialPage from "./pages/About/SpecialPage.jsx";
import ServicePage from "./pages/Service/ServicePage.jsx";
import DirectionsPage from "./pages/Directions/DirectionsPage.jsx";
import BlogPage from "./pages/Case/BlogPage.jsx";
import SuccessPage from "./pages/Case/SuccessPage.jsx";

function App() {

    useEffect(() => {
        // main.js 로직
        "use strict";

        /**
         * Apply .scrolled class to the body as the page is scrolled down
         */
        function toggleScrolled() {
            const selectBody = document.querySelector('body');
            const selectHeader = document.querySelector('#header');
            if (!selectHeader) return;

            if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
            window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
        }

        document.addEventListener('scroll', toggleScrolled);
        window.addEventListener('load', toggleScrolled);

        /**
         * Mobile nav toggle
         */
        const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

        function mobileNavToogle() {
            document.querySelector('body').classList.toggle('mobile-nav-active');
            mobileNavToggleBtn.classList.toggle('bi-list');
            mobileNavToggleBtn.classList.toggle('bi-x');
        }

        if (mobileNavToggleBtn) {
            mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
        }

        /**
         * Hide mobile nav on same-page/hash links
         */
        document.querySelectorAll('#navmenu a').forEach(navmenu => {
            navmenu.addEventListener('click', () => {
                if (document.querySelector('.mobile-nav-active')) {
                    mobileNavToogle();
                }
            });

        });

        /**
         * Toggle mobile nav dropdowns
         */
        document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
            navmenu.addEventListener('click', function (e) {
                e.preventDefault();
                this.parentNode.classList.toggle('active');
                this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
                e.stopImmediatePropagation();
            });
        });

        /**
         * Scroll top button
         */
        let scrollTop = document.querySelector('.scroll-top');

        function toggleScrollTop() {
            if (scrollTop) {
                window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
            }
        }

        scrollTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('load', toggleScrollTop);
        document.addEventListener('scroll', toggleScrollTop);

        /**
         * Animation on scroll function and init
         */
        function aosInit() {
            AOS.init({
                duration: 600,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            });
        }

        window.addEventListener('load', aosInit);


        /**
         * Init swiper sliders
         */
        function initSwiper() {
            document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
                let config = JSON.parse(
                    swiperElement.querySelector(".swiper-config").innerHTML.trim()
                );
                new Swiper(swiperElement, config);
            });
        }

        window.addEventListener("load", initSwiper);

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
                imagesLoaded(container, function() {
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

        /**
         * Correct scrolling position upon page load for URLs containing hash links.
         */
        window.addEventListener('load', function () {
            if (window.location.hash) {
                if (document.querySelector(window.location.hash)) {
                    setTimeout(() => {
                        let section = document.querySelector(window.location.hash);
                        let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
                        window.scrollTo({
                            top: section.offsetTop - parseInt(scrollMarginTop),
                            behavior: 'smooth'
                        });
                    }, 100);
                }
            }
        });

        /**
         * Navmenu Scrollspy
         */
        let navmenulinks = document.querySelectorAll('.navmenu a');

        function navmenuScrollspy() {
            navmenulinks.forEach(navmenulink => {
                if (!navmenulink.hash) return;
                let section = document.querySelector(navmenulink.hash);
                if (!section) return;
                let position = window.scrollY + 200;
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
                    navmenulink.classList.add('active');
                } else {
                    navmenulink.classList.remove('active');
                }
            })
        }

        window.addEventListener('load', navmenuScrollspy);
        document.addEventListener('scroll', navmenuScrollspy);
    }, []);

    return (
        <Router>
            <Header />
            <main className="main">
                <Breadcrumb />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<Navigate to="/About/hello" replace/>} />
                    <Route path="/Case" element={<Navigate to="/Case/blog" replace/>} />

                    <Route path="/About/hello" element={<HelloPage/>} />
                    <Route path="/About/team" element={<TeamPage/>} />
                    <Route path="/About/special" element={<SpecialPage/>} />
                    <Route path="/Service" element={<ServicePage/>} />
                    <Route path="/Directions" element={<DirectionsPage/>} />
                    <Route path="/Case/blog" element={<BlogPage/>} />
                    <Route path="/Case/success" element={<SuccessPage/>} />

                </Routes>
            </main>
            <Footer />
            {/* Scroll Top */}
            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a>
        </Router>
    );
}

export default App;