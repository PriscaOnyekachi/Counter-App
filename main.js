
 alert('Welcome Onbaord');
 let savebtn = document.querySelector('#secondBtn');
 let count = document.querySelector('#count');
 let countEl = 0;

 console.log(savebtn)

 function increement () {
     countEl += 1
     count.innerText = countEl;
 }

 function save(){
     let countStr = countEl + " - "

     savebtn.innerText = countElString;
     count.textContent = 0;
     count = 0

     console.log(countEl)
 }