$(document).ready(() => {

    // variable declarations
    var content = '';
    var regexEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    var topHeight = $('header').height();
    var bannerHeight = $('.banner').height();
    var abHeight = $('.about').height();
    var callCounter = topHeight + bannerHeight/3 + abHeight;

    var data = [
        {
            title: 'WE JUST COMPLETES $17.6 MILLION MEDICAL CLINIC IN MID-MISSOURI',
            date: 'JULY 20, 2017',
            image: '../assets/Images/news/news1.jpg'
        },
        {
            title: 'THANDLER AIRPORT WATER RECLAMATION FACILITY EXPANSION PROJECT NAMED',
            date: 'JUNE 17, 2017',
            image: '../assets/Images/news/news2.jpg'
        },
        {
            title: 'SILICON BENCH AND CORNIKE BEGIN CONSTRUCTION SOLAR FACILITIES',
            date: 'AUG 13, 2017',
            image: '../assets/Images/news/news3.jpg'
        }
    ]

    $('.seeAllPosts').click(e => {
        e.preventDefault()

        $.each(data, function(i, elem) {
            content += `
            <li>
                <figure>
                    <img src="${elem.image}" alt="News 1">
                </figure>
                <h3><a href="#FIXME" title="Project 1">${elem.title}</a></h3>
                <span>${elem.date}</span>
            </li>
            `;
        })
        $('.excellence ul').append(content)
        $('.seeAllPosts').hide();
    })

    // slick slider
    $('.slider').slick({
        dots: true,
        arrows: true
    });

    $('.test-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true
    })

    $('.modal-slider').slick({
        dots: false,
        arrows: true
    })

    // modal slider num change
    $('.modal-slider .slick-next, .modal-slider .slick-prev').click(e => {
        var num = $('.modal-slider .slick-active').data('slickIndex')
        $('.img-num').text(num+1)
            showTab(num+1)
    })

    $('.tab-content li').each(function(i, elem) {
        $(this).click(e => {
            $('section.modal').fadeIn();
            $('section.modal').removeClass('no');
            $('html, body').css("overflow", "hidden");
        })
    })

    // $('.projects, .specialists, .test-client').click(e => {
    //     if($('section.modal:not(.no)') == fals) {
    //         $('section.modal').fadeOut();
    //         $('section.modal').addClass('no');
    //         $('html, body').css("overflow", "visible");
    //     console.log('hai')
    //     }
    // })

    // close video functionality by clicking outside
    $(document).mouseup(function(e) {
        var container = $(".modal-slider");
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            $('section.modal').fadeOut();
            $('section.modal').addClass('no');
            $('html, body').css("overflow", "visible")
        }
    });

    // close modal slider
    $('.close-vid').click(e => {
        $('section.modal').fadeOut();
        $('section.modal').addClass('no');
        $('html, body').css("overflow", "visible");
    })

    // responsive navbar functionality
    $('.menu').click(e => {
        e.preventDefault();

        $('nav .wrapper > ul').addClass('slide');
        $('.close').addClass('slide');
        $('html, body').css("overflow", "hidden");
    })

    $('.close').click(e => {
        e.preventDefault();

        $('nav .wrapper > ul').removeClass('slide');
        $('.close').removeClass('slide');
        $('html, body').css("overflow", "visible");
    })

    // hide and show toggle btn functioanality
    $(window).scroll(function() {
        if ($(this).scrollTop() > topHeight) {
            $('.toggleBtn').addClass('flex');
        } else {
            $('.toggleBtn').removeClass('flex');
        }
    });

    // on toggleBtn click functionality
    $('.toggleBtn').click(e => {
        e.preventDefault();
        window.scroll({top: 0, behavior: "smooth"});
    })

    // on scroll call counter
    $(document).scroll(function() {
        if($(document).scrollTop() >= callCounter) {
            counter()
        }
    })

    // counter functionality
    function counter() {
        $('.count').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
          
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
            {
              duration: 2800,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
              }
            });
        });
    }
})