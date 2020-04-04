    const list = document.getElementById("countries");
    let countries;    
    let selectedCode;
    list.addEventListener("change", newSelection);

    function newSelection(event) {
        displayCountryInfo(event.target.value);
    }

    fetch("https://restcountries.eu/rest/v2/all")
        .then(function (res) {
            return res.json();
        })

        .then(function (data) {
		initialize(data);
        })

        .catch(function (err) {
            console.log("Error:", err);
        });



    function initialize(Data) {
        countries = Data;
        let options = "";
        countries.forEach(country => options += `<option value="${country.alpha3Code}">${country.name}</option>`);
        list.innerHTML = options;
        list.selectedIndex = Math.floor(Math.random() * list.length);
        displayCountryInfo(list[list.selectedIndex].value);
    }

    function displayCountryInfo(Alpha3Code) {
        selectedCode = Alpha3Code;
        const countryData = countries.find(country => country.alpha3Code === Alpha3Code);
        document.querySelector("#flag-container img").src = countryData.flag;
        document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;

    }

    fetch("https://restcountries.eu/rest/v2/all")
        .then(function (res) {
            return res.json();
        })

        .then(function (data) {
            initialize(data);
        })

        .catch(function (err) {
            console.log("Error:", err);
        });

    function Capital() {
        const countryData = countries.find(country => country.alpha3Code === selectedCode);
        document.getElementById("capital").innerHTML = countryData.capital;

    }
	
	fetch("https://restcountries.eu/rest/v2/all")
		.then(function(res){
			return res.json();
		})
		.then(function(data){
		initialize(data);
		})
		.catch(function(err){
		console.log("Error:", err);
		});
 


	function Currency(){
	const countryData = countries.find(country => country.alpha3Code === selectedCode);
	document.getElementById("currency").innerHTML = countryData.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");
	}


	fetch("https://restcountries.eu/rest/v2/all")
		.then(function(res){
			return res.json();
	})
	.then(function(data){
		initialize(data);
	})
	.catch(function(err){
		console.log("Error:", err);
	});


	function Population(){
	  const countryData = countries.find(country => country.alpha3Code === selectedCode);
	    document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
	}
