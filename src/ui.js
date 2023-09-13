import {EventManager} from './pubSub.js';
import createElementsDom from './domCreation.js';
import anime from 'animejs/lib/anime.es.js';

function init() {
    
    EventManager.on('createElements', domElements);

    EventManager.on('deleteElement', delElements);

    EventManager.on('transitionBgBtn', transitionBgBtn);
    
    EventManager.on('transitionBtnClick', transitionBtnClick);

    EventManager.on('fadeOutAndShrink', fadeOutAndShrink);
    
    EventManager.on('fadeInAndGrow', fadeInAndGrow);

    EventManager.on('fadeInDelayedDivs', fadeInDelayedDivs);

}

function domElements(arr) {

    arr.forEach(elementObject => {
        
        createElementsDom(elementObject.elementType,elementObject.attributes,elementObject.innerHTML,elementObject.innerText,document.querySelector(elementObject.appendChild));
        
    });
   
}  

function delElements(element) {
    
    element.remove();
}

function transitionBgBtn(arr) {
    
    

    arr[0].addEventListener('mouseover', (e) => {

        anime({
            targets:arr[0],
            scale: [
                { value: 1, duration: 0 },
                { value: 1.1, duration: 150 }
            ],
            easing: 'easeOutExpo',
            duration: 150,
        })

    })

    arr[0].addEventListener('mouseout', () => {

        anime({
            targets:arr[0],
            scale: [
                { value: 1.1, duration: 0 },
                { value: 1, duration: 150 }
            ],
            easing: 'easeOutExpo',
            duration: 150,
        })

    })

    
}

function transitionBtnClick(target) {

    anime({
        targets: target,
        scale: [{value: 1,duration: 100},{value: 1.1,duration: 100}],        
        easing: 'easeInOutQuad',
        duration: 150,
    });
}

function fadeOutAndShrink(target) {
    
    anime({
        targets: target,
        scale:.8,
        opacity: 0,
        easing:'easeOutExpo',
        duration: 150,
    })

}
function fadeInAndGrow(target) {
    
    anime({
        targets: target,
        opacity: 1,
        scale:[.8,1],
        easing:'easeOutExpo',
        duration: 150,
    })

}

function fadeInDelayedDivs(clas) {
    
    const remainingItems = document.querySelectorAll(`${clas}`);

    anime({
        targets: remainingItems,
        scale: 1,
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 150,
        delay: function(target, index, total) {
            return index * 50;
        }
    });
}

export {init};