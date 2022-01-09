

let searchButton = document.querySelector("#search")

let openHeart = "fa-heart-o"
let closedHeart = "fa-heart"


var btn = document.getElementById('btn');

function Toggle(clickedID){

  console.log("helohelohelo")

  if(document.getElementById(clickedID).classList.contains(openHeart)){

    console.log("goodbye goodbbye")
    document.getElementById(clickedID).classList.remove(openHeart);
    document.getElementById(clickedID).classList.add(closedHeart);
    

  }else{
    document.getElementById(clickedID).classList.remove(closedHeart);
    document.getElementById(clickedID).classList.add(openHeart);
  }
}


//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})



//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let apiKey = "C3EBsx1hGG1Teh3moTIrMo7MvOmnLYkbDSyiytaS"
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
  

  for(let i = 0; i < data.length; i++){

    document.querySelector("#content").innerHTML += data[i].title;
    document.querySelector("#content").innerHTML += data[i].date;
    document.querySelector("#content").innerHTML += `<img src ="${data[i].hdurl}" class = "responsive">`;

    //like button
    document.querySelector("#content").innerHTML += `<div class="container ">
    <i onclick="Toggle(this.id)" id = "btn${i}" class="fa fa-heart-o"></i>
  </div>`;
    document.querySelector("#content").innerHTML += `<p></p>`;
    document.querySelector("#content").innerHTML += `<p></p>`;

    

    

  }

}
