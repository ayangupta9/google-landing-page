window.addEventListener('DOMContentLoaded', function (e) {
    // function getUrlParameter(name) {
    //     name = name.replace(/[\[\]]/g, '\\$&');
    //     var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    //         results = regex.exec(window.location.href);
    //     if (!results) return null;
    //     if (!results[2]) return '';
    //     return decodeURIComponent(results[2].replace(/\+/g, ' '));
    // }

    // // Get the search query from the URL parameter
    // var searchQuery = getUrlParameter('query');

    // // Set the page title to the search query
    // document.title = `Search Results - ${searchQuery}`;
    
    let huh = document.getElementById('huh')
    console.log(huh);

    huh.addEventListener('click',(e) => {
        window.location.href = 'scavenger-hunt.html'
    })
})


