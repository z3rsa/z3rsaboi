if (window.screen.width > 600) {

    /* ===========> SIMPLE PARALLAX <=========== */
    let planet = document.getElementById("planet");
    let planet1 = document.getElementById('planet1');
    let bintang = document.getElementById('bintang');
    let astronout = document.getElementById('astronout');
    let desc = document.getElementById("desc");

    window.addEventListener('scroll', function () {
        let value = window.scrollY;
        desc.style.transform = 'translateY(' + value * -0.5 + 'px)';
        astronout.style.transform = 'translate(' + value * 1.2 + 'px, ' + value * 1.5 + 'px)';
        planet.style.transform = 'translateY(' + value * 0.5 + 'px)';
        planet1.style.transform = 'translate(' + value * -0.8 + 'px, ' + value * -0.6 + 'px)';
        bintang.style.transform = 'translateY(' + value * -0.2 + 'px)';
    })

    /* ===========> FADE OUT <=========== */
    var home = $('h1#title, a#btn');
    var plx_astronout = $('img#astronout');
    var range = 20;

    $(window).on('scroll', function () {

        var scrollTop = $(this).scrollTop(),
            height = home.outerHeight(),
            height_astronout = plx_astronout.outerHeight(),
            offset_home = height / 2,
            offset_astronout = height_astronout / 2,
            calc_home = 1 - (scrollTop - offset_home + range) / range;
        calc_astronout = 1 - (scrollTop - offset_astronout + range) / range;

        home.css({
            'opacity': calc_home
        });

        plx_astronout.css({
            'opacity': calc_astronout
        });

        if (calc_home > '1') {
            home.css({
                'opacity': 1
            });
        } else if (calc_home <= '0') {
            home.css({
                'opacity': 0
            });
        }

        if (calc_astronout > '1') {
            plx_astronout.css({
                'opacity': 1
            });
        } else if (calc_astronout <= '0') {
            plx_astronout.css({
                'opacity': 0
            });
        }

    });

}

// ===========> Nav Active

var navActive = document.getElementsByTagName("nav");
var nav_a = document.getElementsByClassName("a");

for (var i = 0; i < nav_a.length; i++) {
    nav_a[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// ===========> Splash Screen
let splash = document.querySelector('.splash__screen');
let logo = document.querySelectorAll('.splash')
let bodySplash = document.querySelector('body');

window.addEventListener('DOMContentLoaded', () => {
    logo.forEach((logo, idx) => {
        setTimeout(() => {
            logo.classList.add('active');
        }, (idx + 1) * 400);
    })

    setTimeout(() => {
        logo.forEach((span, idx) => {
            setTimeout(() => {
                logo.classList.remove('active');
                logo.classList.add('fade');
            }, (idx + 1) * 50)
        })
    }, 2000);

    setTimeout(() => {
        splash.style.left = '100vw';
        bodySplash.classList.add('overflow-temp');
    }, 2300)
});
