document.addEventListener('DOMContentLoaded', function () {
	function checkScroll() {
		var scrolling = window.scrollY;
		var logo = document.getElementById('logo');
		const ruHeader = document.getElementById('ru-header');

		if (scrolling > 200) {
			ruHeader.classList.add('sticky');
			if (!ruHeader.classList.contains('white')) {
				logo.src = './assets/img/logo/logo-dark.png';
			}
		} else {
			ruHeader.classList.remove('sticky');
			if (!ruHeader.classList.contains('white')) {
				logo.src = './assets/img/logo/logo-white.png';
			}
		}
	}

	// Check scroll position on page load
	checkScroll();

	// Check scroll position on scroll
	window.addEventListener('scroll', checkScroll);
});

var swiper = new Swiper('.mySwiper-home2', { 
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

var swiper = new Swiper('.mySwiper', {
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});


var swiper = new Swiper('.mySwiper-home1', { 
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

var swiper = new Swiper('.mySwiper', {
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});



document.addEventListener('DOMContentLoaded', function () {
	var video = document.getElementById('my-video');
	var playButton = document.getElementById('play-button');
	if (video && playButton) {
		playButton.addEventListener('click', function () {
			if (video.paused) {
				video.play();
				video.classList.add('playing');
			}
		});

		video.addEventListener('click', function () {
			if (!video.paused) {
				video.pause();
				video.classList.remove('playing');
			}
		});

		video.addEventListener('play', function () {
			playButton.style.display = 'none';
		});

		video.addEventListener('pause', function () {
			playButton.style.display = 'block';
		});
	}
});

document.addEventListener('DOMContentLoaded', function () {
	const menuContainer = document.querySelector('#mobile-menus');
	const menuItems = menuContainer.querySelectorAll('.item');

	menuItems.forEach((item) => {
		item.addEventListener('click', function (event) {
			const subMenu = this.nextElementSibling;
			const icon = this.querySelector('.ru-ic');

			if (subMenu && subMenu.classList.contains('sub-menu')) {
				event.preventDefault();

				// Close other open submenus
				document.querySelectorAll('.sub-menu').forEach((menu) => {
					if (menu !== subMenu) {
						menu.style.maxHeight = null;
						menu.previousElementSibling
							.querySelector('.ru-ic')
							.classList.remove('rotated');
					}
				});

				// Toggle the clicked submenu
				if (subMenu.style.maxHeight) {
					subMenu.style.maxHeight = null;
					icon.classList.remove('rotated');
				} else {
					subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
					icon.classList.add('rotated');
				}
			}
		});
	});
});
$(document).ready(function(){
    $('#timepicker').mdtimepicker(); //Initializes the time picker
  });

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  $("#today")
  .datepicker({
    language: "en",
	locale: en,
    dateFormat: "mm/dd/yyyy",
    onSelect: function onSelect() {
      var bl = $("#today").val();
      // showUser(users.value, bl, group.value);
      // console.log(users.value, bl, group.value);
    }
  })
  .data("datepicker")
  .selectDate(new Date());

  