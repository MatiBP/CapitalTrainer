 let infos = document.querySelector(".infos")
 let welldone = document.querySelector(".welldone-box")


 var capitalDiv = document.createElement("div");
 var flagDiv = document.createElement("div");
 var countryDiv = document.createElement("div");
 var continentDiv = document.createElement("div");

 var welldoneDiv = document.createElement("section");
 var storedDivs = [];

 function search(){
   
    let textCountry = document.querySelector(".textPays").value
    let textCapital = document.querySelector(".textCapital").value
    countryDiv.innerHTML = `<span>Pays</span><br><p>${textCountry}</p>`

    let url = "https://restcountries.com/v3.1/name/" + textCountry;
    fetch(url)
      .then(response => response.json())
      .then(data => {
         const countryData = data[0];
         const capital = countryData.capital;
         const continent = countryData.continents;
         const flag = countryData.flags.svg;

         if(capital[0].toLowerCase() == textCapital){
            storedDivs.forEach(div => infos.removeChild(div));
            welldoneDiv.innerHTML = ` <br><br><p class="welldone">Félicitation !!!</p>`
            welldone.appendChild(welldoneDiv);
         }else{
         if (welldone.contains(welldoneDiv)) {
            welldone.removeChild(welldoneDiv);
         }
         storedDivs.forEach(div => infos.removeChild(div));
         capitalDiv.innerHTML = `<span>capital</span><br><p>${capital}</p>`
         continentDiv.innerHTML = `<span>continent</span><br><p>${continent}</p>`
         flagDiv.innerHTML = `<span>drapeau</span><br><img src="${flag}">`
         
         infos.appendChild(countryDiv);
         infos.appendChild(continentDiv);
         infos.appendChild(capitalDiv);
         infos.appendChild(flagDiv);
         storedDivs = [countryDiv, continentDiv, capitalDiv, flagDiv];
         }
      })
            .catch(error => console.error(error));
      }


      
     

      