const range = document.querySelector('#range');
const pageviews = document.querySelector('.pageviews');
const price = document.querySelector('.price-div h1');
const toggle = document.querySelector('#checkbox');
const priceSpan = document.querySelector('.month');


let priceData = [
    {
        prc: '$8.00',
        yrlprc: '$72.00',
        views: '10K PAGEVIEWS',
        backgr: '#ECF0FB',
        yrl: '/ Year',
        mnth: '/ month'
    },
    {
        prc: '$12.00',
        yrlprc: '$108.00',
        views: '50K PAGEVIEWS',
        backgr: 'linear-gradient(to left,#ECF0FB 75% ,#10D8C4 25% )',
        yrl: '/ Year',
        mnth: '/ month'
    },
    {
        prc: '$16.00',
        yrlprc: '$144.00',
        views: '100K PAGEVIEWS',
        backgr: 'linear-gradient(to right, #10D8C4 50%, #ECF0FB 50%)',
        yrl: '/ Year',
        mnth: '/ month'
    },
    {
        prc: '$24.00',
        yrlprc: '$216.00',
        views: '500K PAGEVIEWS',
        backgr: 'linear-gradient(to right, #10D8C4 75%, #ECF0FB 25%)',
        yrl: '/ Year',
        mnth: '/ month'
    },
    {
        yrlprc: '$324.00',
        prc: '$32.00',
        views: '1M PAGEVIEWS',
        backgr: 'linear-gradient(to right, #10D8C4 100%, #ECF0FB 0%)',
        yrl: '/ Year',
        mnth: '/ month'
    }
];


range.addEventListener('input', () => {
    if (toggle.checked == true) {
        price.textContent = priceData[range.value].yrlprc;
        priceSpan.textContent = priceData[range.value].yrl;

    } else {
        price.textContent = priceData[range.value].prc;
        priceSpan.textContent = priceData[range.value].mnth

    }
    pageviews.textContent = priceData[range.value].views;
    range.style.background = priceData[range.value].backgr
});
toggle.addEventListener('click', () => {
    if (toggle.checked == true) {
        price.textContent = priceData[range.value].yrlprc;
        priceSpan.textContent = priceData[range.value].yrl;

    }
    else {
        price.textContent = priceData[range.value].prc;
        priceSpan.textContent = priceData[range.value].mnth

    }
})

