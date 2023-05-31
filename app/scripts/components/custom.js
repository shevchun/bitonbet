import $ from 'jquery'

export default () => {

  $('.header__menu').on('click', () => {
    $('.header__mobile').addClass('active')
  })

  $('.header__mobile-close').on('click', () => {
    $('.header__mobile').removeClass('active')
  })

  $(window).on('scroll', function scrollPage() {
    const heightWindow = 50
    if ($(this).scrollTop() >= heightWindow) {
      $('.header').addClass('header--scroll')
    } else {
      $('.header').removeClass('header--scroll')
    }
  })

  $('.header__nav-list a').on('click', function clickDownScroll() {
    const offsetTop = $(window).width() < 1200 ? 60 : 136
    const scrollEl = $(this).attr('href')
    if ($(scrollEl).length !== 0) {
      $('html, body').animate(
        {
          scrollTop: $(scrollEl).offset().top - offsetTop,
        },
        500
      )
    }
    $('.header__mobile').removeClass('active')
    return false
  })

}