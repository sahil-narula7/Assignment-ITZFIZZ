gsap.registerPlugin(ScrollTrigger);

const modelViewer = document.querySelector('model-viewer');
const progressBar = document.getElementById('custom-bar');
const progressText = document.getElementById('progress-text');
const loadingScreen = document.getElementById('loading-screen');

if (modelViewer) {
	
    modelViewer.addEventListener('progress', (event) => {
        // Calculate raw percentage integer
        const progress = Math.round(event.detail.totalProgress * 100);
        
        // Dynamically update UI indicators
        progressBar.style.width = `${progress}%`;
        progressText.innerText = `${progress}%`;
        
        // Once completely downloaded and initialized in memory
        if (progress === 100) {
            hideLoadingScreen();
        }
    });
}

function hideLoadingScreen() {
    // Check if GSAP is available on the window object
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline();
        
        // Beautiful, smooth cinematic fade out animation sequence
        tl.to([progressBar, progressText], {
            opacity: 0,
            duration: 0.3
        })
        .to(loadingScreen, {
            yPercent: -100, // Slides up out of view smoothly like a curtain
            duration: 0.8,
            ease: "power4.inOut"
        }, "+=0.2")
        .from(".hero-text h1", {
            y: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: "power3.out"
        }, "-=0.3"); // Staggers your landing text right as the layout reveals
    } else {
        // Simple fallback toggle if script engines fail
        loadingScreen.style.display = 'none';
    }
}

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

			const progress = modelJourney.progress();
			const handoff = gsap.utils.clamp(0, 1, (progress - 0.78) / 0.22);

			carViewer.cameraOrbit = `${orbit.angle}deg ${orbit.elevation}deg ${orbit.distance}%`;
			carViewer.autoRotate = false;
			gsap.set(heroObject, { autoAlpha: 1 - handoff });
			gsap.set(".top-view-model", { autoAlpha: handoff });
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
