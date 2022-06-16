



// fetch("https://restcountries.com/v3.1/all")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })



// fetch("https://restcountries.com/v3.1/all")
//     .then((response) => response.json())
//     .then(data => data(data))
//     .catch(error => console.log(error));

// function getCountry(countryInfo) {
//     countries = countryInfo;
// }


// .catch((error) => {
//       canvas.innerHTML = "";
//       const err = document.createElement("h2");
//       err.innerText = "WE COULD NOT FIND YOU";
//       canvas.appendChild(err);
//     });



let countryInfo = document.getElementById("collection");
let button = document.getElementById("btn");
let displayInput = document.getElementById("country");
let Display = document.getElementById("display");
let answers = document.getElementById("feedback");

button.addEventListener("click", (e) => {
    e.preventDefault();
  fetch(`https://restcountries.com/v3.1/name/${displayInput.value}`)
    .then((response) => response.json())
      .then((data) => {
        const countryInfo = (data) => {
  Display.innerHTML = "";
  const { name,capital,region,flag } = data;
  const img = document.createElement("img");
  const namep = document.createElement("p");
    const capitalp = document.createElement("p");
     const regionp = document.createElement("p");
  img.src = flag ;
  namep.innerText = name;
    capitalp.innerText = capital;
    regionp.innerText = region;

  Display.appendChild(img);
  Display.appendChild(namep);
    Display.appendChild(capitalp);
     Display.appendChild(regionp);
          };
        //   return data;
        console.log(data);
      })
    
}); 
    




async function fetchCountryInfo() {
  const Collection = await fetch("https://restcountries.com/v3.1/all");
  return Collection.json();
};

const fetchInfo = fetchCountryInfo();
fetchInfo.then((response) => {
          
    let initialList = response.slice(0, 10);
    // return initialList;
        console.log(initialList);
      })
;
 
button.addEventListener("click",button);










// const search = () => {
//     const displayInput = document.getElementById("country");
//     const name = displayInput.value.trim().toLocaleLowerCase();

//   fetch("https://restcountries.com/v3.1/all")
//     .then((response) => response.json())
//       .then((data) => {
//           console.log(data);
//       //  data = response.data;
//     })
//     .catch((error) => {
//       canvas.innerHTML = "";
//       const err = document.createElement("h2");
//       err.innerText = "THIS IS NOT RECOGNIZED";
//       canvas.appendChild(err);
//     });
// };
   