gsap.registerPlugin(ScrollTrigger);

if ("scrollRestoration" in history) {
	history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);

const heroObject = document.querySelector(".hero-object");
const carViewer = document.querySelector("model-viewer");
const scrollIndicator = document.querySelector(".scroll-indicator");

if (heroObject) {
	const orbit = { angle: 90, elevation: 75, distance: 118 };

	const modelJourney = gsap.timeline({
		scrollTrigger: {
			trigger: ".hero",
			start: "top top",
			end: "bottom top",
			scrub: 1,
			pin: ".hero-content",
			anticipatePin: 1
		},
		onUpdate: () => {
			if (!carViewer) {
				return;
			}

			carViewer.cameraOrbit = `${orbit.angle}deg ${orbit.elevation}deg ${orbit.distance}%`;
			carViewer.autoRotate = false;
		}
	});

	modelJourney
		.set(heroObject, { x: "0vw", y: "0vh", scale: 1.1, rotation: 0 })
		.to(heroObject, {
			x: "0vw",
			y: "18vh",
			scale: 1.15,
			duration: 0.2,
			ease: "power2.out"
		})
		.to(orbit, {
			angle: 450,
			duration: 0.5,
			ease: "none"
		})
		.to(orbit, {
			elevation: 32,
			distance: 72,
			duration: 0.2,
			ease: "power2.inOut"
		})
		.to(heroObject, {
			scale: 1.5,
			y: "28vh",
			duration: 0.2,
			ease: "power2.out"
		});

	gsap.fromTo(
		heroObject,
		{ x: "-55vw", y: "0vh", scale: 1.1 },
		{ x: "0vw", duration: 1.25, delay: 0.2, ease: "power3.out" }
	);

	if (scrollIndicator) {
		gsap.to(scrollIndicator, {
			opacity: 0,
			scrollTrigger: {
				trigger: ".hero",
				start: "top top",
				end: "20% top",
				scrub: true
			}
		});
	}
}
