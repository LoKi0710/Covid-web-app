// https://api.covid19api.com/summary

fetch("https://api.covid19api.com/summary")
.then(rawdata => rawdata.json())
.then(data => {
    let covidData = data.Global;
    console.log(covidData)

    document.getElementById("newCases").innerText = "+" + covidData.NewConfirmed;
    document.getElementById("recoveredCases").innerText = "+" + covidData.NewRecovered;
    document.getElementById("newDeaths").innerText = "+" + covidData.NewDeaths;
    document.getElementById("lastUpdated").innerText = new Date(covidData.Date).toLocaleDateString();
});
