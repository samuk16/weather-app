
import { EventManager } from './pubSub';


const arrCountryFinder = [

    {
        elementType: 'div',
        attributes: {class:'containerCountryFinder'},
        appendChild: 'body',

    },


    // childs containerCountryFinder

    {
        elementType: 'div',
        attributes: {class:'titleAndSearchBar'},
        appendChild: '.containerCountryFinder',

    },

    {
        elementType: 'div',
        attributes: {class:'searchCountryCards'},
        appendChild: '.containerCountryFinder',

    },

    // childs titleAndSearchBar

    {
        elementType: 'p',
        attributes: {class:'titleCountryFinder'},
        innerText:'Search Locations',
        appendChild: '.titleAndSearchBar',

    },

    {
        elementType: 'div',
        attributes: {class:'searchBarAndGps'},
        appendChild: '.titleAndSearchBar',

    },

    //  childs  searchBarAndGps

    {
        elementType: 'input',
        attributes: {class:'searchBar', type:'text'},
        appendChild: '.searchBarAndGps',

    },

    {
        elementType: 'div',
        attributes: {class:'containerGps'},
        innerHTML:'<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1116 0z" stroke="#000000" stroke-width="1.5"></path><path d="M12 11a1 1 0 100-2 1 1 0 000 2z" fill="#000000" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        appendChild: '.searchBarAndGps',

    },



];

const arrCountryCard = [

    {
        elementType: 'div',
        attributes: {class:'containerSearchCard',id:'2'},
        appendChild: '.searchCountryCards',

    },

    // childs containerSearchCard

    {
        elementType: 'div',
        attributes: {class:'flagAndName'},
        appendChild: '.containerSearchCard',

    },
    {
        elementType: 'div',
        attributes: {class:'locationData'},
        innerText:'Salta (-24.79°E -65.41°N1183m asl)',
        appendChild: '.containerSearchCard',

    },

    // childs flagAndName

    {
        elementType: 'img',
        attributes: {class:'countryFlag',src:'https://hatscripts.github.io/circle-flags/flags/ar.svg', width:'24'},
        appendChild: '.flagAndName',

    },

    {
        elementType: 'p',
        attributes: {class:'countryName'},
        innerText:'Salta',
        appendChild: '.flagAndName',

    },



]

const testFlag = [

    {
        elementType: 'img',
        attributes: {class:'flagTest'},
        appendChild: '.containerDateAndTitleWeather',

    },

];

const countryLatAndLong = {

    latitude: 'a',
    longitude: 'a',

};

function flagT() {
    
    testFlag[0].attributes.src = 'https://hatscripts.github.io/circle-flags/flags/ar.svg';
    testFlag[0].attributes.width = '24';

    EventManager.emit('createElements', testFlag)

    
    

}

function createCountrySearchElements() {
    
    const containerSearchBar = document.querySelector('.containerSearchBar');

    containerSearchBar.addEventListener('click', () => {

        EventManager.emit('createElements', arrCountryFinder)
        inputCountry();
    })
}

function inputCountry() {
    
    const searchBar = document.querySelector('.searchBar')

    searchBar.addEventListener('keyup', (e => {
        
        let test = e.target;

        // console.log(test.value);
        
        searchCountry(test.value)

    }))
}

async function searchCountry(searchData) {

    try {
        const response1 = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchData}&count=10&language=en&format=json`, {mode: 'cors'});

        const countryData = await response1.json();

        generateCountryCards(countryData.results);
        

    } catch (error) {

        console.log(error);
    }
   


}

async function weatherData(latitude,longitude) {
    
    try {
        
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=-24.7859&longitude=-65.4117&hourly=temperature_2m&forecast_days=1`, {mode: 'cors'});

        const weatherData = await response.json();

        console.log(weatherData);

    } catch (error) {
        console.log(error);
    }
}

function generateCountryCards(arr) {
    

    delCountryCards();

    arr.forEach(countryData => {
        
        let codeCLowerCase = countryData.country_code.toLowerCase();

        // itemProject[0].attributes.class = `itemProject item${project.id}`;

        arrCountryCard[0].attributes.id = `${countryData.id}`;

        arrCountryCard[0].attributes['data-lat'] = `${countryData.latitude}`;
        arrCountryCard[0].attributes['data-long'] = `${countryData.longitude}`;

        arrCountryCard[0].attributes.class = `containerSearchCard card${countryData.id}`;

        arrCountryCard[1].attributes.class = `flagAndName fn${countryData.id}`;
        
        arrCountryCard[3].attributes.src = `https://hatscripts.github.io/circle-flags/flags/${codeCLowerCase}.svg`;

        arrCountryCard[4].innerText = `${countryData.name}`;

        arrCountryCard[2].innerText = `${countryData.name} (${countryData.latitude} ${countryData.longitude})`;

        arrCountryCard[1].appendChild = `.card${countryData.id}`;
        arrCountryCard[2].appendChild = `.card${countryData.id}`;

        arrCountryCard[3].appendChild = `.fn${countryData.id}`;
        arrCountryCard[4].appendChild = `.fn${countryData.id}`;

        EventManager.emit('createElements', arrCountryCard)

        getLatAndLong(`card${countryData.id}`);
    });

}


function delCountryCards() {
    
    const searchCountryCards = document.querySelector('.searchCountryCards');

    while (searchCountryCards.firstChild) {
        searchCountryCards.removeChild(searchCountryCards.firstChild);
    }

}

function getLatAndLong(clas) {
    const card = document.querySelector(`.${clas}`);

    card.addEventListener('click', () => {
        countryLatAndLong.latitude = `${card.dataset.lat}`;
        countryLatAndLong.longitude = `${card.dataset.long}`;

    })

}


export {arrCountryFinder,arrCountryCard, createCountrySearchElements}
