const hamb=document.getElementById('hamburger')
const navMenu=document.getElementById('nav-menu')
const closeMenu=document.getElementById('nav-close')
const navLink=document.querySelectorAll('.nav__link')
hamb.addEventListener("click",()=>{
navMenu.classList.remove('hidden')
})
closeMenu.addEventListener("click",()=>{
    navMenu.classList.add('hidden')
})

navLink.forEach(element => {
    element.addEventListener("click",()=>{
        navMenu.classList.add('hidden')
    })
});

const tabs=document.querySelectorAll('.tabs_wrap ul li')
const all=document.querySelectorAll('.item_wrap')
const food=document.querySelectorAll('.food')
const snacks=document.querySelectorAll('.snacks')
const beverage=document.querySelectorAll('.beverage')

tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
        tabs.forEach(tab=>{
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        const tabVals=tab.getAttribute('data-tabs');
        console.log(tabVals);
        all.forEach(item=>{
            item.style.display='none'
        })
        if(tabVals=='food'){
            console.log('yes food');
            food.forEach(item=>{
                item.style.display='block'
            })
        }
        else if(tabVals=='snacks'){
            snacks.forEach(item=>{
                item.style.display='block'
            })
        }
        else if(tabVals=='beverage'){
            beverage.forEach(item=>{
                item.style.display='block'
            })
        }
        else if(tabVals=='all'){
            all.forEach(item=>{
                item.style.display='block'
            })
        }
    })
})

const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
