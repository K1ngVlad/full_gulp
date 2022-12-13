export default function how() {
  const howSteps = document.querySelector('.howSteps');
  const howRight = document.querySelector('.howRight');
  const title = document.querySelector('.howLeft').querySelector('h2');
  const text = document.querySelector('.howLeft').querySelector('p');

  let choisenStep = howSteps.children[0];

  howSteps.addEventListener('click', (e) => {
    if (e.target.classList.contains('step')) {
      choisenStep.classList.toggle('choisenStep');
      choisenStep = e.target;
      choisenStep.classList.toggle('choisenStep');
      const width = document.documentElement.clientWidth;

      switch (choisenStep.getAttribute('id')) {
        case '1':
          if (width > 1300) {
            howRight.style.background =
              "url('../img/how-img.png') 100% 100% no-repeat";
            howRight.style.backgroundSize = 'cover';
          } else if (width > 900) {
            howRight.style.background =
              "url('../img/how-img-1024-1.png') 100% 100% no-repeat";
            howRight.style.backgroundSize = 'cover';
          } else if (width > 500) {
            howRight.style.background =
              "url('../img/how-img-768-1.png') 100% 100% no-repeat";
            howRight.style.backgroundSize = 'cover';
          } else {
            howRight.style.background =
              "url('../img/how-img-320-1.png') 100% 100% no-repeat";
            howRight.style.backgroundSize = 'cover';
          }

          title.textContent = 'Проводим консультацию';
          text.textContent =
            'Влечёт за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати, стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.';
          break;
        case '2':
          if (width > 1300) {
            howRight.style.background =
              "url('../img/how-img-2.png') 100% 100% no-repeat";
            howRight.style.backgroundSize = 'cover';
          } else if (width > 900) {
            howRight.style.background =
              "url('../img/how-img-1024-2.png') 100% 100% no-repeat";
            howRight.style.backgroundSize = 'cover';
          } else if (width > 500) {
            howRight.style.background =
              "url('../img/how-img-768-2.png') 100% 100% no-repeat";
            howRight.style.backgroundSize = 'cover';
          } else {
            howRight.style.background =
              "url('../img/how-img-320-2.png') 100% 100% no-repeat";
            howRight.style.backgroundSize = 'cover';
          }
          title.textContent = 'Составляем смету';
          text.textContent =
            'Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.';
          break;
        case '3':
          if (width > 1300) {
            howRight.style.background =
              "url('../img/how-img-3.png') 100% 100% no-repeat";
            howRight.style.backgroundSize = 'cover';
          } else if (width > 900) {
            howRight.style.background =
              "url('../img/how-img-1024-3.png') 100% 100% no-repeat";
            howRight.style.backgroundSize = 'cover';
          } else if (width > 500) {
            howRight.style.background =
              "url('../img/how-img-768-3.png') 100% 100% no-repeat";
            howRight.style.backgroundSize = 'cover';
          } else {
            howRight.style.background =
              "url('../img/how-img-320-3.png') 100% 100% no-repeat";
            howRight.style.backgroundSize = 'cover';
          }
          title.textContent = 'Привлекаем подрядчиков';
          text.textContent =
            'Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.';
          break;
        case '4':
          if (width > 1300) {
            howRight.style.background =
              "url('../img/how-img-4.png') 100% 100% no-repeat";
            howRight.style.backgroundSize = 'cover';
          } else if (width > 900) {
            howRight.style.background =
              "url('../img/how-img-1024-4.png') 100% 100% no-repeat";
            howRight.style.backgroundSize = 'cover';
          } else if (width > 500) {
            howRight.style.background =
              "url('../img/how-img-768-4.png') 100% 100% no-repeat";
            howRight.style.backgroundSize = 'cover';
          } else {
            howRight.style.background =
              "url('../img/how-img-320-4.png') 100% 100% no-repeat";
            howRight.style.backgroundSize = 'cover';
          }
          title.textContent = 'Инспектируем все этапы работ';
          text.textContent =
            'Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.';
          break;

        default:
          break;
      }
    }
  });
}
