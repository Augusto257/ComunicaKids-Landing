document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqAnswer = question.nextElementSibling;

            faqQuestions.forEach(item => {
                if (item !== question && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.nextElementSibling.classList.remove('show');
                }
            });

            question.classList.toggle('active');
            faqAnswer.classList.toggle('show');
        });
    });
});