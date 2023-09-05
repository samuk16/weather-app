
import { EventManager } from './pubSub';
import { format } from 'date-fns';
import ScrollBooster from 'scrollbooster';

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
    cOf: 'c',
    forecastDays:'xd',

};

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
        // innerHTML: '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" data-darkreader-inline-color="" style="--darkreader-inline-color: #e8e6e3;"><path d="M6 13c-1.667 0-5 1-5 5s3.333 5 5 5h12c1.667 0 5-1 5-5s-3.333-5-5-5M12 12a3 3 0 100-6 3 3 0 000 6zM19 9h1M12 2V1M18.5 3.5l-1 1M5.5 3.5l1 1M4 9h1" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #000000;"></path></svg>',
        appendChild: '.containerCard',

    },

    {
        elementType: 'p',
        attributes: {class:'degrees'},
        innerText: '9°C',
        appendChild: '.containerCard',

    },

    // childs svgWeather

    {
        elementType: 'img',
        attributes: {class:'iconWeather',src:'https://hatscripts.github.io/circle-flags/flags/ar.svg', width:'30'},
        appendChild: '.svgWeather',

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
        // innerHTML: '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" data-darkreader-inline-color="" style="--darkreader-inline-color: #e8e6e3;"><path d="M6 13c-1.667 0-5 1-5 5s3.333 5 5 5h12c1.667 0 5-1 5-5s-3.333-5-5-5M12 12a3 3 0 100-6 3 3 0 000 6zM19 9h1M12 2V1M18.5 3.5l-1 1M5.5 3.5l1 1M4 9h1" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #000000;"></path></svg>',
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
        attributes: {class:'degreesMaxNextDays'},
        innerText: '9°',
        appendChild: '.containerDegressNextDays',

    },

    {
        elementType: 'p',
        attributes: {class:'degreesMinNextDays'},
        innerText: '16°',
        appendChild: '.containerDegressNextDays',

    },

    // childs svgWeatherNextDays

    {
        elementType: 'img',
        attributes: {class:'iconWeatherNextDays',src:'https://hatscripts.github.io/circle-flags/flags/ar.svg', width:'30'},
        appendChild: '.svgWeatherNextDays',

    },

]
let currentUnit = 'C';
let lastDataJson;
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

async function weatherData(latitude,longitude,cOF,forecastDays) {
    
    try {
        
        // const response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={${latitude}}&lon={${longitude}}&appid={2a4b5108a38fd94814fb633b7a60a70b}`, {mode: 'cors'});
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=b2845727c0964864b50235958232908&q=${latitude},${longitude}&days=3&aqi=no&alerts=no`, {mode: 'cors'});
        
        // const weatherData2 = await response2.json();
        const weatherData = await response.json();
        lastDataJson = weatherData;
        generateWeatherCardsHour(weatherData.forecast.forecastday[0].hour)
        generateWeatherCardsForecastDays(weatherData.forecast.forecastday)
        fillData(weatherData);
        addFunctionToBtnsCF();

        // console.log(weatherData.forecast.forecastday[0]);
        // console.log(weatherData.forecast.forecastday[0].hour[0].time.slice(-5));
        // console.log(weatherData2);

    } catch (error) {
        console.log(error);
    }
}

function generateCountryCards(arr) {
    
    
    delCards('searchCountryCards');

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
        cardSelected(`card${countryData.id}`)
        
    });

}

function delCards(clas) {
    
    const containerCards = document.querySelector(`.${clas}`);

    while (containerCards.firstChild) {
        containerCards.removeChild(containerCards.firstChild);
    }

}

function getLatAndLong(clas) {
    const card = document.querySelector(`.${clas}`);

    card.addEventListener('click', () => {
        countryLatAndLong.latitude = `${card.dataset.lat}`;
        countryLatAndLong.longitude = `${card.dataset.long}`;

    })

}

function cardSelected(clas) {
    
    const card = document.querySelector(`.${clas}`);
    const containerCountryFinder = document.querySelector('.containerCountryFinder');
    card.addEventListener('click', () => {
        
        EventManager.emit('deleteElement', containerCountryFinder)
        weatherData(countryLatAndLong.latitude,countryLatAndLong.longitude)

    })


}

function generateWeatherCardsHour(arr) {
    
    delCards('containerCardsWeather')

    arr.forEach(weatherData => {

        arrCardsWeather[0].attributes.class = `containerCard cardStyle card${weatherData.time_epoch}`;
        
        arrCardsWeather[1].innerText = `${weatherData.time.slice(-5)}`;
        
        arrCardsWeather[2].attributes.class = `svgWeather weather${weatherData.time_epoch}`;

        arrCardsWeather[4].attributes.src = `${weatherData.condition.icon}`;

        arrCardsWeather[4].attributes.src = `${weatherData.condition.icon}`;

        if (currentUnit === 'C') {
            
            arrCardsWeather[3].innerText = `${parseInt(weatherData.temp_c)}°C`;

        } else {
            arrCardsWeather[3].innerText = `${parseInt(weatherData.temp_f)}°F`;

        }
        // arrCardsWeather[3].innerText = `${parseInt(weatherData.temp_c)}°C`;
        // arrCardsWeather[3].innerText = `${parseInt(obtainData(lastDataJson,rute))}°${letter}`;

        arrCardsWeather[1].appendChild = `.card${weatherData.time_epoch}`;
        arrCardsWeather[2].appendChild = `.card${weatherData.time_epoch}`;
        arrCardsWeather[3].appendChild = `.card${weatherData.time_epoch}`;
        
        arrCardsWeather[4].appendChild = `.weather${weatherData.time_epoch}`;

        EventManager.emit('createElements', arrCardsWeather)


    })
    addScrollBoosterToCardsWeather();
}

function fillData(weatherData) {
    
    const titleWeather = document.querySelector('.titleWeather');
    const titleCity = document.querySelector('.titleCity');
    const containerDateAndTime = document.querySelector('.containerDateAndTime');
    const titleGrades = document.querySelector('.titleGrades');

    titleWeather.innerText = `${weatherData.current.condition.text}`;
    titleCity.innerText = `${weatherData.location.name}`;
    // titleGrades.innerText = `${parseInt(weatherData.current.temp_c)}°C`;
    if (currentUnit === 'C') {
        titleGrades.innerText = `${parseInt(weatherData.current.temp_c)}°C`;

    } else {
        titleGrades.innerText = `${parseInt(weatherData.current.temp_f)}°F`;

    }
    // titleGrades.innerText = `${parseInt(obtainData(weatherData,rute))}°${letter}`;
    containerDateAndTime.lastChild.innerText = `${weatherData.current.last_updated}`;


}

function generateWeatherCardsForecastDays(arr) {
    
    delCards('containerCardsNextDays')

    arr.forEach(weatherData => {

        arrCardsNextDays[0].attributes.class = `cardNextDays cardNextDays${weatherData.date_epoch}`;

        arrCardsNextDays[1].attributes.class = `svgWeatherNextDays svg${weatherData.date_epoch}`;

        arrCardsNextDays[2].attributes.class = `dateAndWeatherTitle dAWT${weatherData.date_epoch}`;

        arrCardsNextDays[3].attributes.class = `containerDegressNextDays containerDegress${weatherData.date_epoch}`;

        arrCardsNextDays[1].appendChild = `.cardNextDays${weatherData.date_epoch}`;
        arrCardsNextDays[2].appendChild = `.cardNextDays${weatherData.date_epoch}`;
        arrCardsNextDays[3].appendChild = `.cardNextDays${weatherData.date_epoch}`;

        
        let [year, month, day] = weatherData.date.split('-');
            
        let dateFormated = format(new Date(parseInt(year),parseInt(month) - 1,parseInt(day)), " EEEE, dd MMM") ;

        arrCardsNextDays[4].innerText = `${dateFormated}`;
            
        arrCardsNextDays[5].innerText = `${weatherData.day.condition.text}`;

        arrCardsNextDays[4].appendChild = `.dAWT${weatherData.date_epoch}`;
        arrCardsNextDays[5].appendChild = `.dAWT${weatherData.date_epoch}`;

        if (currentUnit === 'C') {
            arrCardsNextDays[6].innerText = `${parseInt(weatherData.day.maxtemp_c)}`;
            arrCardsNextDays[7].innerText = `${parseInt(weatherData.day.mintemp_c)}`;

        } else {
            arrCardsNextDays[6].innerText = `${parseInt(weatherData.day.maxtemp_f)}`;
            arrCardsNextDays[7].innerText = `${parseInt(weatherData.day.mintemp_f)}`;
        }

        // arrCardsNextDays[6].innerText = `${parseInt(obtainData(lastDataJson,rute))}`;
        // arrCardsNextDays[6].innerText = `${parseInt(weatherData.day.maxtemp_c)}`;
        // arrCardsNextDays[7].innerText = `${parseInt(weatherData.day.mintemp_c)}`;
        // arrCardsNextDays[7].innerText = `${parseInt(obtainData(lastDataJson,rute))}`;
            
        arrCardsNextDays[6].appendChild = `.containerDegress${weatherData.date_epoch}`;
        arrCardsNextDays[7].appendChild = `.containerDegress${weatherData.date_epoch}`;

        arrCardsNextDays[8].attributes.src = `${weatherData.day.condition.icon}`;

        arrCardsNextDays[8].appendChild = `.svg${weatherData.date_epoch}`;

        EventManager.emit('createElements', arrCardsNextDays)
        
    })

    


}

function addScrollBoosterToCardsWeather() {
    
    new ScrollBooster({
        viewport: document.querySelector('.outerCardsWeather'),
        content: document.querySelector('.containerCardsWeather'),
        scrollMode: 'transform', 
        direction: 'horizontal', 
        emulateScroll: true, 
      });

}

function convertTemperatureUnit() {

    generateWeatherCardsHour(lastDataJson.forecast.forecastday[0].hour)
    fillData(lastDataJson)
    generateWeatherCardsForecastDays(lastDataJson.forecast.forecastday)
   
}


function addFunctionToBtnsCF() {
    
    const containerCelcius = document.querySelector('.containerCelcius');
    const containerfahrenheit  = document.querySelector('.containerfahrenheit ');

    containerCelcius.addEventListener('click', () => {
        currentUnit = 'C';
        convertTemperatureUnit()
    
    })
    containerfahrenheit.addEventListener('click', () => {
        currentUnit = 'F';
        convertTemperatureUnit()
    })

}

export {arrCountryFinder,arrCountryCard, createCountrySearchElements}
