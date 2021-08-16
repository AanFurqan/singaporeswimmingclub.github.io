$(".owl-carousel").on("initialized.owl.carousel", () => {
	setTimeout(() => {
		$(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
		$("section").show();
	}, 200);
});

const $owlCarousel = $(".owl-carousel").owlCarousel({
	items: 1,
	loop: true,
	autoplaySpeed: 1000,
	smartSpeed: 1500,
	autoplayHoverPause: true,
	autoplay: true,
	video: true,
	lazyload: true,
	videoWidth: true, // Default false; Type: Boolean/Number
	videoHeight: true, // Default false; Type: Boolean/Number
});

$owlCarousel.on("changed.owl.carousel", (e) => {
	$(".owl-slide-animated").removeClass("is-transitioned");

	const $currentOwlItem = $(".owl-item").eq(e.item.index);
	$currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");

	const $target = $currentOwlItem.find(".owl-slide-text");
	doDotsCalculations($target);

	if ($(".owl-item.active video", this.$element)[0]) {
		$(".owl-item.active video", this.$element)[0].play();
	}
});

$owlCarousel.on("resize.owl.carousel", () => {
	setTimeout(() => {
		setOwlDotsPosition();
	}, 50);
});

setOwlDotsPosition();

function setOwlDotsPosition() {
	const $target = $(".owl-item.active .owl-slide-text");
	doDotsCalculations($target);
}

function doDotsCalculations(el) {
	const height = el.height();
	const { top, left } = el.position();
	const res = height + top + 20;

	$(".owl-carousel .owl-dots").css({
		top: `${res}px`,
		left: `${left}px`,
	});
}

// Sticky Navbar

$(function () {
	$(document).scroll(function () {
		var $nav = $(".navbar");

		$nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
	});
});

function AddReadMore() {
	var carLmt = 180;

	var readMoreTxt = " Read More";

	var readLessTxt = " Read Less";

	$(".addReadMore").each(function () {
		if ($(this).find(".firstSec").length) return;

		var allstr = $(this).text();
		if (allstr.length > carLmt) {
			var firstSet = allstr.substring(0, carLmt);
			var secdHalf = allstr.substring(carLmt, allstr.length);
			var strtoadd = firstSet + "<span class='SecSec'>" + secdHalf + "</span><span class='readMore'  title='Click to Show More'>" + readMoreTxt + "</span><span class='readLess' title='Click to Show Less'>" + readLessTxt + "</span>";
			$(this).html(strtoadd);
		}
	});

	$(document).on("click", ".readMore,.readLess", function () {
		$(this).closest(".addReadMore").toggleClass("showlesscontent showmorecontent");
	});
}
$(function () {
	AddReadMore();
});

let map;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 1.29718027, lng: 103.8811321 },
		zoom: 15,
	});
}
