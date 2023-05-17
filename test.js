function search() {
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
  
        if (capital[0].toLowerCase() == textCapital) {
            var capitalDiv = document.createElement("div");
            var flagDiv = document.createElement("div");
            var countryDiv = document.createElement("div");
            var continentDiv = document.createElement("div");
            
            capitalDiv.innerHTML = `<span>capital</span><br><p>${capital}</p>`
            continentDiv.innerHTML = `<span>continent</span><br><p>${continent}</p>`
            flagDiv.innerHTML = `<span>drapeau</span><br><img src="${flag}">`
            countryDiv.innerHTML = `<span>Pays</span><br><p>${textCountry}</p>`
            
            infos.innerHTML = "";
            infos.appendChild(countryDiv);
            infos.appendChild(continentDiv);
            infos.appendChild(capitalDiv);
            infos.appendChild(flagDiv);
  
            var storedDivs = [countryDiv, continentDiv, capitalDiv, flagDiv];
            welldoneDiv.innerHTML = ` <br><br><p class="welldone">Félicitation !!!</p>`
            welldone.appendChild(welldoneDiv);
            setTimeout(() => {
              welldone.removeChild(welldoneDiv);
              storedDivs.forEach(div => infos.removeChild(div));
            }, 3000);
        } else {
          if (welldone.contains(welldoneDiv)) {
            welldone.removeChild(welldoneDiv);
          }
          infos.innerHTML = "";
          infos.appendChild(countryDiv);
        }
      })
      .catch(error => console.error(error));
}
