//lnb - 메뉴
const $gnb = document.querySelector('header .gnb')
const $lnbs = document.querySelectorAll('header .lnb a')
const $bg_lnb = document.querySelector('.bg_lnb')

const navFadeIn = function () {
	$bg_lnb.style.display = 'block'

	$lnbs.forEach(function ($lnb) {
		$lnb.style.display = 'block'
	})
}

const navFadeOut = function () {
	$bg_lnb.style.display = 'none'

	$lnbs.forEach(function ($lnb) {
		$lnb.style.display = 'none'
	})
}

$gnb.addEventListener('mouseenter', function () {
	navFadeIn()
})

$gnb.addEventListener('mouseleave', function () {
	navFadeOut()
})

$bg_lnb.addEventListener('mouseover', function () {
	navFadeIn()
})

$bg_lnb.addEventListener('mouseout', function () {
	navFadeOut()
})

//#cj heritage
const swiper = new Swiper('.swiper', {
	// Optional parameters
	slidesPerView: 3, //한 화면에 보이는 슬라이드의 개수
	spaceBetween: 20, //슬라이드간의 간격
	slidesPerGroup: 1, //한번에 슬라이드 되는 개수

	loop: true, //무한반복

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true, //인디케이터 클릭가능 여부
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

$(function () {
	$(window).on({
		scroll: function () {
			const scrollTop = Math.ceil($(window).scrollTop())

			//탑버튼 노출처리
			const $aside = $('aside')

			if (scrollTop > 120) {
				$aside.fadeIn()
			} else {
				$aside.fadeOut()
			}

			//view>0 이면 푸터가 화면에 노출되었다는 것을 의미
			const view = scrollTop + $(window).height() - $('footer').offset().top

			if (view > 0) {
				//푸터노출
				$aside.css('margin-bottom', view)
			} else {
				$aside.css('margin-bottom', 0)
			}
		},
	})

	$(window).on('load resize', function () {})

	//scrolltop
	$('aside').on('click', function (evt) {
		evt.preventDefault()

		$('html,body').animate({ scrollTop: 0 }, 400)
	})

	const $btnGnb = $('.btn-gnb')

	$btnGnb.on('click', function () {
		$(this).toggleClass('clse')
		$nav.toggle()
	})
})
