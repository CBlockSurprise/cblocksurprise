
var searchbar = document.getElementById("searchbar");

searchbar.addEventListener('input', searchBarUpdate);


var hasBeenBigger = false;

function searchBarUpdate(e) {
  openSearchBar(e);
  checkElements(searchbar.value.toLowerCase())
}

function openSearchBar(e) {
  if (searchbar.value.length > 0) {
    if (searchbar.classList.contains("starting-searchbar")) {
      searchbar.classList.remove("starting-searchbar");
    }
    if (searchbar.classList.contains("searchbar-small")) {
      searchbar.classList.remove("searchbar-small");
    }
    searchbar.classList.add("searchbar-bigger");
    hasBeenBigger = true;
  }
  if (searchbar.value.length == 0 && hasBeenBigger) {
    searchbar.classList.remove("searchbar-bigger");
    searchbar.classList.add("searchbar-small");
  }
}

var searchTerms = [];

function setUpSearchTerms() {
  for (let i = 0; i < projects.length; i++) {
    searchTerms.push(projects[i].title);
  }
}

function checkElements(search) {
  if (search.length > 0) {
    let results = [];
    for (let i = 0; i < searchTerms.length; i++) {
      let keywords = search.split(" ");
      for (let j = 0; j < keywords.length; j++) {
        if (searchTerms[i].toLowerCase().includes(keywords[j])) {
          results.push(searchTerms[i]);
          break;
        }
      }

    }
    let htmlResults = "";
    for (let k = 0; k < results.length; k++) {
      htmlResults += "<div><span>" + results[k] + "</span></div>";
    }
    if (results.length == 0) {
      htmlResults += "<div><span><i>No Results Found...</i></span></div>"
    }
    document.getElementById("search-results").innerHTML = htmlResults;
    
  } else {
    document.getElementById("search-results").innerHTML = "";
  }
}
