import './style.css'

let searchBar = document.getElementById('searchbar')
let submitBtn = document.getElementById('google-submitbtn')

submitBtn.addEventListener('click', (e) => {
  const search = searchBar.value
  // window.location.href = 'search-results.html'  
  document.title = `Search Results - ${search}`
  const encodedSearch = encodeURIComponent(search);
  window.location.href = `search-results.html?query=${encodedSearch}`;
})