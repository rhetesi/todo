'use strict';

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

const localDB = {
    setItem(key, value) {
        value = JSON.stringify(value);
        localStorage(key, value);
    },
    getItem(key) {
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    },
    removeItem(key) {
        localStorage.removeItem(key);
    }
};