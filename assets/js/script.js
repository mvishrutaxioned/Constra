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
})