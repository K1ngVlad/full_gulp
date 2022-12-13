export default function faq() {
  const faq = document.querySelector('.faqList');
  const textArr = Array.from(document.querySelectorAll('.open-text'));
  const btnArr = Array.from(document.querySelectorAll('button'));
  let prevId = null;

  faq.addEventListener('click', (e) => {
    const id = e.target.getAttribute('id');
    // console.log(e.target.classList.contains('open-text'));
    // console.log(e.target);
    if (
      e.target.tagName !== 'HR' &&
      e.target.tagName !== 'P' &&
      !e.target.classList.contains('open-text')
    ) {
      textArr.forEach((e) => {
        if (id === e.getAttribute('id')) return;
        e.classList.remove('open-text-active');
      });
      btnArr.forEach((e) => {
        if (id === e.getAttribute('id')) return;
        e.classList.remove('open-btn-active');
      });
      faq
        .querySelectorAll('.open-text')
        [id].classList.toggle('open-text-active');
      faq.querySelectorAll('button')[id].classList.toggle('open-btn-active');
    }
  });

  faq.addEventListener('mouseout', (e) => {
    const id = e.target.getAttribute('id');
    if (
      e.target.tagName !== 'HR' &&
      e.target.tagName !== 'P' &&
      !e.target.classList.contains('open-text')
    ) {
      faq.querySelectorAll('.faqOpen')[id].classList.remove('faq-active');
      faq.querySelectorAll('hr')[id].classList.remove('hr-hover');
      faq.querySelectorAll('hr')[+id + 1].classList.remove('hr-hover');
      faq
        .querySelectorAll('img')
        [id].setAttribute('src', '../img/svg/open-btn.svg');
    }
  });

  faq.addEventListener('mouseover', (e) => {
    const id = e.target.getAttribute('id');
    if (
      e.target.tagName !== 'HR' &&
      e.target.tagName !== 'P' &&
      !e.target.classList.contains('open-text')
    ) {
      faq.querySelectorAll('.faqOpen')[id].classList.add('faq-active');
      faq.querySelectorAll('hr')[id].classList.add('hr-hover');
      faq.querySelectorAll('hr')[+id + 1].classList.add('hr-hover');
      faq
        .querySelectorAll('img')
        [id].setAttribute('src', '../img/svg/open-btn-hover.svg');
    }
  });
}
