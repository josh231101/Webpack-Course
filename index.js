const Hero = require('./hero.js')

// create an html list object
var ul = document.createElement('ul')
// create a div tag
var div = document.createElement('div')
// we will loop through hero object and append a new li tag to the div for each property
for (var key in Hero) {
    let li = document.createElement('li')
    li.textContent = key + ' - ' + Hero[key]
    ul.appendChild(li)
}
//appendn the list to the div and then the div to the body of the document
div.appendChild(ul)
document.querySelector('body').appendChild(div)