import '../styles/menu.css';
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
$(document).ready(function() {
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


    /* PARAMETRES DU DEUXIEME GRAPHIQUE : LES VUES PAR RAPPORT AUX DATES */
    const ctx2 = document.getElementById('myChartDate').getContext('2d');
    const myChartDate = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Nombre de vues',
                data: [],
                fill: false,
                borderColor: '#bb2d3b',
                tension: 0.1
            }]
        },
        options: {
            plugins: {
                legend: {
                    align: "start",
                    position: "bottom"
                },
                title: {
                    display: true,
                    text: 'TAUX DE VUES EN FONCTION DE LA DATE',
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
            },
        }
    });

    /* PARAMETRES DU TROISIEME GRAPHIQUE : NB DE VUES PAR RAPPORT AUX NB DE TAGS*/
    const ctx3 = document.getElementById('myChartTags').getContext('2d');
    const myChartTags = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Nombre de vues',
                data: [],
                fill: false,
                borderColor: '#bb2d3b',
                tension: 0.1
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
                label: '',
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

    /* PARAMETRES DU CINQUIEME GRAPHIQUE : NB DE LIKES PAR RAPPORT AU NB DE VUES*/
    const ctx5 = document.getElementById('myChartLikesViews').getContext('2d');
    const myChartLikesViews = new Chart(ctx5, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Nombre de likes',
                data: [],
                fill: false,
                borderColor: '#bb2d3b',
                tension: 0.1
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
                }
            }
        }
    });


    /* FIN DES PARAMS DU GRAPH  */
    /* Lors du clic sur le bouton pour charger les données des graphs */
    $('.get-json-data').on('click', function(e) {
        e.preventDefault();
        var $link = $(e.currentTarget);
        $.ajax({
            method: 'GET',
            url: $link.attr('href')
        }).done(function(data) {
            console.log("Button 1");
            console.log(data);
            /* Si l'appel ajax à bien retourné une reponse avec de la data */
            var names = data.map(function(e) {
                if (e.name.length > 50) {
                    return e.name.slice(0, 50) + '...';
                } else {
                    return e.name;
                }
            });
            var nbViews = data.map(function(e) {
                return e.nbViews;
            });
            var nbLikes = data.map(function(e) {
                return e.nbLikes;
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
            // myChart.config.data.labels = names;
            // myChart.config.data.datasets[0].data = nbViews;
            // myChart.config.data.datasets[0].backgroundColor = colors;
            // myChart.update(); //on met a jour



            /* On remplit les données du graph */
            // myChartLikesViews.config.data.labels = names;
            // myChartLikesViews.config.data.datasets[0].data = nbLikes;
            // myChartLikesViews.config.data.datasets[1].data = nbViews;
            // myChartLikesViews.config.data.datasets[0].backgroundColor = colors[0];
            // myChartLikesViews.config.data.datasets[1].backgroundColor = colors[1];
            // myChartLikesViews.update(); //on met a jour
        });
    });

    $('.get-info-from-search').on('click', function(e) {
        e.preventDefault();
        var $link = $(e.currentTarget);
        $.ajax({
            method: 'GET',
            url: $link.attr('href')
        }).done(function(data_json) {
            console.log("Button 2");
            console.log(data_json);
            //console.log(data_json.videosFilterCount);

            var filterCount = data_json.videosFilterCount;
            var totalCount = data_json.videosTotalCount;

            (myChart.config.data.datasets[0].data).push(filterCount);
            (myChart.config.data.datasets[0].data).push(totalCount-filterCount);
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
            console.log("Button 3");
            console.log(data_categories);

            var names = data_categories.map(function (e) {
                return e.name;
            });

            var nbVideos = data_categories.map(function (e) {
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
            console.log("Button 4");
            console.log(data_tags);

            var nbViews = data_tags.map(function(e) {
                return e.nbViews;
            });

            var nbTags = data_tags.map(function(e) {
                return e.nbTags;
            });

            myChartTags.config.data.labels = nbTags;
            myChartTags.config.data.datasets[0].data = nbViews;
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
            console.log("Button 5");
            console.log(data_date);
        });
    });

    $('.get-recap-data').on('click', function(e) {
        e.preventDefault();
        var $link = $(e.currentTarget);
        $.ajax({
            method: 'GET',
            url: $link.attr('href')
        }).done(function(data_recap) {
            console.log("Button 6");
            console.log(data_recap);
            $('#mean-duration').text(data_recap.duration  + " min");
            $('#mean-views').text(data_recap.nbViews);
            $('#mean-likes').text(data_recap.nbLikes);
        });
    });

    $('.get-graph-json-data').on('click', function(e) {
        e.preventDefault();
        var $link = $(e.currentTarget);
        $.ajax({
            method: 'GET',
            url: $link.attr('href')
        }).done(function(data_graph) {
            console.log("Button JE SAIS PLUS COMBIEN");
            console.log(data_graph);

            var nbViews = data_graph.map(function(e) {
                return e.nbViews;
            });

            var nbLikes = data_graph.map(function(e) {
                return e.nbLikes;
            });

            myChartLikesViews.config.data.labels = nbViews;
            myChartLikesViews.config.data.datasets[0].data = nbLikes;
            myChartLikesViews.update();
        });
    });
});