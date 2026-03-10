const facts = [
    "I'm currently studying Cybersecurity at BYU-Idaho.",
    "I know how to code in HTML, CSS, and JavaScript.",
    "I play competitive Smash Bros. Ultimate.",
];

const aboutText = document.getElementById("about-text");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let index = 0;

aboutText.textContent = facts[index];

nextBtn.addEventListener("click", () => {
    index++;
    if (index >= facts.length) {
        index = 0;
    }
    aboutText.textContent = facts[index];
});

prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = facts.length - 1;
    }
    aboutText.textContent = facts[index];
});