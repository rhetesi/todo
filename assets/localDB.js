'use strict';

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

export default localDB;
