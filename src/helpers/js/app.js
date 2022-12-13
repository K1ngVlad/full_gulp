import footer from '../../components/footer/component.footer.js';
import faq from '../../components/faq/component.faq.js';
import how from '../../components/how/component.how.js';
import about from '../../components/about/component.about.js';
import undefined from '../../components/undefined/component.undefined.js';
import header from '../../components/header/component.header.js';
import hero from '../../components/hero/component.hero.js';
import AOS from 'aos';
AOS.init();
hero();
header();
undefined();
about();
how();
faq();
footer();

// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('form');
//   form.addEventListener('submit', formSend);

//   const formSend = async (e) => {
//     e.preventDefault();
//   };
// });
