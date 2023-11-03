//animation

function draw() {
	con.clearRect(0, 0, WIDTH, HEIGHT);
	for (var e = 0; e < pxs.length; e++) {
		pxs[e].fade();
		pxs[e].move();
		pxs[e].draw()
	}
}

function Circle() {
	WIDTH = window.innerWidth;
	HEIGHT = window.innerHeight;
	this.s = {
		ttl: 8e3,
		xmax: 5,
		ymax: 2,
		rmax: 10,
		rt: 1,
		xdef: 960,
		ydef: 540,
		xdrift: 4,
		ydrift: 4,
		random: true,
		blink: true
	};
	this.reset = function() {
		this.x = this.s.random ? WIDTH * Math.random() : this.s.xdef;
		this.y = this.s.random ? HEIGHT * Math.random() : this.s.ydef;
		this.r = (this.s.rmax - 1) * Math.random() + 1;
		this.dx = Math.random() * this.s.xmax * (Math.random() < .5 ? -1 : 1);
		this.dy = Math.random() * this.s.ymax * (Math.random() < .5 ? -1 : 1);
		this.hl = this.s.ttl / rint * (this.r / this.s.rmax);
		this.rt = Math.random() * this.hl;
		this.s.rt = Math.random() + 1;
		this.stop = Math.random() * .2 + .4;
		this.s.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
		this.s.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1)
	};
	this.fade = function() {
		this.rt += this.s.rt
	};
	this.draw = function() {
		if (this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt * -1;
		else if (this.rt >= this.hl) this.reset();
		var e = 1 - this.rt / this.hl;
		con.beginPath();
		con.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
		con.closePath();
		var t = this.r * e;
		g = con.createRadialGradient(this.x, this.y, 0, this.x, this.y, t <= 0 ? 1 : t);
		g.addColorStop(0, "rgba(255,255,255," + e + ")");
		g.addColorStop(this.stop, "rgba(77,101,181," + e * .6 + ")");
		g.addColorStop(1, "rgba(77,101,181,0)");
		con.fillStyle = g;
		con.fill()
	};
	this.move = function() {
		WIDTH = window.innerWidth;
		HEIGHT = window.innerHeight;
		this.x += this.rt / this.hl * this.dx;
		this.y += this.rt / this.hl * this.dy;
		if (this.x > WIDTH || this.x < 0) this.dx *= -1;
		if (this.y > HEIGHT || this.y < 0) this.dy *= -1
	};
	this.getX = function() {
		return this.x
	};
	this.getY = function() {
		return this.y
	}
}
var WIDTH;
var HEIGHT;
var canvas;
var con;
var g;
var pxs = new Array;
var rint = 60;
$(document).ready(function() {
	WIDTH = "100%";
	HEIGHT = "100%";
	$("#container").width(WIDTH).height(HEIGHT);
	WIDTH = window.innerWidth;
	HEIGHT = window.innerHeight;
	canvas = document.getElementById("pixie");
	$(canvas).attr("width", WIDTH).attr("height", HEIGHT);
	con = canvas.getContext("2d");
	for (var e = 0; e < 100; e++) {
		pxs[e] = new Circle;
		pxs[e].reset()
	}
	setInterval(draw, rint)
});
$(".services .header2 .service-header").hover(function() {
	var e = $(this);
	e.find("h3").hide();
	$(this).parent().find(".header-bg").stop(true, true).animate({
		width: "100%"
	}, "fast", function() {
		e.find("h3").addClass("active").fadeIn("fast")
	})
}, function() {
	var e = $(this);
	e.find("h3").hide();
	e.parent().find(".header-bg").stop(true, true).animate({
		width: 70
	}, "fast", function() {
		e.find("h3").removeClass("active").fadeIn("fast")
	})
})


//animation2
gsap.to(".hello", {
	text: "Hello! I'm Natalia, web-developer",
	duration:3,
	ease: "power1.in",
	delay:1
})

gsap.to ('.me', {delay:4, duration:3, opacity:1})


const pictureOne = document.querySelector('.littleOne');
const pictureTwo = document.querySelector('.littleTwo');
const pictureThree = document.querySelector('.littleThree');
const pictureFour = document.querySelector('.littleFour');
const pictureFive = document.querySelector('.littleFive');
const pictureSix = document.querySelector('.littleSix');
pictureOne.addEventListener('mouseover', bigpictureOne);
pictureTwo.addEventListener('mouseover', bigpictureTwo);
pictureThree.addEventListener('mouseover', bigpictureThree);
pictureFour.addEventListener('mouseover', bigpictureFour);
pictureFive.addEventListener('mouseover', bigpictureFive);
pictureSix.addEventListener('mouseover', bigpictureSix);
pictureOne.addEventListener('mouseout', littlepictureOne);
pictureTwo.addEventListener('mouseout', littlepictureTwo);
pictureThree.addEventListener('mouseout', littlepictureThree);
pictureFour.addEventListener('mouseout', littlepictureFour);
pictureFive.addEventListener('mouseout', littlepictureFive);
pictureSix.addEventListener('mouseout', littlepictureSix);

function bigpictureOne(){
	gsap.to('.littleOne', {scale:1.1, duration:2})
}
function littlepictureOne(){
	gsap.to('.littleOne', {scale:1, duration:2})
}

function bigpictureTwo(){
	gsap.to('.littleTwo', {scale:1.1, duration:2})
}
function littlepictureTwo(){
	gsap.to('.littleTwo', {scale:1, duration:2})
}

function bigpictureThree(){
	gsap.to('.littleThree', {scale:1.1, duration:2})
}
function littlepictureThree(){
	gsap.to('.littleThree', {scale:1, duration:2})
}

function bigpictureFour(){
	gsap.to('.littleFour', {scale:1.1, duration:2})
}
function littlepictureFour(){
	gsap.to('.littleFour', {scale:1, duration:2})
}

function bigpictureFive(){
	gsap.to('.littleFive', {scale:1.1, duration:2})
}
function littlepictureFive(){
	gsap.to('.littleFive', {scale:1, duration:2})
}

function bigpictureSix(){
	gsap.to('.littleSix', {scale:1.1, duration:2})
}
function littlepictureSix(){
	gsap.to('.littleSix', {scale:1, duration:2})
}