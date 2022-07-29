
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    nav: false
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});

const tabContent = document.querySelectorAll('.catalog__content'),
      tabWrapper = document.querySelector('.catalog__tabs'),
      tabs = document.querySelectorAll('.catalog__tab');
 
    function hideTabContent() {
        tabContent.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove('catalog__tab_active');
        });
    }
 
    function showTabContent(i=0) {
        tabContent[i].style.display = 'flex';
        tabs[i].classList.add('catalog__tab_active');
    }
 
    hideTabContent();
    showTabContent();
 
    tabWrapper.addEventListener('click', (e) => {
      const target = e.target;
      console.log(target);
      if (target && target.closest('.catalog__tab')) { // 1
          console.log('2click');
          tabs.forEach((item, i) => {
              if (target == item || target.parentElement == item ) {  // 2
                  hideTabContent();
                  showTabContent(i);
              }
          });
      }
    });