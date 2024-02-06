import questionsAndAnswers from './faq-data.js';


document.addEventListener("DOMContentLoaded", function () {
    // Creating elements dynamically
    const h1 = document.createElement("h1");
    h1.textContent = "FAQs";
  
    /* const questionsAndAnswers = [
      {
        question: "What is Frontend Mentor, and how will it help me?",
        answer:
          "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
      },
      {
        question: "Is Frontend Mentor free?",
        answer:
          "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
      },
      {
        question: "Can I use Frontend Mentor projects in my portfolio?",
        answer:
          "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
      },
      {
        question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
        answer:
          "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
      },
    ]; */
  
    // Creating and appending elements for each question and answer
    questionsAndAnswers.forEach(function (item) {
      const h4 = document.createElement("h4");
      h4.textContent = item.question;
  
      const p = document.createElement("p");
      p.textContent = item.answer;
  
      // Appending to the body
      document.body.appendChild(h4);
      document.body.appendChild(p);
    });
  
    // Adding the attribution div
    const attribution = document.createElement("div");
    attribution.classList.add("attribution");
    attribution.innerHTML =
      'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">Your Name Here</a>.';
  
    document.body.appendChild(attribution);
  });
  