
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
        attributes: {class:'containerCountryCards'},
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
        attributes: {class:'conainerGps'},
        innerHTML:'<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1116 0z" stroke="#000000" stroke-width="1.5"></path><path d="M12 11a1 1 0 100-2 1 1 0 000 2z" fill="#000000" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        appendChild: '.searchBarAndGps',

    },



];

const testFlag = [

    {
        elementType: 'img',
        attributes: {class:'flagTest'},
        appendChild: '.containerDateAndTitleWeather',

    },

];

function flagT() {
    
    testFlag[0].attributes.src = 'https://hatscripts.github.io/circle-flags/flags/ar.svg';
    testFlag[0].attributes.width = '24';

    EventManager.emit('createElements', testFlag)

    
    

}

async function searchCity() {
    
    try {
        const resolve = fetch();

    } catch (error) {
        
    }


}


export {arrCountryFinder}
