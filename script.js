const stars = document.querySelectorAll('.stars')
const countValue = document.querySelector('.countValue')

function handleFocus(e){
    //as cleaup works when mouse goes outside of whole stars container but this will work when mouse gooes horizontally or say when mouse is between the stars
    if(e.target.className === 'stars'){
    
    removeColor()
}
const className = e.target.className.slice(6, 11)
const classNo = className[className.length-1];


// as if its empty we dont want color to add
if(className){  
addColor(classNo)
}
}

function removeColor(data){
    for (let index = 1; index <= 5; index++){
        stars[index].style.color = ''
  }
}

function addColor(classNo){
    for (let index = 1; index <= classNo; index++){
        stars[index].style.color = 'yellow'
  }

}

function handleClick(e){
    const className = e.target.className.slice(6, 11)
const classNo = className[className.length-1];

if(classNo){
    countValue.innerHTML = classNo
}


}

