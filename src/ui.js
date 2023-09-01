import {EventManager} from './pubSub.js';

import createElementsDom from './domCreation.js';

// import anime from 'animejs/lib/anime.es.js';

function domElements(arr) {

    arr.forEach(elementObject => {
        
        createElementsDom(elementObject.elementType,elementObject.attributes,elementObject.innerHTML,elementObject.innerText,document.querySelector(elementObject.appendChild));
        
    });
   
}  

function init() {
    
    EventManager.on('createElements', domElements);

    EventManager.on('deleteElement', delElements);
    
    EventManager.on('animationEntry', animationEntry);
    
    EventManager.on('animationOut', animationOut);

    EventManager.on('transitionBgBtn', transitionBgBtn);
    
    EventManager.on('transitionBgBtn2', transitionBgBtn2);

    EventManager.on('transitionBgInput', transitionBgInput);

    EventManager.on('animationError', animationError);

    EventManager.on('transitionChangeTitle', transitionChangeTitle);

    EventManager.on('transitionGhostEntry', transitionGhostEntry);

    EventManager.on('transitionGhostOut', transitionGhostOut);

    EventManager.on('transitionOrganizeItems', transitionOrganizeItems);

    EventManager.on('transitionBtnClick', transitionBtnClick);

    EventManager.on('transitionScale', transitionHoverScale);

    EventManager.on('transitionHeight', transitionHeight);

    EventManager.on('transitionGhostEntryProjects', transitionGhostEntryProjects);

    EventManager.on('transitionProjectSelected', transitionProjectSelected);

    EventManager.on('transitionGhostOutTWAndEntry', transitionGhostOutTW);

    EventManager.on('fadeOutAndShrink', fadeOutAndShrink);
    
    EventManager.on('fadeInAndGrow', fadeInAndGrow);

    EventManager.on('fadeInAndSlideUp', fadeInAndSlideUp);

    EventManager.on('fadeOutAndSlideDown', fadeOutAndSlideDown);

    EventManager.on('projectAddedFlash', projectAddedFlash);

    EventManager.on('toggleSectionHighlight', toggleSectionHighlight);

    EventManager.on('fadeInDelayedDivs', fadeInDelayedDivs);

    EventManager.on('fadeOutDelayedDivs', fadeOutDelayedDivs);

    

}

function delElements(element) {
    
    element.remove();
}

function animationEntry(target) {
    
    anime({
        targets:target,
        opacity: [0,1],
        scale : [0,1],
        easing: 'easeOutExpo',
        duration: 250,
        direction: 'normal',
    })

}

function animationOut(target) {
    
    anime({
        targets:target,
        filter: 'blur(5px)',
        opacity: [1,0],
        scale : [1,.8],
        easing: 'easeOutExpo',
        duration: 300,
    })

}

function transitionBgBtn(arr) {
    
    

    arr[0].addEventListener('mouseover', (e) => {

        anime({
            targets:arr[0],
            backgroundColor: `${arr[2]}`,
            scale: [
                { value: 1, duration: 0 },
                { value: 1.1, duration: 300 }
            ],
            easing: 'easeOutExpo',
            duration: 200,
        })

    })

    arr[0].addEventListener('mouseout', () => {

        anime({
            targets:arr[0],
            backgroundColor: `${arr[1]}`,
            scale: [
                { value: 1.1, duration: 0 },
                { value: 1, duration: 300 }
            ],
            easing: 'easeOutExpo',
            duration: 300,
        })

    })

    
}

function transitionBgBtn2(arr) {
    
    

    arr.addEventListener('mouseover', () => {

        anime({
            targets:arr,
            filter:[{value: 'brightness(1)', duration:0},{value:'brightness(1.5)',duration: 400}],
            scale: [
                { value: 1, duration: 0 },
                { value: 1.08, duration: 400 }
            ],
            easing: 'easeOutExpo',
            duration: 200,
        })

    })

    arr.addEventListener('mouseout', () => {

        anime({
            targets:arr,
            filter:[{value: 'brightness(1.5)', duration:0},{value:'brightness(1)',duration: 400}],
            scale: [
                { value: 1.08, duration: 0 },
                { value: 1, duration: 400 }
            ],
            easing: 'easeOutExpo',
            duration: 200,
        })

    })

}

function transitionBgInput(arr) {
    
    

    arr.addEventListener('mouseover', (e) => {
        e.stopPropagation();
        anime({
            targets:arr,
            filter:[{value: 'brightness(1)', duration:0},{value:'brightness(1.5)',duration: 400}],
            easing: 'easeOutExpo',
            duration: 200,
        })

    })

    arr.addEventListener('mouseout', (e) => {
        e.stopPropagation();
        anime({
            targets:arr,
            filter:[{value: 'brightness(1.5)', duration:0},{value:'brightness(1)',duration: 400}],
            easing: 'easeOutExpo',
            duration: 200,
        })

    })


}

function animationError(target){
    
    anime({
        targets: target,
        translateX:[{value: 10,duration: 100},{value: -10,duration: 50},{value: 10,duration: 100},{value: -10,duration: 50},{value:0,duration: 200}],
        easing: 'easeOutExpo',
        duration: 300,
    })

}

function transitionChangeTitle(target) {
    
    anime({
        targets:target,
        translateY:[{value: -20,duration: 200},{value: 100,duration: 100},{value: -20,duration: 200},{value: 0,duration: 100}],
        opacity:[{value: 0,duration:500},{value: 1,duration:200}],
        easing: 'easeOutExpo',
        duration: 200,
    })

}

function transitionGhostEntry(target) {
    
    anime({
        targets:target,
        translateY:[{value: -10,duration: 200},{value: 0,duration: 300}],
        opacity:[{value: 1,duration:0},{value: 0,duration:400},{value: 1,duration:100}],
        easing: 'easeOutExpo',
        duration: 300,
    })

}
function transitionGhostOut(arr) {
    
    anime({
        targets:arr[0],
        translateY:[{value: -10,duration: 200}],
        opacity:[{value: 0,duration:200}],
        easing: 'easeOutExpo',
        duration: 200,
        complete: transitionOrganizeItems(),
    })

}

function transitionOrganizeItems() {
    
    
    const remainingItems = document.querySelectorAll('.TP');
    
    anime({
        targets: remainingItems,
        translateY: [{value: 0,duration: 100}],
        opacity: [{value: 0,duration: 300},{value: 1,duration: 200}],
        easing: 'easeInOutQuad',
        duration: 200,
        delay: function(target, index, total) {
            return index * 50;
        }
    });
        
        
        
   
}

function transitionGhostOutTW(arr) {

    anime({
        targets:arr[0],
        translateY:[{value: -10,duration: 200}],
        opacity:[{value: 0,duration:200}],
        easing: 'easeOutExpo',
        duration: 200,
        complete: transitionOrganizeItemsTW(),
    })
    
}

function transitionOrganizeItemsTW() {
    
    
    const remainingItems = document.querySelectorAll('.TW');
    
    anime({
        targets: remainingItems,
        translateY: [{value: 0,duration: 100}],
        opacity: [{value: 0,duration: 300},{value: 1,duration: 200}],
        easing: 'easeInOutQuad',
        duration: 200,
        delay: function(target, index, total) {
            return index * 50;
        }
    });
        
        
        
   
}

function transitionBtnClick(target) {

    anime({
        targets: target,
        scale: [{value: 1,duration: 100},{value: 1.1,duration: 100}],
        easing: 'easeInOutQuad',
        duration: 200,
    });
}

function transitionHoverScale(target) {

    target.addEventListener('mouseover', () => {

        anime({
            targets: target,
            scale: [{value: 1,duration: 100},{value: 1.1,duration: 200}],
            easing: 'easeInOutQuad',
            duration: 100,
        });

    })

    target.addEventListener('mouseout', () => {

        anime({
            targets:target,
            scale: [{value: 1.1,duration: 100},{value: 1,duration: 200}],
            easing: 'easeOutExpo',
            duration: 100,
        })

    })
}

function transitionHeight(target) {
    
    let height = target.offsetHeight;
    let newHeight = height + 37;
    anime({
        targets:target,
        height: [{value: `${newHeight}px`}],
        easing: 'easeOutExpo',
        duration: 200,
    })

}

function transitionGhostEntryProjects(target) {
    
    anime({
        targets:target,
        translateY:[{value: -10,duration: 200},{value: 0,duration: 300}],
        opacity:[{value: 0,duration:200},{value: 1,duration:100}],
        easing: 'easeOutExpo',
        duration: 300,
    })

}

function transitionProjectSelected(target) {
    
    anime({
        targets:target,
        outlineWidth: [{value: '10px',duration:100},{value: '5px',duration:50},{value: '3px',duration:100}],
        easing: 'easeOutExpo',
        duration: 250,
    })

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
        scale:1,
        opacity: 1,
        easing:'easeOutExpo',
        duration: 150,
    })

}

function fadeInAndSlideUp(target) {

    anime({
        targets: target,
        translateY: 30,
        opacity: 1,
        easing:'easeOutExpo',
        duration: 180,
    })

}

function fadeOutAndSlideDown(target) {

    anime({
        targets: target,
        translateY: 10,
        opacity: 0,
        easing:'easeOutExpo',
        duration: 180,
    })

}

function projectAddedFlash(color) {

    let pathSvgProjects = document.querySelector('.pathSvgProjects');
    let screenWidth;

    screenWidth = window.screen.availWidth;

    if (screenWidth <= 912) {

        pathSvgProjects.style.transition = 'stroke 0.4s';
        pathSvgProjects.style.stroke = `${color}`;
    
        setTimeout(() => {
            pathSvgProjects.style.stroke = '#FFFFFF';
        }, 400);
    }
    
    
}

function toggleSectionHighlight(arr) {
    
    anime({
        targets: arr[0],
        backgroundColor: hexToRgba(arr[1],0.3),
        easing:'easeOutExpo',
        duration: 150,
    })

    function hexToRgba(hex, alpha) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

      

}

function fadeInDelayedDivs() {
    
    const remainingItems = document.querySelectorAll('.itemDd');

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
function fadeOutDelayedDivs() {
    
    const remainingItems = document.querySelectorAll('.itemDd');

    anime({
        targets: remainingItems,
        scale: .8,
        opacity: 0,
        easing: 'easeInOutQuad',
        duration: 150,
        delay: function(target, index, total) {
            return index * 50;
        }
    });
}
export {init};