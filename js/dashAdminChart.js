const movieSales = document.getElementById("chart-movie-sales");
const ticketSales = document.getElementById("chart-ticket-sales");

const dummyLabelMovie = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
const dummyMovieSales = [400, 600, 350, 200, 370, 200];


new Chart(movieSales, {
    type: 'line',
    data: {
        labels: dummyLabelMovie,
        datasets: [{
            label: '',
            data: dummyMovieSales,
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


new Chart(ticketSales, {
    type: 'line',
    data: {
        labels: dummyLabelMovie,
        datasets: [{
            label: ' ',
            data: dummyMovieSales,
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