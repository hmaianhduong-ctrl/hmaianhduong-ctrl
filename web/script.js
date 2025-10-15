document.addEventListener('DOMContentLoaded', function() {

    // 1. Vẽ biểu đồ kỹ năng mềm bằng Chart.js
    const ctx = document.getElementById('softSkillsChart').getContext('2d');
    const softSkillsChart = new Chart(ctx, {
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
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(255, 159, 64, 0.8)',
                    'rgba(255, 205, 86, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 99, 132, 0.8)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#e0e0e0', // Màu chữ cho chú thích
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
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

    // 2. Hiệu ứng xuất hiện khi cuộn
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Ngừng theo dõi sau khi đã xuất hiện
            }
        });
    }, {
        threshold: 0.1 // Xuất hiện khi 10% của card lọt vào màn hình
    });

    cards.forEach(card => {
        observer.observe(card);
    });

});