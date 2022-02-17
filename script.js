
gsap.registerPlugin(ScrollTrigger);

//gsap.fromTo(".h", {x:"-100%",y:"0%", duration:1}, {x:"0%",y:"0%", duration:6});
function intro(){
	var tl=gsap.timeline();
tl.fromTo(".a", {x:"0%",y:"-100%", duration:1}, {x:"0%",y:"0%",opacity:1, duration:6})
.fromTo(".b", {x:"-100%",y:"0%", duration:1}, {x:"0%",y:"0%",opacity:1, duration:6})
.fromTo(".c", {x:"0%",y:"200%", duration:1}, {x:"0%",y:"0%",opacity:1, duration:6})
.fromTo(".d",{x:"100%",y:"0%", duration:1}, {x:"0%",y:"0%",opacity:1, duration:6})
.fromTo(".e", {x:"0%",y:"-100%", duration:1}, {x:"0%",y:"0%",opacity:1, duration:6})
.fromTo(".f", {x:"-100%",y:"0%", duration:1}, {x:"0%",y:"0%",opacity:1, duration:6})
.fromTo(".g", {x:"0%",y:"200%", duration:1}, {x:"0%",y:"0%",opacity:1, duration:6})
.fromTo(".h", {x:"100%",y:"0%", duration:1}, {x:"0%",y:"0%",opacity:1, duration:6});

	
	return tl;
}



var mastertl=gsap.timeline();
mastertl.add(intro())
         //.add(end(), "-=1")
		 //.add(middle(),"+=2")















