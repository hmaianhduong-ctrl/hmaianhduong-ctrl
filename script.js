document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('softSkillsChart');
    
    if (ctx) {
        // Thiết lập font chữ mặc định cho biểu đồ
        Chart.defaults.font.family = "'HelvetIns', sans-serif";

        new Chart(ctx.getContext('2d'), {
            type: 'pie',
            data: {
                labels: [
                    'Giao tiếp', 'Làm việc nhóm', 'Giải quyết vấn đề',
                    'Tư duy phản biện', 'Quản lý thời gian', 'Sáng tạo'
                ],
                datasets: [{
                    label: 'Kỹ năng mềm',
                    data: [25, 20, 20, 15, 10, 10],
                    backgroundColor: [
                        '#6a5acd', '#8a7eff', '#ada7ff',
                        '#d0cdff', '#e8e7ff', '#f5f4ff'
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
