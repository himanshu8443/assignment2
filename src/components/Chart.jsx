'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const Chart = () => {
    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            }
        },
        responsive: true,
        maintainAspectRatio: false,

    }

    const data = {
        datasets: [
            {
                label: false,
                data: [40, 70],
                backgroundColor: [
                    'rgb(252, 176, 0)',
                    'rgb(128, 128, 128)',
                ],
                borderColor: [
                    'rgb(252, 176, 0)',
                    'rgb(128, 128, 128)',
                ],
                borderWidth: 1,
                circumference: 180,
                rotation: 270,
            }
        ]
    }

    const GaugeText = {
        id: 'customCanvasText',
        beforeDatasetsDraw(chart, args, options) {
            const { ctx } = chart;
            const centerX = chart.getDatasetMeta(0).data[0].x;
            const centerY = chart.getDatasetMeta(0).data[0].y;
            ctx.save();
            ctx.globalCompositeOperation = 'destination-over';
            ctx.fillStyle = options.color || 'white';
            ctx.font = 'bold 30px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('40%', centerX, centerY);
        }
    }

    return (
        <div className='mt-10 shadow-md shadow-gray-600 rounded-md'>
            <div className="flex flex-col items-center justify-center bg-[#012E57] p-3 rounded-md">
                <p className="text-2xl font-bold text-white">Goal Reached</p>
                <div className="flex items-center justify-center rounded-full h-64 w-64">
                    <Doughnut data={data} options={options} plugins={[GaugeText]} />
                </div>
            </div>
        </div>
    )
}

export default Chart