var setlist =
[
    {
        "artist" : ["Taro Urashima"],
        "title" : "Umi no Koe",
        "genre" : ["J-POP"],
        "year" : 2015
    },
    {
        "artist" : ["BIGBANG"],
        "title" : "LOSER",
        "genre" : ["K-POP"],
        "year" : 2015
    },
    {
        "artist" : ["Twenty One Pilots"],
        "title" : "Heathens",
        "genre" : ["Alternative", "Rap rock"],
        "year" : 2016
    },
    {
        "artist" : ["Survive Said The Prophet"],
        "title" : "RED",
        "genre" : ["Rock", "J-POP"],
        "year" : 2018
    },
    {
        "artist" : ["Charlie Puth"],
        "title" : "We Don't Talk Anymore",
        "genre" : ["Pop", "Tropical house"],
        "year" : 2016
    },
    {
        "artist" : ["Beyonce"],
        "title" : "Halo",
        "genre" : ["Pop", "R&B"],
        "year" : 2008
    },
    {
        "artist" : ["Scott Barnhardt", "Justin Bohon", "Jason Michael Snow", "Kevin Duda", "Josh Gad", "Brian Sears", "Rory O'Malley", "Andrew Rannells", "Benjamin Schrader", "Clark Johnsen"],
        "title" : "Turn It Off",
        "genre" : ["Musical", "Rock", "Pop"],
        "year" : 2011
    },
    {
        "artist" : ["Lady Gaga"],
        "title" : "Applause",
        "genre" : ["Pop"],
        "year" : 2013
    },
    {
        "artist" : ["Christopher Jackson", "Daveed Diggs", "Lin-Manuel Miranda", "Okieriete Onaodowan"],
        "title" : "Battle Cabinet #1",
        "genre" : ["Trap", "Musical", "Rap"],
        "year" : 2015
    },
    {
        "artist" : ["The Weeknd"],
        "title" : "Six Feet Under",
        "genre" : ["Soul", "R&B"],
        "year" : 2016
    }
];

function display_json() {
    $("#pretty_display").hide();
    var str = "";
    setlist.forEach(function (elem, key) {
        str += JSON.stringify(elem);
        if (key != setlist.length) {
            str += ', <br>';
        }
    });
    $("#json").html(str);
    $("#json_display").show();
}

function display_all_songs(g) {
    $("#json_display").hide();
    $("#setlist").html("");
    setlist.forEach(function (elem) {
        if (g == "all" || g == "Select a genre" || elem["genre"].includes(g)){
            var song = $('<div class="song"></div>');
            var title = $('<h2>' + elem["title"] + '</h2>');
            var artist = $('<p style="width:50%;"><span>Artist:</span> ' + elem["artist"].join(', ') + '</p>');
            var genre = $('<p><span>Genre: </span>' + elem["genre"].join(', ') + '</p>');
            var release = $('<p><span>Released </span>' + elem['year'] + '</p>');
            title.appendTo(song);
            artist.appendTo(song);
            genre.appendTo(song);
            release.appendTo(song);
            song.appendTo("#setlist");
        }
    });
    $("#pretty_display").show();
}

$(document).ready(function () {
    display_all_songs("all");
});
