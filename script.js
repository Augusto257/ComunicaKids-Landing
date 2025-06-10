// script.js

document.addEventListener('DOMContentLoaded', () => {
    // ... (código de Smooth Scrolling y Fade-in on Scroll anterior) ...

    // Funcionalidad de Acordeón para FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqAnswer = question.nextElementSibling; // El elemento <p> que sigue al h3

            // Cierra todas las otras respuestas abiertas
            faqQuestions.forEach(item => {
                if (item !== question && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.nextElementSibling.classList.remove('show');
                }
            });

            // Alterna la clase 'active' en la pregunta para rotar el icono
            question.classList.toggle('active');
            // Alterna la clase 'show' en la respuesta para mostrarla/ocultarla
            faqAnswer.classList.toggle('show');
        });
    });
});