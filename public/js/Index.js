const  mychart = document.getElementById('MyChart');
console.log(mychart.id)
new Chart(mychart, {
    type: 'bar',
    data: {
        labels: ['January ', 'February', 'March', 'April', 'May', 'June',
                'July','August','September','October','November','December'],
        datasets: [{
            label: 'revenues',
            data: [20000,30000 ,15800, 17800, 11000, 10000,
                    48900,10000,50800,20000,76890,10203],
            borderWidth: 0,
            barPercentage: 0.4,
            backgroundColor: 'rgba(128,78,73,0.86)',
            borderRadius:7,

        }],

    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                border: {
                    dash: [5,9],
                },
                grid:{
                    color: "rgba(107,107,107,0.18)"
                },
                ticks: { color: '#6c6c6c' }
            },
            x:{
             beginAtZero: true,
                grid:{
                  display:false,
                },
                ticks: { color: '#6c6c6c' }
            },
        },
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem) {
                    return tooltipItem.y;
                }
            }
        }
    }
});