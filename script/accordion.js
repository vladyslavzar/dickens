const accordions = document.querySelectorAll('.faq__inner__accordion__item');

accordions.forEach((accordion) => {
  const button = accordion.querySelector('.faq__inner__accordion__item__top__btn');

  button.addEventListener(('click'), () => {
    accordions.forEach(elem => {
      elem.classList.remove('accordion__active');
    })
    accordion.classList.add('accordion__active');
  })
})