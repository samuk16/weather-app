import './style.css'
import { init } from './ui';
import { EventManager } from './pubSub';
import {createCountrySearchElements,handleResize} from './weatherFunctions';

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
        attributes: {class:'outerCardsWeather'},
        appendChild: '.containerLeft',

    },
    {
        elementType: 'div',
        attributes: {class:'containerCardsWeather'},
        appendChild: '.outerCardsWeather',

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
        attributes: {class:'lastUpdated'},
        innerText: 'Last updated',
        appendChild: '.containerDateAndTime',

    },

    {
        elementType: 'p',
        attributes: {class:'date'},
        innerText: '11:00',
        appendChild: '.containerDateAndTime',
    },

    //  childs weatherWidget

    {
        elementType: 'div',
        attributes: {class:'svgUbication'},
        innerHTML: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        appendChild: '.weatherWidget',

    },

    {
        elementType: 'div',
        attributes: {class:'containerNameAndFlag'},
        appendChild: '.weatherWidget',

    },

    {
        elementType: 'h3',
        attributes: {class:'titleGrades'},
        innerText: '11°C',
        appendChild: '.weatherWidget',

    },

    {
        elementType: 'div',
        attributes: {class:'containerCOrF'},
        appendChild: '.weatherWidget',

    },

    //  childs containerNameAndFlag

    {
        elementType: 'h2',
        attributes: {class:'titleCity'},
        innerText: 'Salta',
        appendChild: '.containerNameAndFlag',

    },

    {
        elementType: 'img',
        attributes: {class:'countryFlag',src:'https://hatscripts.github.io/circle-flags/flags/ar.svg', width:'24'},
        appendChild: '.containerNameAndFlag',

    },


    // childs weatherNextDays

    {
        elementType: 'p',
        attributes: {class:'titleNextDays'},
        innerText: 'The Next 3 Days Forecast',
        appendChild: '.weatherNextDays',

    },

    {
        elementType: 'div',
        attributes: {class:'containerCardsNextDays'},
        appendChild: '.weatherNextDays',

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
    
];


init()
EventManager.emit('createElements', arrElementsDomMain)
createCountrySearchElements();
window.addEventListener('resize', handleResize)
handleResize();
