const range = document.querySelector('#range');
const pageviews = document.querySelector('.pageviews');
const price = document.querySelector('.price-div h1');
const toggle = document.querySelector('#checkbox');
const priceSpan = document.querySelector('.month');


function change() {

    range.addEventListener('input', () => {

        if (toggle.checked == true) {
            if (range.value == 1) {
                pageviews.textContent = '10K PAGEVIEWS';
                price.textContent = '$72.00';
                priceSpan.textContent = '/ Year';
                range.style.background = '#ECF0FB'

            }
            else if (range.value == 2) {
                pageviews.textContent = '50K PAGEVIEWS';
                price.textContent = '$108.00';
                priceSpan.textContent = '/ Year';
                range.style.background = 'linear-gradient(to left,#ECF0FB  75%,#10D8C4  25%)'

            }
            else if (range.value == 3) {
                pageviews.textContent = '100K PAGEVIEWS';
                price.textContent = '$144.00';
                priceSpan.textContent = '/ Year';
                range.style.background = 'linear-gradient(to right, #10D8C4 50%, #ECF0FB 50%)'

            }
            else if (range.value == 4) {
                pageviews.textContent = '500K PAGEVIEWS';
                price.textContent = '$216.00';
                priceSpan.textContent = '/ Year';
                range.style.background = 'linear-gradient(to right, #10D8C4 75%, #ECF0FB 25%)'

            }
            else if (range.value == 5) {
                pageviews.textContent = '1M PAGEVIEWS';
                price.textContent = '$324.00';
                priceSpan.textContent = '/ Year';
                range.style.background = 'linear-gradient(to right, #10D8C4 100%, #ECF0FB 0%)'

            }
        }
        else {
            if (range.value == 1) {
                pageviews.textContent = '10K PAGEVIEWS';
                price.textContent = `$${8.00.toFixed(2)}`;
                range.style.background = '#ECF0FB'
            }
            else if (range.value == 2) {
                pageviews.textContent = '50K PAGEVIEWS';
                price.textContent = `$${12.00.toFixed(2)}`;
                range.style.background = 'linear-gradient(to left,#ECF0FB  75%,#10D8C4  25%)'

            }
            else if (range.value == 3) {
                pageviews.textContent = '100K PAGEVIEWS';
                price.textContent = `$${16.00.toFixed(2)}`;
                range.style.background = 'linear-gradient(to right, #10D8C4 50%, #ECF0FB 50%)'

            }
            else if (range.value == 4) {
                pageviews.textContent = '500K PAGEVIEWS';
                price.textContent = `$${24.00.toFixed(2)}`;
                range.style.background = 'linear-gradient(to right, #10D8C4 75%, #ECF0FB 25%)'

            }
            else if (range.value == 5) {
                pageviews.textContent = '1M PAGEVIEWS';
                price.textContent = `$${32.00.toFixed(2)}`;
                range.style.background = 'linear-gradient(to right, #10D8C4 100%, #ECF0FB 0%)'

            }
        }


    });

}

function togglefunc() {
    toggle.addEventListener('click', () => {
        if (toggle.checked == true) {
            if (range.value == 1) {
                pageviews.textContent = '10K PAGEVIEWS';
                price.textContent = '$72.00';
                priceSpan.textContent = '/ Year'
            }
            else if (range.value == 2) {
                pageviews.textContent = '50K PAGEVIEWS';
                price.textContent = '$108.00';
                priceSpan.textContent = '/ Year'
            }
            else if (range.value == 3) {
                pageviews.textContent = '100K PAGEVIEWS';
                price.textContent = '$144.00';
                priceSpan.textContent = '/ Year'
            }
            else if (range.value == 4) {
                pageviews.textContent = '500K PAGEVIEWS';
                price.textContent = '$216.00';
                priceSpan.textContent = '/ Year'
            }
            else if (range.value == 5) {
                pageviews.textContent = '1M PAGEVIEWS';
                price.textContent = '$324.00';
                priceSpan.textContent = '/ Year'
            }
        }
        else if (toggle.checked == false) {
            if (range.value == 1) {
                pageviews.textContent = '10K PAGEVIEWS';
                price.textContent = `$${8.00.toFixed(2)}`;

            }
            else if (range.value == 2) {
                pageviews.textContent = '50K PAGEVIEWS';
                price.textContent = `$${12.00.toFixed(2)}`;
            }
            else if (range.value == 3) {
                pageviews.textContent = '100K PAGEVIEWS';
                price.textContent = `$${16.00.toFixed(2)}`;
            }
            else if (range.value == 4) {
                pageviews.textContent = '500K PAGEVIEWS';
                price.textContent = `$${24.00.toFixed(2)}`;
            }
            else if (range.value == 5) {
                pageviews.textContent = '1M PAGEVIEWS';
                price.textContent = `$${32.00.toFixed(2)}`;
            }
        }
    })


}









