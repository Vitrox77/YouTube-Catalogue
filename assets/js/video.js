import '../styles/video.css';
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


/* *************************************************************************************************** */
function loadGraphOneVideo(videoId, myChartOneVideo) {
    $.ajax({
        method: 'GET',
        url: '/stats/' + videoId + '/getDataOneVideo',
    }).done(function(data) {
        console.log(data);
        console.log("Recap data graph one video");

        var nbViews = data.nbViews;
        var nbVuesAllVideos = data.nbVuesAllVideos;

        (myChartOneVideo.config.data.datasets[0].data).push(nbViews);
        (myChartOneVideo.config.data.datasets[0].data).push(nbVuesAllVideos - nbViews);
        (myChartOneVideo.config.data.labels).push('Vues de la vidéo');
        (myChartOneVideo.config.data.labels).push('Reste des vues dans la même catégorie');
        myChartOneVideo.update();
    });
}
/* *************************************************************************************************** */
$(document).ready(function() {
    /* Je recupere le stringParam et j'appelle la fontion loadGraph */
    const videoId = document.getElementById('videoId').value;

    /* PARAMETRES DU TROISIEME GRAPHIQUE : NB DE VUES PAR RAPPORT AUX NB DE TAGS*/
    const ctx = document.getElementById('myChartOneVideo').getContext('2d');
    const myChartOneVideo = new Chart(ctx, {
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
                    text: 'PART DE LA VIDÉO DANS SA CATÉGORIE',
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

    loadGraphOneVideo(videoId, myChartOneVideo);
});