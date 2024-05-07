let card = document.querySelectorAll(".text img")
let card1 = [".seven-one",".dol-one",".money-one",".almas-one",".cheren-one",]
let card2 = [".seven-two",".dol-two",".money-two",".almas-two",".cheren-two",]
let card3 = [".seven-three",".dol-three",".money-three",".almas-three",".cheren-three"]
let but = document.querySelector(".but")
let balanse =document.querySelector(".maney")
let attemp = 1000
let getRandom1 = card1[Math.floor(Math.random() * card1.length)]
let getRandom2 = card2[Math.floor(Math.random() * card2.length)]
let getRandom3 = card3[Math.floor(Math.random() * card3.length)]



document.querySelector(".but").onclick= function(){

    card.forEach(cardOne => cardOne.classList.remove("man"))

    getRandom1 = card1[Math.floor(Math.random() * card1.length)]
    getRandom2 = card2[Math.floor(Math.random() * card2.length)]
    getRandom3 = card3[Math.floor(Math.random() * card3.length)]
    console.log(getRandom1);
    console.log(getRandom2);
    console.log(getRandom3);
    attemp = attemp-250
    document.querySelector(".bal").innerHTML = attemp
   


    if(attemp > 250 || attemp == 250){
        
    
    
    
    document.querySelector(".but").disabled=true


    setTimeout(function(){
        document.querySelector(".but").disabled=false
    },1000
    )

    


if(getRandom1 == ".seven-one"){
    document.querySelector(".seven-one").classList.add("man")
}
if(getRandom1 == ".dol-one"){
    document.querySelector(".dol-one").classList.add("man")
}
if(getRandom1 == ".money-one"){
    document.querySelector(".money-one").classList.add("man")
}
if(getRandom1 == ".almas-one"){
    document.querySelector(".almas-one").classList.add("man")
}
if(getRandom1 == ".cheren-one"){
    document.querySelector(".cheren-one").classList.add("man")
}



if(getRandom2 == ".seven-two"){
    document.querySelector(".seven-two").classList.add("man")
}
if(getRandom2 == ".dol-two"){
    document.querySelector(".dol-two").classList.add("man")
}
if(getRandom2 == ".money-two"){
    document.querySelector(".money-two").classList.add("man")
}
if(getRandom2 == ".almas-two"){
    document.querySelector(".almas-two").classList.add("man")
}
if(getRandom2 == ".cheren-two"){
    document.querySelector(".cheren-two").classList.add("man")
}





if(getRandom3 == ".seven-three"){
    document.querySelector(".seven-three").classList.add("man")
}
if(getRandom3 == ".dol-three"){
    document.querySelector(".dol-three").classList.add("man")
}
if(getRandom3 == ".money-three"){
    document.querySelector(".money-three").classList.add("man")
}
 if(getRandom3 == ".almas-three"){
    document.querySelector(".almas-three").classList.add("man")
}
 if(getRandom3 == ".cheren-three"){
    document.querySelector(".cheren-three").classList.add("man")
}













if(getRandom1 == ".seven-one" && getRandom2 == ".seven-two" && getRandom3 == ".seven-three"){
    attemp = attemp+1000
    console.log('attemp');
}
if(getRandom1 == ".dol-one" && getRandom2 == ".dol-two" && getRandom3 == ".dol-three"){
    attemp = attemp+500
    console.log('attemp');
}
if(getRandom1 == ".money-one" && getRandom2 == ".money-two" && getRandom3 == ".money-three"){
    attemp = attemp+800
    console.log('attemp');
}
if(getRandom1 == ".almas-one" && getRandom2 == ".almas-two" && getRandom3 == ".almas-three"){
    attemp = attemp+600
    console.log('attemp');
    
}
if(getRandom1 == ".cheren-one" && getRandom2 == ".cheren-two" && getRandom3 == ".cheren-three"){
    attemp = attemp+900
    console.log('attemp');
}




if(getRandom1 == ".seven-one" && getRandom2 == ".seven-two" || getRandom3 == ".seven-three" && getRandom1 == ".seven-one" || getRandom2 == ".seven-two" && getRandom3 ==  ".seven-three"){
    attemp = attemp+400
    
}
if(getRandom1 == ".cheren-one" && getRandom2 == ".cheren-two" || getRandom3 == ".cheren-three" && getRandom1 == ".cheren-one" || getRandom2 == ".cheren-two" && getRandom3 ==  ".cheren-three"){
    attemp = attemp+200
    
}
if(getRandom1 == ".almas-one" && getRandom2 == ".almas-two" || getRandom3 == ".almas-three" && getRandom1 == ".almas-one" || getRandom2 == ".almas-two" && getRandom3 ==  ".almas-three"){
    attemp = attemp+250
    
}
if(getRandom1 == ".money-one" && getRandom2 == ".money-two" || getRandom3 == ".money-three" && getRandom1 == ".money-one" || getRandom2 == ".money-two" && getRandom3 ==  ".money-three"){
    attemp = attemp+150
    
}
if(getRandom1 == ".dol-one" && getRandom2 == ".dol-two" || getRandom3 == ".dol-three" && getRandom1 == ".dol-one" || getRandom2 == ".dol-two" && getRandom3 == ".dol-three"){
    attemp = attemp+100
    
}













}


else{
    if(attemp < 250){
        document.querySelector(".maney").innerHTML = "Вы проиграли"
        document.querySelector(".but").disabled=true

        win2("Начать новую игру?")
       
    }
    return null
}
    function win2(text){
             setTimeout(function(){
            alert(text)
            newGame()
        },1500
    )
}

function newGame(){
    location. reload() 
}

document.querySelector(".bal").innerHTML = attemp



}
















































