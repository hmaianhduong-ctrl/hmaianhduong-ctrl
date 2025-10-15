document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('softSkillsChart').getContext('2d');
    
    if (ctx) {
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [
                    'Giao tiếp',
                    'Làm việc nhóm',
                    'Giải quyết vấn đề',
                    'Tư duy phản biện',
                    'Quản lý thời gian',
                    'Sáng tạo'
                ],
                datasets: [{
                    label: 'Kỹ năng mềm',
                    data: [25, 20, 20, 15, 10, 10],
                    backgroundColor: [
                        '#6a5acd', // Sáng tạo
                        '#8a7eff', // Quản lý thời gian
                        '#ada7ff', // Tư duy phản biện
                        '#d0cdff', // Giải quyết vấn đề
                        '#e8e7ff', // Làm việc nhóm
                        '#f5f4ff'  // Giao tiếp
                    ],
                    borderColor: '#ffffff',
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#555',
                            font: {
                                family: "'Be Vietnam Pro', sans-serif",
                                size: 12
                            },
                            padding: 15,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                let label = context.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed !== null) {
                                    label += context.parsed + '%';
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        });
    }
});
