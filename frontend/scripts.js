let searchResultsDiv = document.getElementById("search_results");
let searchButton = document.getElementById("search_button");

let results = [];
// call axios method to retrieve data
// create html table
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  let zipCode = document.getElementById("enter_zip").value;
  let url = "https://api.openbrewerydb.org/breweries/search?query=" + zipCode;
  axios.get(url).then((response) => {
    results = response.data;
    useBreweryResponse();

    resetValues();
  });
});

useBreweryResponse = () =>
  console.log("Check out these breweries: " + JSON.stringify(results));

function resetValues() {
  document.getElementById("enter_zip").value = "";
}
