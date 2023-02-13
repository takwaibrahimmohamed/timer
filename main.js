let start = document.querySelector('.start')
let stop = document.querySelector('.stop')
let reset = document.querySelector('.reset')
let hour=document.querySelector('.hour')
let sec= document.querySelector(".sec")
let min = document.querySelector('.min')
let h =0
let s = 1
let m = 1
let timer
start.addEventListener(('click'),()=>{
    startt();
})
reset.addEventListener(('click'),()=>{
   h=0
   s=0
   m=0
   console.log('fffff')
   hour.innerHTML = `0${h}`
   sec.innerHTML=`0${s}`
   min.innerHTML=`0${m}`
  console.log(h)
})
stop.addEventListener(('click'),()=>{
    clearInterval(timer)
})

function startt(){
    let h =0
let s = 1
let m = 1
    timer = setInterval(() => {
                m = (m<10)?`0${m}`:m
                min.innerHTML = m
                m++
                if(m==60){
                    s = (s<10)?`0${s}`:s
                    sec.innerHTML = s
                    s++
                   
                m=0
                }
                else if(s==60){
                    h = (h<10)?`0${h}`:h
                    hour.innerHTML = h
                    h++
                    s=0
                }
       
        
        
      }, 100);
     
      
}