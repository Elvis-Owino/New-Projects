
gsap.registerPlugin(ScrollTrigger);
let horizontals= gsap.utils.toArray(".horizontal");
gsap.defaults({delay:4, toggleActions:"play pause play resume"})




//panels sliding in from different directions

function intro(){
	var tl=gsap.timeline();
tl.fromTo(".a", {x:"0%",y:"-100%"}, {x:"0%",y:"0%",opacity:1})
.fromTo(".b", {x:"-100%",y:"0%"}, {x:"0%",y:"0%",opacity:1})
.fromTo(".c", {x:"0%",y:"200%"}, {x:"0%",y:"0%",opacity:1})
.fromTo(".d",{x:"100%",y:"0%"}, {x:"0%",y:"0%",opacity:1})
.fromTo(".e", {x:"0%",y:"0%"}, {x:"0%",y:"0%",opacity:1})
.fromTo(".f", {x:"0%",y:"0%"}, {x:"0%",y:"0%",opacity:1})
.fromTo(".g", {x:"0%",y:"0%"}, {x:"0%",y:"0%",opacity:1})
.fromTo(".h", {x:"0%",y:"0%"}, {x:"0%",y:"0%",opacity:1});

ScrollTrigger.create({animation:tl, trigger:".wrapper",start:"top top", scrub:"true", pin:"true", anticipatePin:1});

	
	return tl;
}

//panels moving horizontally
function middle(){
	var tl=gsap.timeline();
	tl.to(horizontals, {
		xPercent:-100 * (horizontals.length-1),
		ease:"none",
		scrollTrigger: {
			trigger:".horizontals-container", pin:"true", scrub:"true", snap: 1,	
		}
	})
}




var mastertl=gsap.timeline();
mastertl .add(intro())
        .add(middle())
       
     















