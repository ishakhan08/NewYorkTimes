$(document).ready(function () {
    //*** This is a test ***/
    var searchBtn = $("#submit");
    var clearBtn = $("#clear");

    $("#submit").on("click", function (event) {
        event.preventDefault();

        var term = $("#searchInput").val();
        var startDate = $("#startYearInput").val().trim();
        var endDate = $("#endYearInput").val().trim();

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "3b45ac8d4ca74e1aad213cc2a28cd93d",
            // trump is the search variable
            "q": term,
            // 20170101 is the start date variable
            "begin_date": startDate + "0101",
            // 20180101 is the end date variable
            "end_date": endDate + "0101"
        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (result) {
            console.log(result.response.docs);
        }).fail(function (err) {
            throw err;
        });

        console.log(url);

    });

});