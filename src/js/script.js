$(document).ready(function() {
/* This is slider */
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

    /* This is tabs */
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




    //This is card selection 

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })  
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // This is modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut();
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
            $('.overlay, #order').fadeIn();
        })
    });

    //This is validation
    function validateForms(form){
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста, введите свое имя",
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свой email",
                    email: "Неправильно введён адрес почты"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    //This is masked input
    $('input[name=phone]').mask("+7(999) 999-99-99");
});