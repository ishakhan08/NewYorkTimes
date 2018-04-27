<<<<<<< HEAD
$(document).ready(function () {



    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "3b45ac8d4ca74e1aad213cc2a28cd93d"
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
    }).fail(function (err) {
        throw err;
    });


    queryp = $("#search-term")
        .val()
        .trim();

    queryStart = $("#start-year")
        .val()
        .trim();

    queryEnd = $("#end-year")
        .val()
        .trim();




    startYear = $("#start-year" + 0101);
    endYear = $("#end-year" + 0101);

    paragraph = $("<p>");
    div = $("<div>");


    $("#articles").append(div);



});
=======
>>>>>>> 8708571c60d5dca7a95b167c311ad0688c99108e
