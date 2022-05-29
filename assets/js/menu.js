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
    /* PARAMETRES DU PREMIER GRAPHIQUE */
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [],
            datasets: [{
                label: 'Part de vidéo pour le filtre choisi comparé aux autres filtres',
                data: [],
                backgroundColor: [],
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
                    text: 'PART DE VIDEOS DU FILTRE',
                    position: "top",
                    padding: {
                        top: 10,
                        bottom: 30
                    },
                    color: "#bb2d3b",
                    font: {
                        size: 14,
                        family: 'Roboto Condensed',
                        style: 'normal'
                    }
                }
            }
        }
    });
    /* FIN DES PARAMS DU GRAPH  */
    /* PARAMETRES DU DEUXIEME GRAPHIQUE */
    const ctx2 = document.getElementById('myChart2').getContext('2d');
    const myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Part de likes',
                data: [],
                backgroundColor: []
            }, {
                label: 'Part de vues',
                data: [],
                backgroundColor: []
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
                    text: 'PARTS DE LIKES ET VUES DE CHAQUE FILTRE',
                    position: "top",
                    padding: {
                        top: 10,
                        bottom: 30
                    },
                    color: "#bb2d3b",
                    font: {
                        size: 14,
                        family: 'Roboto Condensed',
                        style: 'normal'
                    }
                },
            },
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }
        }
    });

    /* PARAMETRES DU TROISIEME GRAPHIQUE */
    const ctx3 = document.getElementById('myChart3').getContext('2d');
    const myChart3 = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: "labels",
            datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
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
                        size: 14,
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
            myChart.config.data.labels = names;
            myChart.config.data.datasets[0].data = nbViews;
            myChart.config.data.datasets[0].backgroundColor = colors;
            myChart.update(); //on met a jour

            /* On remplit les données du graph */
            myChart2.config.data.labels = names;
            myChart2.config.data.datasets[0].data = nbLikes;
            myChart2.config.data.datasets[1].data = nbViews;
            myChart2.config.data.datasets[0].backgroundColor = colors[0];
            myChart2.config.data.datasets[1].backgroundColor = colors[1];
            myChart2.update(); //on met a jour
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
        });
    });

    $('.get-categories-data').on('click', function(e) {
        e.preventDefault();
        var $link = $(e.currentTarget);
        $.ajax({
            method: 'GET',
            url: $link.attr('href')
        }).done(function(data_categories) {
            console.log("Button 3");
            console.log(data_categories);
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
        });
    });
});