function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const accordion = button.parentElement;

    // Если аккордеон уже открыт, закрыть его
    if (accordion.classList.contains('accordion-expanded')) {
        content.style.maxHeight = null;
        accordion.classList.remove('accordion-expanded');
    } else {
        // Открыть аккордеон
        content.style.maxHeight = content.scrollHeight + "px";
        accordion.classList.add('accordion-expanded');
    }
}
