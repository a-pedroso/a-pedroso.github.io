/**
* Template Name: Maundy - v4.8.1
* Template URL: https://bootstrapmade.com/maundy-free-coming-soon-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

    /**
   * Skills animation
   */
     let skilsContent = select('.skills-content');
     if (skilsContent) {
       new Waypoint({
         element: skilsContent,
         offset: '80%',
         handler: function(direction) {
           let progress = select('.progress .progress-bar', true);
           progress.forEach((el) => {
             el.style.width = el.getAttribute('aria-valuenow') + '%'
           });
         }
       })
     }

  new PureCounter();

  if ($('.typed').length) {
    
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }


  // current age
  var birthDate = new Date(1985, 3, 20);
  var currentDate = new Date();
  var diff_ms = currentDate - birthDate; // miliseconds
  var age_dt = new Date(diff_ms); 
  var age = Math.abs(age_dt.getUTCFullYear() - 1970);

  $("#current-age").html(age);


  //xp-years
  var startDate = new Date(2009, 1, 1);
  var currentDate = new Date();
  var diff_ms = currentDate - startDate; // miliseconds
  var xp_dt = new Date(diff_ms); 
  var xp = Math.abs(xp_dt.getUTCFullYear() - 1970);

  $("#xp-years").attr('data-purecounter-end', xp);

})()