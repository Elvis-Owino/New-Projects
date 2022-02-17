
gsap.registerPlugin(ScrollTrigger);


//gsap.to(".a", {backgroundColor:"yellow", duration:5});

/* Panels. Horizontal scroll */
//let panels=document.querySelectorAll(".panel")
const panelsContainer=querySelector(".panels-container")


const panels = gsap.utils.toArray(".panel");
gsap.to(panels, {
	xPercent: -100 * ( panels.length - 1 ),
	ease: "none",
	scrollTrigger: {
		trigger:".wrapper",
		pin: true,
		start: "top top",
		scrub: 1,
		snap: 1 / (panels.length - 1),
		end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
	}
});