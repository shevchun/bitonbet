import './markup-menu.js'
import $ from 'jquery'
import svg4everybody from 'svg4everybody'

import custom from './components/custom.js'

globalThis.$ = $
globalThis.jQuery = $

document.addEventListener('DOMContentLoaded', () => {
  svg4everybody()
  custom()
})

$(window).on('load resize', () => {
  if ($(window).width() < 1200) {
    $('.header__mobile-box').append($('.header__nav'))
    $('.first-screen__btn-box').insertAfter($('.first-screen__right'))
    $('.contact__mobile-box').insertAfter($('.contact__right'))
  } else {
    $('.header__center').append($('.header__nav'))
    $('.first-screen__btn-box').insertAfter($('.first-screen__title'))
    $('.contact__mobile-box').insertAfter($('.contact__text'))
  }
})
