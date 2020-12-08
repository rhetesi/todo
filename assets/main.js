'use strict';

// show Today

const now = new Date();

function formattedDate(date) {

    const Options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return date.toLocaleDateString('hu-HU', Options);
}

const showToday = document.querySelector('.todo__date');
showToday.textContent = formattedDate(now);

