"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

// Obtener referencias a los elementos del DOM
const select = document.getElementById('items');
const img = document.getElementById('displayImage');
const photographerInput = document.getElementById('photographer');
const descriptionInput = document.getElementById('description');
const scoreInput = document.getElementById('score');
const increaseBtn = document.getElementById('increaseScore');
const decreaseBtn = document.getElementById('decreaseScore');

// Llenar el selector con las opciones de los items
function fillSelect() {
    Object.entries(itemData).forEach(([key, item], idx) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = item.name;
        if (idx === 0) option.selected = true;
        select.appendChild(option);
    });
}

// Mostrar los datos del item seleccionado
function displayItem(key) {
    const item = itemData[key];
    if (!item) return;
    img.src = item.image;
    photographerInput.value = item.photographer;
    descriptionInput.value = item.description;
    scoreInput.value = item.score;
}

// Obtener el item actualmente seleccionado
function getSelectedKey() {
    return select.value;
}

// Eventos para cambiar de item
select.addEventListener('change', () => {
    displayItem(getSelectedKey());
});

// Eventos para aumentar/disminuir el score
increaseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const key = getSelectedKey();
    if (itemData[key]) {
        itemData[key].score++;
        scoreInput.value = itemData[key].score;
    }
});

decreaseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const key = getSelectedKey();
    if (itemData[key]) {
        itemData[key].score--;
        scoreInput.value = itemData[key].score;
    }
});

// Inicialización
fillSelect();
displayItem(getSelectedKey() || Object.keys(itemData)[0]);