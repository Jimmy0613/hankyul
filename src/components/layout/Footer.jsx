import {useEffect} from "react";

const Footer = () => {

    useEffect(() => {
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
        toggleScrolled();

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

        document.addEventListener('scroll', toggleScrollTop);
        toggleScrollTop();

        return () => {
            document.removeEventListener('scroll', toggleScrolled);
            document.removeEventListener('scroll', toggleScrollTop);
        };
    }, []);


    return (
        <footer id="footer" className="footer dark-background">
            <div className="copyright">
                <div className="container text-center">
                    <p>© <span>Copyright</span> 2026 <strong className="px-1 sitename">공동법률사무소 한결</strong> <span>All Rights Reserved</span>
                    </p>
                    <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;