import { EventManager } from './pubSub';
import { format } from 'date-fns';
import ScrollBooster from 'scrollbooster';

const arrCountryFinder = [

    {
        elementType: 'div',
        attributes: {class:'containerCountryFinder'},
        appendChild: '.containerMain',

    },


    // childs containerCountryFinder

    {
        elementType: 'div',
        attributes: {class:'titleAndSearchBar'},
        appendChild: '.containerCountryFinder',

    },

    {
        elementType: 'div',
        attributes: {class:'outerSearchCountryCards'},
        appendChild: '.containerCountryFinder',

    },

    {
        elementType: 'div',
        attributes: {class:'searchCountryCards'},
        appendChild: '.outerSearchCountryCards',

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
        innerHTML: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
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
const loader = [
    {
        elementType: 'div',
        attributes: {class:'showbox'},
        appendChild: '.searchCountryCards',

    },
    {
        elementType: 'div',
        attributes: {class:'loader'},
        innerHTML:'<svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg>',
        appendChild: '.showbox',

    },
];

const weatherConditionCodes = [
	{   
        
        codes: [1000,],
        urlImg: 'https://s6.imgcdn.dev/O4J9w.jpg',
    },

	{   
        
        codes: [1003,1006,1009,1030,1066,1072,1114,1117,1135,1147,1150,1204,1207,1210,1213,1216,1219,1222,1225,1237,1255,1258,1261,1264],
        urlImg: 'https://s6.imgcdn.dev/OCDkT.jpg',
    },

	{   
        
        codes: [1063,1069,1087,1153,1168,1171,1183,1186,1189,1192,1195,1198,1201,1240,1243,1246,1249,1252,1273,1276,1279,1282],
        urlImg: 'https://s6.imgcdn.dev/O48Pa.jpg',
    }
];

const containerCardsWeatherMobile = [

    {
        elementType: 'div',
        attributes: {class:'outerCardsWeatherMobile'},
        appendChild: '.containerRight',

    },
    {
        elementType: 'div',
        attributes: {class:'containerCardsWeatherMobile'},
        appendChild: '.outerCardsWeatherMobile',

    },
];

const containerDateAndTimeMobile = [

    {
        elementType: 'div',
        attributes: {class:'containerDateAndTimeMobile'},
        appendChild: '.containerRight',

    },

    {
        elementType: 'p',
        attributes: {class:'lastUpdated'},
        innerText: 'Last updated',
        appendChild: '.containerDateAndTimeMobile',

    },

    {
        elementType: 'p',
        attributes: {class:'date'},
        innerText: '11:00',
        appendChild: '.containerDateAndTimeMobile',
    },
]

let currentUnit = 'C';
let lastDataJson;
let countryCode;
let count = 0;


function createCountrySearchElements() {
    const svgUbication = document.querySelector('.svgUbication');

    let arrColorAndBtn1 = [svgUbication];
    EventManager.emit('transitionBgBtn',arrColorAndBtn1)

    svgUbication.addEventListener('click', (e) => {
        e.stopPropagation();       
    
        EventManager.emit('transitionBtnClick', '.svgUbication')

        const containerCountryFinder = document.querySelector('.containerCountryFinder');

        if (!containerCountryFinder) {
            EventManager.emit('createElements', arrCountryFinder)
            EventManager.emit('fadeInAndGrow','.containerCountryFinder')
            inputCountry();
            closeCountryFinder();
            getUbication();

        }
    })
}

function inputCountry() {

    const searchBar = document.querySelector('.searchBar')

    searchBar.addEventListener('keyup', (e => {
        
        let test = e.target;
        const loaderElement = document.querySelector('.showbox');
        if (!loaderElement) {
            delCards('searchCountryCards');
            createLoader('searchCountryCards');
        }
        searchCountry(test.value)

    }))
}

async function searchCountry(searchData) {

    try {
        const response1 = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchData}&count=10&language=en&format=json`, {mode: 'cors'});

        

        const countryData = await response1.json();

        if (response1.ok) {

            const loaderElement = document.querySelector('.showbox');

            if (loaderElement) {
                EventManager.emit('deleteElement', loaderElement)
            }
        }

        generateCountryCards(countryData.results);

        EventManager.emit('fadeInDelayedDivs','.containerSearchCard')

    } catch (error) {

    }
   


}

async function weatherData(latitude,longitude) {
    
    try {
        
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=b2845727c0964864b50235958232908&q=${latitude},${longitude}&days=3&aqi=no&alerts=no`, {mode: 'cors'});
        
        const weatherData = await response.json();

        const response1 = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${weatherData.location.name}&count=1&language=en&format=json`, {mode: 'cors'});

        const countryData = await response1.json();

        countryCode = countryData.results[0].country_code.toLowerCase();
        lastDataJson = weatherData;

        if (response.ok) {

            const loaderElement = document.querySelector('.showbox');

            if (loaderElement) {
                EventManager.emit('deleteElement', loaderElement)
                const loaderElement2 = document.querySelector('.showbox');
                EventManager.emit('deleteElement', loaderElement2)
            }
        }
        setBackgroundImg(weatherData.current.condition.code);
        const outerCardsWeatherMobile = document.querySelector('.outerCardsWeatherMobile');
        if (outerCardsWeatherMobile) {
            generateWeatherCardsHour(weatherData.forecast.forecastday[0].hour,'containerCardsWeatherMobile')
        }else{
            generateWeatherCardsHour(weatherData.forecast.forecastday[0].hour,'containerCardsWeather')            
        }
        EventManager.emit('fadeInDelayedDivs','.cardStyle')
        generateWeatherCardsForecastDays(weatherData.forecast.forecastday)
        EventManager.emit('fadeInDelayedDivs','.cardNextDays')
        fillData(weatherData);
        addFunctionToBtnsCF();

    } catch (error) {
        console.log(error);
    }
}

function generateCountryCards(arr) {
    
    delCards('searchCountryCards');
    arr.forEach(countryData => {
        
        let codeCLowerCase = countryData.country_code.toLowerCase();

        arrCountryCard[0].attributes.id = `${countryData.id}`;

        arrCountryCard[0].attributes['data-lat'] = `${countryData.latitude}`;
        arrCountryCard[0].attributes['data-long'] = `${countryData.longitude}`;
        arrCountryCard[0].attributes['data-codeC'] = `${countryData.country_code.toLowerCase()}`;

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
    addScrollBoosterToCardsCountry();
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
    const containerCelcius = document.querySelector('.containerCelcius');

    card.addEventListener('click', () => {

        countryCode = card.dataset.codec;
        EventManager.emit('fadeOutAndShrink', '.containerCountryFinder')
        setTimeout(() => {
            EventManager.emit('deleteElement', containerCountryFinder)
            
        }, 151);
        delCards('containerCardsWeather')
        delCards('containerCardsNextDays')

        createLoader('outerCardsWeather')
        createLoader('containerCardsNextDays')
        weatherData(countryLatAndLong.latitude,countryLatAndLong.longitude)
        containerCelcius.classList.add('selected')
    })


}

function generateWeatherCardsHour(arr,append) {

    const outerCardsWeatherMobile = document.querySelector('.outerCardsWeatherMobile');

    if (outerCardsWeatherMobile) {
        delCards('containerCardsWeatherMobile')
    }else{
        delCards('containerCardsWeather')
    }

    arr.forEach(weatherData => {

        arrCardsWeather[0].attributes.class = `containerCard cardStyle card${weatherData.time_epoch}`;
        arrCardsWeather[0].appendChild = `.${append}`;
        
        arrCardsWeather[1].innerText = `${weatherData.time.slice(-5)}`;
        
        arrCardsWeather[2].attributes.class = `svgWeather weather${weatherData.time_epoch}`;

        arrCardsWeather[4].attributes.src = `${weatherData.condition.icon}`;

        arrCardsWeather[4].attributes.src = `${weatherData.condition.icon}`;

        if (currentUnit === 'C') {
            
            arrCardsWeather[3].innerText = `${parseInt(weatherData.temp_c)}°`;

        } else {
            arrCardsWeather[3].innerText = `${parseInt(weatherData.temp_f)}°`;

        }

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
    const countryFlag = document.querySelector('.countryFlag');
    const containerDateAndTimeMobile = document.querySelector('.containerDateAndTimeMobile');


    titleWeather.innerText = `${weatherData.current.condition.text}`;
    countryFlag.src = `https://hatscripts.github.io/circle-flags/flags/${countryCode}.svg`;
    titleCity.innerText = `${weatherData.location.name}`;
    
    if (currentUnit === 'C') {
        titleGrades.innerText = `${parseInt(weatherData.current.temp_c)}°C`;

    } else {
        titleGrades.innerText = `${parseInt(weatherData.current.temp_f)}°F`;

    }

    if (containerDateAndTimeMobile) {
        containerDateAndTimeMobile.lastChild.innerText = `${weatherData.current.last_updated}`;        
    }else{
        containerDateAndTime.lastChild.innerText = `${weatherData.current.last_updated}`;     
    }


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
            arrCardsNextDays[6].innerText = `${parseInt(weatherData.day.maxtemp_c)}°`;
            arrCardsNextDays[7].innerText = `${parseInt(weatherData.day.mintemp_c)}°`;

        } else {
            arrCardsNextDays[6].innerText = `${parseInt(weatherData.day.maxtemp_f)}°`;
            arrCardsNextDays[7].innerText = `${parseInt(weatherData.day.mintemp_f)}°`;
        }
            
        arrCardsNextDays[6].appendChild = `.containerDegress${weatherData.date_epoch}`;
        arrCardsNextDays[7].appendChild = `.containerDegress${weatherData.date_epoch}`;

        arrCardsNextDays[8].attributes.src = `${weatherData.day.condition.icon}`;

        arrCardsNextDays[8].appendChild = `.svg${weatherData.date_epoch}`;

        EventManager.emit('createElements', arrCardsNextDays)
        
    })

    


}

function addScrollBoosterToCardsWeather() {
    const outerCardsWeatherMobile = document.querySelector('.outerCardsWeatherMobile');
    const outerCardsWeather = document.querySelector('.outerCardsWeather');

    let clas1 = 'outerCardsWeather';
    let clas2 = 'containerCardsWeather';

    if (outerCardsWeather) {
        clas1 = 'outerCardsWeather';
        clas2 = 'containerCardsWeather';
    }
    if (outerCardsWeatherMobile && outerCardsWeather) {
        clas1 = 'outerCardsWeatherMobile';
        clas2 = 'containerCardsWeatherMobile';
    }
    new ScrollBooster({
        viewport: document.querySelector(`.${clas1}`),
        content: document.querySelector(`.${clas2}`),
        scrollMode: 'transform', 
        direction: 'horizontal', 
        emulateScroll: true, 
    });

}

function addScrollBoosterToCardsCountry() {
    

    new ScrollBooster({
        viewport: document.querySelector(`.outerSearchCountryCards`),
        content: document.querySelector('.searchCountryCards'),
        scrollMode: 'transform', 
        direction: 'vertical', 
        emulateScroll: true, 
        bounce:true,
        pointerMode: 'touch',
        lockScrollOnDragDirection: 'vertical',
    });
}

function convertTemperatureUnit() {


    const outerCardsWeatherMobile = document.querySelector('.outerCardsWeatherMobile');

    if (outerCardsWeatherMobile) {
        generateWeatherCardsHour(lastDataJson.forecast.forecastday[0].hour,'containerCardsWeatherMobile')
    }else{
        generateWeatherCardsHour(lastDataJson.forecast.forecastday[0].hour,'containerCardsWeather')            
    }
    EventManager.emit('fadeInDelayedDivs','.cardStyle')
    fillData(lastDataJson)
    generateWeatherCardsForecastDays(lastDataJson.forecast.forecastday)
    EventManager.emit('fadeInDelayedDivs','.cardNextDays')

   
}

function addFunctionToBtnsCF() {
    
    const containerCelcius = document.querySelector('.containerCelcius');
    const containerfahrenheit  = document.querySelector('.containerfahrenheit ');

    containerCelcius.addEventListener('click', () => {

        containerfahrenheit.classList.remove('selected')
        containerCelcius.classList.add('selected')
        currentUnit = 'C';
        convertTemperatureUnit()
    
    })
    containerfahrenheit.addEventListener('click', () => {

        
        containerCelcius.classList.remove('selected')
        containerfahrenheit.classList.add('selected')
        currentUnit = 'F';
        convertTemperatureUnit()
    })

}

function closeCountryFinder() {
    

    document.addEventListener('click', (e) => {

        const countryFinder = document.querySelector(`.containerCountryFinder`);
        let target = e.target;

        if (countryFinder && !countryFinder.contains(target)) {
            
            EventManager.emit('fadeOutAndShrink', '.containerCountryFinder')
            setTimeout(() => {
                EventManager.emit('deleteElement', countryFinder)
                
            }, 151);

        }
    })
    
}

function createLoader(appen) {
    loader[0].appendChild = `.${appen}`;
    loader[0].attributes.class = `showbox box${count}`;
    loader[1].appendChild = `.box${count}`;
    count++;

    EventManager.emit('createElements', loader)

}

function getUbication() {
    

    const containerGps = document.querySelector('.containerGps');
    const containerCelcius = document.querySelector('.containerCelcius');

    containerGps.addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition((position) => {

            EventManager.emit('fadeOutAndShrink', '.containerCountryFinder')

            delCards('containerCardsWeather')
            delCards('containerCardsNextDays')

            createLoader('outerCardsWeather')
            createLoader('containerCardsNextDays')
            weatherData(position.coords.latitude, position.coords.longitude)
            containerCelcius.classList.add('selected')
        })    
    })
    
}

function setBackgroundImg(code) {
    
    const containerMain = document.querySelector('.containerMain');

    weatherConditionCodes.forEach(obj => {

        obj.codes.forEach( codeCondition => {

            if (codeCondition === code) {
                containerMain.style.backgroundImage = `url(${obj.urlImg})`;
            }
        })
    })

}

function handleResize() {
    

    const screenWidth = window.innerWidth;
    const outerCardsWeather = document.querySelector('.outerCardsWeatherMobile');
    const containerDateAndTimeMobileD = document.querySelector('.containerDateAndTimeMobile');
    const containerDateAndTime = document.querySelector('.containerDateAndTime');

    if (screenWidth <= 805) {

        if (!outerCardsWeather) {

            delCards('containerCardsWeather')

            EventManager.emit('createElements', containerCardsWeatherMobile)
            EventManager.emit('createElements', containerDateAndTimeMobile)
            const containerDateAndTimeMobileD = document.querySelector('.containerDateAndTimeMobile');

            if (lastDataJson) {
                containerDateAndTimeMobileD.lastChild.innerText = `${lastDataJson.current.last_updated}`;        
                generateWeatherCardsHour(lastDataJson.forecast.forecastday[0].hour,'containerCardsWeatherMobile')
                EventManager.emit('fadeInDelayedDivs','.cardStyle')
            }
            
        
        }
        
    }else{
        if (outerCardsWeather) {
            EventManager.emit('deleteElement', outerCardsWeather)           
            EventManager.emit('deleteElement', containerDateAndTimeMobileD)

            if (lastDataJson) {
                containerDateAndTime.lastChild.innerText = `${lastDataJson.current.last_updated}`;     
                generateWeatherCardsHour(lastDataJson.forecast.forecastday[0].hour,'containerCardsWeather')
                EventManager.emit('fadeInDelayedDivs','.cardStyle')
            }
           
        }
    }


}
export {arrCountryFinder,arrCountryCard, createCountrySearchElements,handleResize}
