fetch("https://restcountries.eu/rest/v2/all")
.then(res=>res.json())
.then(data=>displayCountries(data));

const displayCountries=countries=>{
    const countriesDiv=document.getElementById('container');

for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const countryDiv=document.createElement('Div');
    countryDiv.className='country';

    // const h3 = document.createElement('h3');
    // h3.innerText=country.name;
    // countryDiv.appendChild(h3);

    // const p = document.createElement('p');
    // p.innerText=country.capital;
    // countryDiv.appendChild(p);

    const counteryInfo=`
<h3 class='country-name'>${country.name}</h3>
<p>${country.capital}</p>
<button>click</button>

`
countryDiv.innerHTML=counteryInfo;

countriesDiv.appendChild(countryDiv);
}
}

