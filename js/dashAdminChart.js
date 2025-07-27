const movieSales = document.getElementById("chart-movie-sales");
const ticketSales = document.getElementById("chart-ticket-sales");

const dummyLabel = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const dummyData = [400, 600, 350, 200, 370, 200];


// declare object chart 1
const myChart1 = new Chart(movieSales, {
    type: 'line',
    data: {
        labels: dummyLabel,
        datasets: [{
            label: '',
            data: dummyData,
            fill: true,
            backgroundColor: 'rgba(29, 78, 216, 0.53)',
            borderWidth: 1,
            tension: 0.4,
            spanGaps: true,
            cubicInterpolationMode: 'monotone',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
});


// declare object chart 2
const myChart2 = new Chart(ticketSales, {
    type: 'line',
    data: {
        labels: dummyLabel,
        datasets: [{
            label: ' ',
            data: dummyData,
            fill: true,
            backgroundColor: 'rgba(29, 78, 216, 0.53)',
            borderWidth: 1,
            tension: 0.4,
            spanGaps: true,
            cubicInterpolationMode: 'monotone',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
});


// change value chart1 on submit form1, where the select as condition
const formChart1 = document.querySelector("form#form-chart1");
formChart1.addEventListener("submit", (ev) =>{
    // prevent reload when submit
    ev.preventDefault();
    const movieDrop = formChart1.querySelector("select#movies-name").value;
    const weekDrop = formChart1.querySelector("select#weekly").value;
    let newData = [];

    if (movieDrop == "spiderman-homecoming"){
        newData = [100, 989, 242, 340, 782, 456];
    } else if (movieDrop == "avenger-endgame" ){
        newData = [80, 200, 400, 238, 325, 534];
    } else if (movieDrop == "black-widow"){
        newData = [100, 321, 234, 340, 782, 456];
    }
    updateChartData(myChart1, dummyLabel, newData);
});


// change value chart2 on submit form2, where the select as condition
const formChart2 = document.querySelector("form#form-chart2");
formChart2.addEventListener("submit", (ev) =>{
    // prevent reload when submit
    ev.preventDefault();
    ev.stopPropagation();
    const categorieDrop = formChart2.querySelector("select#category-ticket").value;
    const locationDrop = formChart2.querySelector("select#ticket-location").value;
    let newData = [];

    if (categorieDrop == "adventure"){
        newData = [80, 200, 400, 238, 325, 534];
    } else if (categorieDrop == "action" ){
        newData = [678, 532,755, 234, 489, 327];
    } else if (categorieDrop == "sci-fi"){
        newData = [100, 989, 242, 340, 782, 456];
    }
    updateChartData(myChart2, dummyLabel, newData);
});


/**
 * update entirely curent data and label with new data and label
 * function (object Chart, label array, data array)
 */
function updateChartData(chart, label, newData) {
  chart.data.labels = label;
  chart.data.datasets[0].data = newData;
  chart.update(); 
}
