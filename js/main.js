  $('.menu_icon').on('click',function() {
    $('.menu_icon').toggleClass('active');
    $('.menu').toggleClass('active');

  });

  $('.menu_list').on('click',function() {
  $('.menu_icon').removeClass('active');
  $('.menu').removeClass('active');
  });
   
  // IntersectionObserver スクロールイベント
  const els = document.querySelectorAll('.sc-ani');
  const cb = function(entries, observer) {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('fadeUp');
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove('fadeUp');
      }
    });
  }

  const options = {
    root: null,
    rootMargin:'120px',
    threshold:0
  };

  const io = new IntersectionObserver(cb, options);
  els.forEach(el => io.observe(el));
 