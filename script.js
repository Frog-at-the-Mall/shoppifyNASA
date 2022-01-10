

let openHeart = "fa-heart-o"
let closedHeart = "fa-heart"
let searchButton = document.querySelector("#search")

var btn = document.getElementById('btn');
var test = document.getElementById('start')


//change state of heart when clicked
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


//event listener button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  var startDate = document.getElementById("start").value
  var endDate = document.getElementById("end").value

  console.log("button pressed")
  console.log(startDate)
  console.log(endDate)
  sendApiRequest(startDate,endDate)
})



// async function to fetch data from the nasaAPI.
async function sendApiRequest(startDate, endDate){
  let apiKey = "C3EBsx1hGG1Teh3moTIrMo7MvOmnLYkbDSyiytaS"
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}


//display data
function useApiData(data){
  

  for(let i = 0; i < data.length; i++){

    // document.querySelector("#content").innerHTML += data[i].title;
    // document.querySelector("#content").innerHTML += data[i].date;
    // document.querySelector("#content").innerHTML += `<img src ="${data[i].hdurl}" class = "responsive">`;
    // document.querySelector("#content").innerHTML += data[i].explanation;
    //like button
    document.querySelector("#content").innerHTML += 

      `<div class="container">
      
        <h1>${data[i].title}</h1>
        <p>${data[i].date}</p>
        <img src ="${data[i].hdurl}" class = "responsive">
        <p>${data[i].explanation}</p>
        <i onclick="Toggle(this.id)" id = "btn${i}" class="fa fa-heart-o"></i>
        
      </div>`;

    document.querySelector("#content").innerHTML += `<p></p>`;
    document.querySelector("#content").innerHTML += `<p></p>`;

    

    

  }

}
