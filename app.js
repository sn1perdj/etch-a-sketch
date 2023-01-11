
/* Selecting the div with the class of container. */
const container = document.querySelector('.container');


/* Creating div as per the calculation made accoeding to the container space */
for (let i = 0; i < 3600; i++) {
    const div = document.createElement('div');
    /* Adding the div to the container. */
    container.appendChild(div);
    /* Adding an event listener to the div. When the mouse is over the div, the background color will
    change to red. */
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'red';
    });
}


/* Reloading the page when the "clear" button is clicked. */
const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    location.reload();
})