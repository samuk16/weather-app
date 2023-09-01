import './style.css'
import { init } from './ui';
import { EventManager } from './pubSub';

const arrElementsDomMain = [

    {
        elementType: 'div',
        attributes: {class:'containerMain'},
        appendChild: 'body',

    },

    //  childs containerMain

    {
        elementType: 'div',
        attributes: {class:'containerLeft'},
        appendChild: '.containerMain',

    },

    {
        elementType: 'div',
        attributes: {class:'containerRight'},
        appendChild: '.containerMain',

    },

    //  childs containerLeft

    {
        elementType: 'div',
        attributes: {class:'containerDateAndTitleWeather'},
        appendChild: '.containerLeft',

    },

    {
        elementType: 'div',
        attributes: {class:'containerCardsWeather'},
        appendChild: '.containerLeft',

    },

    //  childs containerRight


    {
        elementType: 'div',
        attributes: {class:'weatherWidget'},
        appendChild: '.containerRight',

    },

    {
        elementType: 'div',
        attributes: {class:'weatherNextDays'},
        appendChild: '.containerRight',

    },

    //  childs containerDateAndTitleWeather

    {
        elementType: 'div',
        attributes: {class:'containerDateAndTime'},
        appendChild: '.containerDateAndTitleWeather',

    },

    {
        elementType: 'h1',
        attributes: {class:'titleWeather'},
        innerText: 'Heavy Rain',
        appendChild: '.containerDateAndTitleWeather',

    },

    // childs containerDateAndTime
    
    {
        elementType: 'p',
        attributes: {class:'date'},
        innerText: '31 August 2023',
        appendChild: '.containerDateAndTime',

    },

    {
        elementType: 'p',
        attributes: {class:'time'},
        innerText: '11:00',
        appendChild: '.containerDateAndTime',
    },

    //  childs weatherWidget

    {
        elementType: 'div',
        attributes: {class:'containerSearchBar'},
        appendChild: '.weatherWidget',

    },

    {
        elementType: 'div',
        attributes: {class:'containerCOrF'},
        appendChild: '.weatherWidget',

    },

    {
        elementType: 'h2',
        attributes: {class:'titleGrades'},
        innerText: '11°C',
        appendChild: '.weatherWidget',

    },

    // childs weatherNextDays

    {
        elementType: 'p',
        attributes: {class:'titleNextDays'},
        innerText: 'The Next Days Forecast',
        appendChild: '.weatherNextDays',

    },

    {
        elementType: 'div',
        attributes: {class:'containerOpDays'},
        appendChild: '.weatherNextDays',

    },

    {
        elementType: 'div',
        attributes: {class:'containerCardsNextDays'},
        appendChild: '.weatherNextDays',

    },


    // childs containerSearchBar


    {
        elementType: 'div',
        attributes: {class:'svgUbication'},
        innerHTML: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 10C20 14.418 12 22 12 22C12 22 4 14.418 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="black" stroke-width="1.5"/><path d="M12 11C12.2652 11 12.5196 10.8946 12.7071 10.7071C12.8946 10.5196 13 10.2652 13 10C13 9.73478 12.8946 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10C11 10.2652 11.1054 10.5196 11.2929 10.7071C11.4804 10.8946 11.7348 11 12 11Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        appendChild: '.containerSearchBar',

    },

    {
        elementType: 'input',
        attributes: {class:'searchBar', type:'text'},
        appendChild: '.containerSearchBar',

    },

    // childs containerCOrF

    {
        elementType: 'div',
        attributes: {class:'containerCelcius styleOp'},
        appendChild: '.containerCOrF',

    },{
        elementType: 'div',
        attributes: {class:'containerfahrenheit styleOp'},
        appendChild: '.containerCOrF',

    },
    {
        elementType: 'p',
        attributes: {class:'celcius'},
        innerText: '°C',
        appendChild: '.containerCelcius',

    },
    {
        elementType: 'p',
        attributes: {class:'fahrenheit '},
        innerText: '°F',
        appendChild: '.containerfahrenheit',

    },

    // childs containerOpDays 

    {
        elementType: 'div',
        attributes: {class:'opNextDay1 opDaysStyle'},
        innerText: '5 days',
        appendChild: '.containerOpDays',

    },
    {
        elementType: 'div',
        attributes: {class:'opNextDay2 opDaysStyle'},
        innerText: '14 days',
        appendChild: '.containerOpDays',

    },
    {
        elementType: 'div',
        attributes: {class:'opNextDay3 opDaysStyle'},
        innerText: '30 days',
        appendChild: '.containerOpDays',

    },
    
    
];

const arrCardsWeather = [

    {
        elementType: 'div',
        attributes: {class:'containerCard cardStyle'},
        appendChild: '.containerCardsWeather',

    },

    // childs containerCardsWeather

    {
        elementType: 'div',
        attributes: {class:'timeCardWeather'},
        innerText: '09:00',
        appendChild: '.containerCard',

    },
    
    {
        elementType: 'div',
        attributes: {class:'svgWeather'},
        innerHTML: '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" data-darkreader-inline-color="" style="--darkreader-inline-color: #e8e6e3;"><path d="M6 13c-1.667 0-5 1-5 5s3.333 5 5 5h12c1.667 0 5-1 5-5s-3.333-5-5-5M12 12a3 3 0 100-6 3 3 0 000 6zM19 9h1M12 2V1M18.5 3.5l-1 1M5.5 3.5l1 1M4 9h1" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #000000;"></path></svg>',
        appendChild: '.containerCard',

    },

    {
        elementType: 'p',
        attributes: {class:'degrees'},
        innerText: '9°C',
        appendChild: '.containerCard',

    },
]
const arrCardsNextDays = [

    {
        elementType: 'div',
        attributes: {class:'cardNextDays'},
        appendChild: '.containerCardsNextDays',

    },

    // childs cardNextDays

    {
        elementType: 'div',
        attributes: {class:'svgWeatherNextDays'},
        innerHTML: '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" data-darkreader-inline-color="" style="--darkreader-inline-color: #e8e6e3;"><path d="M6 13c-1.667 0-5 1-5 5s3.333 5 5 5h12c1.667 0 5-1 5-5s-3.333-5-5-5M12 12a3 3 0 100-6 3 3 0 000 6zM19 9h1M12 2V1M18.5 3.5l-1 1M5.5 3.5l1 1M4 9h1" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #000000;"></path></svg>',
        appendChild: '.cardNextDays',

    },

    {
        elementType: 'div',
        attributes: {class:'dateAndWeatherTitle'},
        appendChild: '.cardNextDays',

    },

    {
        elementType: 'div',
        attributes: {class:'containerDegressNextDays'},
        appendChild: '.cardNextDays',

    },
    
    //  childs dateAndWeatherTitle

    {
        elementType: 'p',
        attributes: {class:'dateNextDays'},
        innerText: 'Friday, September 1',
        appendChild: '.dateAndWeatherTitle',

    },

    {
        elementType: 'p',
        attributes: {class:'titleWeatherNextDays'},
        innerText: 'Heavy Rain',
        appendChild: '.dateAndWeatherTitle',

    },

    // childs containerDegressNextDays

    {
        elementType: 'p',
        attributes: {class:'degreesNextDays'},
        innerText: '9°',
        appendChild: '.containerDegressNextDays',

    },

    {
        elementType: 'p',
        attributes: {class:'degreesNextDays'},
        innerText: '16°',
        appendChild: '.containerDegressNextDays',

    },

]

init()
EventManager.emit('createElements', arrElementsDomMain)
EventManager.emit('createElements', arrCardsWeather)
EventManager.emit('createElements', arrCardsNextDays)
