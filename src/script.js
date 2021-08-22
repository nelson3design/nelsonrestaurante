const fix=document.querySelector('.nav')
const topNav=fix.offsetTop

window.onscroll=function(){
    fixMenuToTop()
}
const fixMenuToTop=()=>{
    if(window.pageYOffset >= topNav){
        fix.classList.add('fixMenu')
       
    }else{
     fix.classList.remove('fixMenu')
    }
}






const icon = document.getElementById('icon');

icon.addEventListener('click', () => {
    document.body.classList.toggle('bouton');

});


const icon2 = document.getElementById('icon2');
const icon3 = document.querySelector('.fa.fa-search'); 
icon2.addEventListener('click', (icon3) => {
    document.body.classList.toggle('bouton2');
    icon3.target.classList.toggle("fa-times");
    icon3.target.classList.toggle("fa fa-search");

})



var item1= document.querySelector('.item1')
var items= document.querySelector('.items')

var img= document.querySelector('.image')

var prix= document.querySelector('.prix')


var Breakfast= document.querySelector('.Breakfast')
 items.style.overflow='unset'
Breakfast.style.background = "white"
Breakfast.addEventListener('click',()=>{
    if(item1.classList.contains('show')){
    item1.classList.remove('show')

           Lunch.classList.remove('none')
           Dinner.classList.remove('none')
           Dessert.classList.remove('none')

      Breakfast.style.color='black'
      Breakfast.style.background = "white"
      Breakfast.style.borderColor = "black"
       items.style.overflow='unset'
    }else{
        item1.classList.toggle('show')

         Lunch.classList.add('none')
          Dinner.classList.add('none')
           Dessert.classList.add('none')

        prix.innerHTML='$20'
      
       img.style.width='100%'
       img.style.height='100%'
       img.style.backgroundImage='url(4.jpg)'
        img.style.backgroundSize='cover'
    
       
        items.style.overflow='hidden'
         Breakfast.style.color='white'
         Breakfast.style.background = "#1492E6"
         Breakfast.style.borderColor = "white"

          Lunch.style.color='black'
      Lunch.style.background = "white"
      Lunch.style.borderColor = "black"

      

             Dinner.style.color='black'
      Dinner.style.background = "white"
      Dinner.style.borderColor = "black"

      Dessert.style.color='black'
      Dessert.style.background = "white"
      Dessert.style.borderColor = "black"
     
    }
})


var Lunch= document.querySelector('.Lunch')

Lunch.style.background = "white"

Lunch.addEventListener('click',()=>{
    if(item1.classList.contains('show')){
    item1.classList.remove('show')

    Breakfast.classList.remove('none')
          Dinner.classList.remove('none')
           Dessert.classList.remove('none')
    item1.style.marginTop='0px'
     item1.style.paddingTop='0px'
      Lunch.style.color='black'
      Lunch.style.background = "white"
      Lunch.style.borderColor = "black"
    }else{

        item1.classList.add('show')

         Breakfast.classList.add('none')
          Dinner.classList.add('none')
           Dessert.classList.add('none')

         prix.innerHTML='$25'

        img.style.width='100%'
       img.style.height='100%'
       img.style.backgroundImage='url(16.jpg)'
        img.style.backgroundSize='cover'


         Lunch.style.color='white'
         Lunch.style.background = "#1492E6"
         Lunch.style.borderColor = "white"
        
         Breakfast.style.color='black'
         Breakfast.style.background = "white"
        Breakfast.style.borderColor = "black"

        Dinner.style.color='black'
      Dinner.style.background = "white"
      Dinner.style.borderColor = "black"

      Dessert.style.color='black'
      Dessert.style.background = "white"
      Dessert.style.borderColor = "black"
         
    }
})

var Dinner= document.querySelector('.Dinner')

Dinner.style.background = "white"
Dinner.addEventListener('click',()=>{
    if(item1.classList.contains('show')){
    item1.classList.remove('show')

    Breakfast.classList.remove('none')
          Lunch.classList.remove('none')
           Dessert.classList.remove('none')

    item1.style.marginTop='0px'
     Dinner.style.paddingTop='0px'
      Dinner.style.color='black'
      Dinner.style.background = "white"
      Dinner.style.borderColor = "black"
    }else{

        item1.classList.add('show')

         Breakfast.classList.add('none')
          Lunch.classList.add('none')
           Dessert.classList.add('none')

         prix.innerHTML='$30'
        img.style.width='100%'
       img.style.height='100%'
       img.style.backgroundImage='url(12.jpg)'
        img.style.backgroundSize='cover'

      
         Dinner.style.color='white'
         Dinner.style.background = "#1492E6"
         Dinner.style.borderColor = "white"

           
         Breakfast.style.color='black'
         Breakfast.style.background = "white"
        Breakfast.style.borderColor = "black"

             Lunch.style.color='black'
      Lunch.style.background = "white"
      Lunch.style.borderColor = "black"


      Dessert.style.color='black'
      Dessert.style.background = "white"
      Dessert.style.borderColor = "black"
         
    }
})

var Dessert= document.querySelector('.Dessert')

Dessert.style.background = "white"
Dessert.addEventListener('click',()=>{
    if(item1.classList.contains('show')){
    item1.classList.remove('show')
     Breakfast.classList.remove('none')
          Lunch.classList.remove('none')
           Dinner.classList.remove('none')
    item1.style.marginTop='0px'
     item1.style.paddingTop='0px'
      Dessert.style.color='black'
      Dessert.style.background = "white"
      Dessert.style.borderColor = "black"
    }else{

        item1.classList.add('show')

        Breakfast.classList.add('none')
          Lunch.classList.add('none')
           Dinner.classList.add('none')
           
         prix.innerHTML='$35'

        img.style.width='100%'
       img.style.height='100%'
       img.style.backgroundImage='url(7.jpg)'
        img.style.backgroundSize='cover'

       
         Dessert.style.color='white'
         Dessert.style.background = "#1492E6"
         Dessert.style.borderColor = "white"

              
         Breakfast.style.color='black'
         Breakfast.style.background = "white"
        Breakfast.style.borderColor = "black"

             Lunch.style.color='black'
      Lunch.style.background = "white"
      Lunch.style.borderColor = "black"

      Dinner.style.color='black'
      Dinner.style.background = "white"
      Dinner.style.borderColor = "black"


         
    }
})

var cart=document.querySelector('.cart')
var cart2=document.querySelector('.cart2')

var cartPlus=document.querySelector('.cartPlus')

cartPlus.addEventListener('click',()=>{
    
 
        cart.innerHTML=" "+1
      
    
    
  cart.style.color='blue'
  cart2.style.color='yellow'
  
})

const data=document.querySelector('.data')
const dataBase= new Date()
var finalData=dataBase.getFullYear()
data.innerHTML=finalData
