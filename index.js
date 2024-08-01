// typing animation
const roles = [
	"Web Developer",
	"Graphic Designer",
	"Video Editor",
	"Programmer",
];

let roleIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");
const typingSpeed = 50;
const deletingSpeed = 20;
const delayBetweenRoles = 1000;
const initialDelay = 1000;

function type() {
	if (charIndex < roles[roleIndex].length) {
		typingElement.textContent += roles[roleIndex].charAt(charIndex);
		charIndex++;
		setTimeout(type, typingSpeed);
	} else {
		setTimeout(deleteText, delayBetweenRoles);
	}
}

function deleteText() {
	if (charIndex > 0) {
		typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
		charIndex--;
		setTimeout(deleteText, deletingSpeed);
	} else {
		roleIndex = (roleIndex + 1) % roles.length;
		setTimeout(type, typingSpeed);
	}
}

document.addEventListener("DOMContentLoaded", (event) => {
	setTimeout(type, initialDelay);
});

//scroll button to a bout
const scrollToAbtBtn = document.getElementById("scrollToAbout");
function scrollToAbt() {
	window.scrollTo({
		top: 910,
		behavior: "smooth",
	});
}

//scroll to portfolio section
const scrollToProBtn = document.getElementById("scrollToProfile");
function scrollToPro() {
	window.scrollTo({
		top: 1815,
		behavior: "smooth",
	});
}

// second section view detector
document.addEventListener("DOMContentLoaded", () => {
	const target = document.querySelector(".bottomfade");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					target.classList.add("in-view");
					observer.unobserve(target);
				}
			});
		},
		{ threshold: 0.1 }
	);

	observer.observe(target);
});

document.addEventListener("DOMContentLoaded", () => {
	const skillBars = document.querySelectorAll(".skillbar");

	const observerOptions = {
		root: null,
		rootMargin: "0px",
		threshold: 0.1,
	};

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const skillLine = entry.target.querySelector(".skill-line");
				const percentage = skillLine.getAttribute("data-width");

				skillLine.style.width = percentage;
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	skillBars.forEach((skillBar) => {
		const skillLine = skillBar.querySelector(".skill-line");
		const percentage = skillLine.style.width;
		skillLine.setAttribute("data-width", percentage);
		skillLine.style.width = "0%";
		observer.observe(skillBar);
	});
});
