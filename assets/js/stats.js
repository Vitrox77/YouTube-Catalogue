import '../styles/stats.css';
/******************************** INCLUDES CHART JS ******************************************** */
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
} from 'chart.js';

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
);
require('chart.js');
const $ = require('jquery');

/*************************************************************************************************** */
function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
/*************************************************************************************************** */
function GetSortOrder(prop) {
    return function(a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}
/* *************************************************************************************************** */
function fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
/* *************************************************************************************************** */
function loadGraphRecap(stringParam) {
    $.ajax({
        method: 'GET',
        url: '/stats/' + stringParam + '/getRecapData',
    }).done(function(data_recap) {
        console.log("Button recap data");
        $('#mean-duration').text(fancyTimeFormat(data_recap.duration) + " (min:sec)");
        $('#mean-views').text(data_recap.nbViews);
        $('#mean-likes').text(data_recap.nbLikes);
        $('#nb-videos').text(data_recap.nbVideos);
    });
}
/* *************************************************************************************************** */

$(document).ready(function() {
    /* Je recupere le stringParam et j'appelle la fontion loadGraph */
    const stringParam = document.getElementById('stringParamId').value;
    loadGraphRecap(stringParam);

    /* PARAMETRES DU PREMIER GRAPHIQUE : PART DE VIDEOS DU FILTRE*/
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [],
            datasets: [{
                label: 'Nombre de vidéos',
                data: [],
                backgroundColor: [
                    'rgb(238, 65, 69)',
                    'rgb(0, 0, 0)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    align: "start",
                    position: 'bottom',
                    labels: {
                        family: 'Roboto Condensed',
                        padding: 20
                    }
                },
                title: {
                    display: true,
                    text: 'PART DU FILTRE DANS LE CATALOGUE',
                    position: "top",
                    padding: {
                        top: 10,
                        bottom: 30
                    },
                    color: "#bb2d3b",
                    font: {
                        size: 18,
                        family: 'Roboto Condensed',
                        style: 'normal'
                    }
                }
            }
        }
    });


    /* PARAMETRES DU DEUXIEME GRAPHIQUE : LE GRAPH PAR RAPPORT AUX DATES */
    const ctx2 = document.getElementById('myChartDate').getContext('2d');
    const myChartDate = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Vidéos filtrées',
                data: [],
                borderColor: '#bb2d3b',
                backgroundColor: '#BB666E',
            }]
        },
        options: {
            plugins: {
                legend: {
                    align: "start",
                    position: 'bottom',
                    labels: {
                        family: 'Roboto Condensed',
                        padding: 20
                    }
                },
                title: {
                    display: true,
                    text: 'NOMBRE DE VUES PAR DATE DE SORTIE',
                    position: "top",
                    padding: {
                        top: 10,
                        bottom: 30
                    },
                    color: "#bb2d3b",
                    font: {
                        size: 18,
                        family: 'Roboto Condensed',
                        style: 'normal'
                    }
                }
            },
            responsive: true,
            scales: {
                xAxes: [{
                    type: 'time',
                    distribution: 'linear',
                }],

            },
        }
    });

    /* PARAMETRES DU TROISIEME GRAPHIQUE : NB DE VUES PAR RAPPORT AUX NB DE TAGS*/
    const ctx3 = document.getElementById('myChartTags').getContext('2d');
    const myChartTags = new Chart(ctx3, {
        type: 'scatter',
        data: {
            labels: [],
            datasets: [{
                label: 'Vidéos filtrées',
                data: [],
                fill: false,
                borderColor: '#bb2d3b',
                backgroundColor: '#BB666E',
                showLine: true,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    align: "start",
                    position: 'bottom',
                    labels: {
                        family: 'Roboto Condensed',
                        padding: 20
                    }
                },
                title: {
                    display: true,
                    text: 'NOMBRE DE VUES EN FONCTION DU NOMBRE DE TAGS',
                    position: "top",
                    padding: {
                        top: 10,
                        bottom: 30
                    },
                    color: "#bb2d3b",
                    font: {
                        size: 18,
                        family: 'Roboto Condensed',
                        style: 'normal'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            return "Vues =" + context.parsed.x + "  Tags=" + context.parsed.y;
                        }
                    }
                }
            }
        }
    });

    /* PARAMETRES DU QUATRIEME GRAPHIQUE : CATEGORIES*/
    const ctx4 = document.getElementById('myChartCategories').getContext('2d');
    const myChartCategories = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Catégories',
                data: [],
                backgroundColor: [],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    align: "start",
                    position: 'bottom',
                    labels: {
                        family: 'Roboto Condensed',
                        padding: 20
                    }
                },
                title: {
                    display: true,
                    text: 'CATEGORIES LES PLUS UTILISEES',
                    position: "top",
                    padding: {
                        top: 10,
                        bottom: 30
                    },
                    color: "#bb2d3b",
                    font: {
                        size: 18,
                        family: 'Roboto Condensed',
                        style: 'normal'
                    }
                }
            }
        }
    });

    /* PARAMETRES DU CINQUIEME GRAPHIQUE : NB DE LIKES PAR RAPPORT AU NB DE VUES TRIE PAR NOMBRE DE VUES*/
    const ctx5 = document.getElementById('myChartLikesViews').getContext('2d');
    const myChartLikesViews = new Chart(ctx5, {
        type: 'scatter',
        data: {
            labels: [],
            datasets: [{
                label: 'Vidéos filtrées',
                data: [],
                borderColor: '#bb2d3b',
                backgroundColor: '#BB666E',
                showLine: true,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    align: "start",
                    position: 'bottom',
                    labels: {
                        family: 'Roboto Condensed',
                        padding: 20
                    }
                },
                title: {
                    display: true,
                    text: 'NOMBRE DE LIKE EN FONCTION DU NOMBRE DE VUE',
                    position: "top",
                    padding: {
                        top: 10,
                        bottom: 30
                    },
                    color: "#bb2d3b",
                    font: {
                        size: 18,
                        family: 'Roboto Condensed',
                        style: 'normal'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            return "Vues =" + context.parsed.x + "  Likes=" + context.parsed.y;
                        }
                    }
                }
            }
        }
    });

    $('.get-info-from-search').on('click', function(e) {
        e.preventDefault();
        var $link = $(e.currentTarget);
        $.ajax({
            method: 'GET',
            url: $link.attr('href')
        }).done(function(data_json) {
            console.log("Button pie chart filtres");
            console.log(data_json);
            //console.log(data_json.videosFilterCount);

            var filterCount = data_json.videosFilterCount;
            var totalCount = data_json.videosTotalCount;

            (myChart.config.data.datasets[0].data).push(filterCount);
            (myChart.config.data.datasets[0].data).push(totalCount - filterCount);
            (myChart.config.data.labels).push('Vidéos du filtre');
            (myChart.config.data.labels).push('Reste des vidéos dans le catalogue');
            myChart.update(); //on met a jour

        });
    });


    //GRAPH CATEGORIES
    $('.get-categories-data').on('click', function(e) {
        e.preventDefault();
        var $link = $(e.currentTarget);
        $.ajax({
            method: 'GET',
            url: $link.attr('href')
        }).done(function(data_categories) {
            console.log("Button categorie les plus utilisées");
            console.log(data_categories);

            var names = data_categories.map(function(e) {
                return e.name;
            });

            var nbVideos = data_categories.map(function(e) {
                return e.count;
            });

            //on crée un tableau du nombre de donnees qui contiendra des couleurs randoms
            var colors = [];
            for (var i = 0; i < names.length; i++) {
                colors.push(randomColor());
            }
            var colors2 = [];
            for (var i = 0; i < names.length; i++) {
                colors2.push(randomColor());
            }

            /* On remplit les données du graph */
            myChartCategories.config.data.labels = names;
            myChartCategories.config.data.datasets[0].data = nbVideos;
            myChartCategories.config.data.datasets[0].backgroundColor = colors;
            myChartCategories.update(); //on met a jour
            console.log(myChartCategories.config.data.datasets[0].data);
            console.log(nbVideos);

        });
    });

    $('.get-tags-data').on('click', function(e) {
        e.preventDefault();
        var $link = $(e.currentTarget);
        $.ajax({
            method: 'GET',
            url: $link.attr('href')
        }).done(function(data_tags) {
            console.log("Button nb vues en fonction des tags");
            console.log(data_tags);

            //je trie le tableau par nombre de vues
            data_tags.sort(GetSortOrder("nbViews"));

            var nbViews = data_tags.map(function(e) {
                return e.nbViews;
            });

            var nbTags = data_tags.map(function(e) {
                return e.nbTags;
            });

            myChartTags.config.data.labels = nbViews;
            myChartTags.config.data.datasets[0].data = nbTags;
            myChartTags.update();

        });
    });

    $('.get-date-data').on('click', function(e) {
        e.preventDefault();
        var $link = $(e.currentTarget);
        $.ajax({
            method: 'GET',
            url: $link.attr('href')
        }).done(function(data_date) {
            console.log("Button nb vues en fonction des dates");

            for (var vid in data_date) {
                let vidDate = data_date[vid].release_date.date;
                data_date[vid].release_date = vidDate.substring(0, 10);
            }
            data_date.sort(GetSortOrder("release_date"));

            console.log(data_date);

            var nbViews = data_date.map(function(e) {
                return e.nbViews;
            });

            var release_date = data_date.map(function(e) {
                return e.release_date;
            });
            myChartDate.config.data.labels = release_date;
            myChartDate.config.data.datasets[0].data = nbViews;
            myChartDate.update();
        });
    });

    $('.get-graph-json-data').on('click', function(e) {
        e.preventDefault();
        var $link = $(e.currentTarget);
        $.ajax({
            method: 'GET',
            url: $link.attr('href')
        }).done(function(data_graph) {
            console.log("Button nb vues en fonction des likes");

            //je trie le tableau par nombre de vues
            data_graph.sort(GetSortOrder("nbViews"));
            console.log(data_graph);

            var nbViews = data_graph.map(function(e) {
                return e.nbViews;
            });

            //pourcentage du nombre de likes par rapport au nombre de vues
            //var percentLikes = data_graph.map(function(e) { return (e.nbLikes / e.nbViews) * 100; });

            var nbLikes = data_graph.map(function(e) {
                return e.nbLikes;
            });

            myChartLikesViews.config.data.labels = nbViews;
            myChartLikesViews.config.data.datasets[0].data = nbLikes;
            myChartLikesViews.update();
        });
    });
});