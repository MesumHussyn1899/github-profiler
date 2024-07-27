let searchinput = document.getElementById('search_input');
let btn = document.getElementById('btn');
let card= document.getElementById('card');

function getdata(){
if(searchinput.value.trim() === ""){
  alert("Empty input field")
}
else{
  card.innerHTML=`<h1 class="notfound">Loading....</h1>`
  let api = `https://api.github.com/users/${searchinput.value}`
  fetch(api)
  .then((res)=>{
    return res.json();
  })
  .then((data)=>{
    searchinput.value="";
       showData(data);
      
  })
  .catch((err)=>{
    console.log(err)
  })
}
}

function showData(data){

let bios;
if(data.bio == null){
  bios=""
}else{
  bios=data.bio
}


if(data.name==null){
  card.innerHTML =`<h1 class="notfound">Not found...</h1>`
  console.log(data)
}else{
  card.innerHTML=`
  <div class="card_body" >
     <div class="cardimg"><img class="avatar" src="${data.avatar_url}"></div>
     <h1>${data.name}</h1>
     <h3>${data.login}</h3>
     <p>${bios} </p>
     <p><img src="./assets/check.png" alt="" class="icons format" >${data.followers} followers ${data.following} following</p>
     <p><img src="./assets/placeholder.png" alt="" class="icons">${data.location}</p>
      <button >follow</button>
   </div>
 `
 console.log(data)
}
}

btn.addEventListener('click',getdata);


searchinput.addEventListener('keypress',(e)=>{
  if(e.key === "Enter"){
    getdata();
  }
})