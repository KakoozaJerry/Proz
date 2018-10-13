
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };

    var config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),

                ],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.orange,
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "Red",
                "Orange",
            ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Race For Presidency'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };
