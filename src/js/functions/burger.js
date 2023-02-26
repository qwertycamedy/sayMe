(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const links = document?.querySelectorAll('.header__list-link')

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('active');
    menu?.classList.toggle('active');
    document.body.classList.toggle('overflow-h');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      burger?.classList.toggle('active');
      menu?.classList.toggle('active');
      document.body.classList.toggle('overflow-h');
    })
  })
})();
