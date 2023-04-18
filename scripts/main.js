const modal = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const modal4 = document.querySelector('.modal4');


const openModal = document.querySelector('#intro');
const openModal2 = document.querySelector('#work');
const openModal3 = document.querySelector('#about');
const openModal4 = document.querySelector('#contact');


const closeModal = modal.querySelector('.fa-xmark');
const closeModal2 = modal2.querySelector('.fa-xmark');
const closeModal3 = modal3.querySelector('.fa-xmark');
const closeModal4 = modal4.querySelector('.fa-xmark');


openModal.addEventListener('click', () => {
    if (typeof modal.showModal === "function") {
        modal.showModal();
    } else {
        dialogPolyfill.registerDialog(modal);
        modal.showModal();
    }
});

openModal2.addEventListener('click', () => {
    if (typeof modal2.showModal === "function") {
        modal2.showModal();
    } else {
        dialogPolyfill.registerDialog(modal2);
        modal2.showModal();
    }
});

openModal3.addEventListener('click', () => {
    if (typeof modal3.showModal === "function") {
        modal3.showModal();
    } else {
        dialogPolyfill.registerDialog(modal3);
        modal3.showModal();
    }
});

openModal4.addEventListener('click', () => {
    if (typeof modal4.showModal === "function") {
        modal4.showModal();
    } else {
        dialogPolyfill.registerDialog(modal4);
        modal4.showModal();
    }
});


closeModal.addEventListener('click', () => {
    modal.close();
});

closeModal2.addEventListener('click', () => {
    modal2.close();
});

closeModal3.addEventListener('click', () => {
    modal3.close();
});

closeModal4.addEventListener('click', () => {
    modal4.close();
});






