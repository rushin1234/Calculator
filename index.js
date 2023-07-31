let btns=document.querySelectorAll('.btn');
let input=document.getElementById('input')
let string=""
btns=Array.from(btns)
btns.forEach((i)=>{
    i.addEventListener('click',function(e){
    if(e.target.innerHTML=='C'){
        string=""
        input.value = string
    }else if(e.target.innerHTML=='='){
        string=eval(string)
        input.value = string
    }
    else{
        string+=e.target.innerHTML
        input.value = string
    }
    })
})


document.querySelector('#start').addEventListener('click',function(){
    document.querySelectorAll('.container')[0].classList.toggle('click')
    if(this.innerHTML=="Stop Calculating"){
        this.innerHTML="Start Calculating"
    }else{
        this.innerHTML="Stop Calculating"
    }
})
