$(document).ready(function () {
    //*** This is a test ***/


    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "3b45ac8d4ca74e1aad213cc2a28cd93d",
        // trump is the search variable
        "q": "trump",
        // 20170101 is the start date variable
        "begin_date": "20170101",
        // 20180101 is the end date variable
        "end_date": "20180101"
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (response) {
        console.log(response);
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
