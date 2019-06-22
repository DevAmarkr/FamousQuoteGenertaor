let randomQuoteBoxHanlde = document.getElementById('randomQuoteBox')
let localquoteHandle = document.getElementById('localquote')
let savingTagHandle = document.getElementById('savingTag')
let showingQuote = document.getElementById('showingQuote');
let btnHandle = document.getElementById('randomQouteBtn');
let titlebody = document.getElementById('titlebody');
let savedIcon = document.getElementById('savedIcon');
let savingTag = document.getElementById('savingTag')
let qfaHandle = document.getElementById('qfa');
let qflHandle = document.getElementById('qfl')
let boxHandle = document.getElementById('box');
let saveHandle = document.getElementById('save');
let ayqHandle = document.getElementById('Ayq');
let formBoxHandle = document.getElementById('formBox')
let submitbtnHandle =document.getElementById('submitbtn');
let areahandle = document.getElementById('area');
let authorHandle = document.getElementById('author');



// defining undefined variable globally
let dataObject='';//for storing object of fetchd data;
let outcome ='';
let savingData =[];//pushing new data into this variable
let parseSavingDatas;//collecting parse data.
let result="";
let localData;
let displayData = "";

// when page load onload function run

window.onload = function(){
  boxHandle.style.display ="none";
   savedIcon.style.display ="none";
   formBoxHandle.style.display ="none";
   localquoteHandle.style.display ="none"

}

//------------------version 1----------------//

// event listener for links

qfaHandle.addEventListener('click', qfaload);

function qfaload(){
 boxHandle.style.display ="block"
 // randomQuoteBoxHanlde.style.display ="none"!important;
 randomQuoteBox.textContent = "Seeking for motivation? Here's your answer..."
 titlebody.style.display ="none";
 localquoteHandle.style.display ="none";
 formBoxHandle.style.display ="none"

}

//----------------loading quote---------------//

randomQouteBtn.addEventListener('click',generateCode);
 function generateCode(){
   saveHandle.textContent ="save";
    saveHandle.style.color ="black"
     savingTagHandle.style.color ="black"
      savingTagHandle.disabled =false;
       randomQouteBtn.textContent ="Next>>>"
        randomQuoteBoxHanlde.style.display ="block";
         savedIcon.style.display ="block"
  axios.get('https://api.quotable.io/random')
    .then((res) => {
      outcome= `<em>Be Motivated or Be a Motivator</em>`
       outcome  += `<h3 id="showingQuote">
             “${res.data.content}” <br> <b>Author:-${res.data.author}
              </h3>`
randomQuoteBoxHanlde.innerHTML = outcome;
 dataObject = {
 quote:res.data.content,
 author:res.data.author
   }
})
}

//saving data into local storage

savingTag.addEventListener('click',saveToLocal)
var myquote 
function saveToLocal(){
  console.log(dataObject)
   savingData = localStorage.getItem("content") ? JSON.parse(localStorage.getItem("content")) : [];
   let result =  savingData.find((motivation=>motivation.quote === dataObject.quote))
if(!result){
     alert("you can save this data")
    savingData.push(dataObject)
    myquote =  localStorage.setItem("content",JSON.stringify( savingData))
    console.log(myquote)

      saveHandle.textContent ="Done";
      saveHandle.style.color ="green"
      savingTagHandle.style.color ="red"
      savingTagHandle.disabled =true;
  
}else{
  alert("See your storage you have already ")
}
// // listLocal()
}

//-----------------------------------version3--------------------------//
//showing quote from localstorage
var  localContent;
var  localAuthor ;
qflHandle.addEventListener("click" ,listLocal)

function listLocal(e){
  localquoteHandle.style.display ="block"
  boxHandle.style.display ="none";
  titlebody.style.display ="none";
  savedIcon.style.display ="none";
  displaySavedQuote()
}

function displaySavedQuote(){
  localData = JSON.parse(localStorage.getItem("content"));
  if(!localData){
       displayData += `<h1 class ="noquote">No Quote</h1>`
       localquoteHandle.innerHTML = displayData;
  }else{
       localData.forEach( (data,i) =>{
       let noquote = document.querySelector('.noquote')
       localContent = data.quote;
       localAuthor  = data.author;
       displayData += `<ul class ="localItem">
                        <li>
                          <h3 class ="localText"> ${localContent}<b>Author-:${localAuthor}</h3></li>
                            <a  onclick ="deleteItem(localContent)">Delete</a>
                            <a id ="edit" onclick = "EditHandler()" href ="#">Edit</a>
                     </ul>  `
      }) 
       localquoteHandle.innerHTML = displayData;
     }
}


//----------------------delete---------------//
function deleteItem(quote){
  console.log(quote)
}

//
//------------------add Quote------------------//



ayqHandle.addEventListener("click",function(e){
  boxHandle.style.display ="none";
   savedIcon.style.display ="none";
    titlebody.style.display ="none";
    localquoteHandle.style.display ="none";
    formBoxHandle.style.display ="block"
})














































// submitbtnHandle.addEventListener("click",Addquote)
// function Addquote(){

//    var inputData = {
//      quote:areahandle.value,
//      author:authorHandle.value
//    }


//    savingData = localStorage.getItem("QuoteKey") ? JSON.parse(localStorage.getItem("QuoteKey")) : [];
//     savingData.find(function(data){
//      result = data.quote === inputData.quote;
//       });
// if(!result){
//   console.log("you can save this data")
//    parseSavingDatas = localStorage.getItem("QuoteKey") ? JSON.parse(localStorage.getItem("QuoteKey")) : [];
//     parseSavingDatas.push(inputData)
//      localStorage.setItem("QuoteKey",JSON.stringify( parseSavingDatas))
//       console.log(parseSavingDatas);
// }else{
//   alert("See your storage you have already ");
// }

//   e.preventDefault();
// }




  // console.log(myStorage)
  // let findQuote = myStorage.find((storage,index)=>{
  //      return storage.quote === transQuote
  // })
  // for(var i =0; i<myStorage.length; i++){
  //  if(myStorage[i].quote == transQuote){
  //      myStorage.splice(i,1);
  //   }
  // }
  // localStorage.setItem("QuoteKey",JSON.stringify( parseSavingDatas))
  // // listLocal();


// let myStorage;

// let edits = document.getElementById("edit")
// function EditHandler(QuoteKey) {
// myStorage =JSON.parse(localStorage.getItem('QuoteKey'));
// let item = myStorage.findIndex((storage)=> storage.quote === QuoteKey  );
//     console.log(item)
       

// }