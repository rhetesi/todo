'use strict';

import localDB from './localDB.js';
// show Today

const now = new Date();

function formattedDate(date) {

    const Options = {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }
    return date.toLocaleDateString('hu-HU', Options);
}

const showToday = document.querySelector('.todo__date');
showToday.textContent = formattedDate(now);

// localStorage handler


// Count pending todos.
const showPending = () => {
    const pendingsNum = todos.filter(todo => !todo.done).length
};

// const init() 