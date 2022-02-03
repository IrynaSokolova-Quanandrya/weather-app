import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export default function HourlyForecast(){
const options = {
    plugins: {
      title: {
        display: true,
        text: 'Hourly forecast',
      },
    },
    // responsive: true,
    // interaction: {
    //   mode: 'index' as const,
    //   intersect: false,
    // },
    // scales: {
    //   x: {
    //     stacked: true,
    //   },
    //   y: {
    //     stacked: true,
    //   },
    // },
  };
  const getHoursFromNow=()=>{
     let hours = []
  const nowHours = new Date().getHours();
  for(let i=nowHours; i<24; i++){
      hours.push(i+':'+'00')
  }  
  return hours;
  }
  
  const data = {
    labels: getHoursFromNow(),
    datasets: [
      {
        label: 'Temperature',
        // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        backgroundColor: 'rgb(53, 162, 235)',
        stack: 'Stack 1',
      },
    ],
  };
    return(
        <>
        <div>{getHoursFromNow()}</div>
        <Bar 
        options={options} 
        data={data} 
        />
        </>
        
    )
}

