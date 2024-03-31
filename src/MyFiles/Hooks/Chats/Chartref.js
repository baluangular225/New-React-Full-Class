import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import {faker} from "@faker-js/faker"; 

const Chartref = () =>{
    ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
    
    const data = {
      datasets: [
        {
          label: 'Red dataset',
          data: Array.from({ length: 50 }, () => ({
            x: faker.datatype.number({ min: -100, max: 100 }),
            y: faker.datatype.number({ min: -100, max: 100 }),
            r: faker.datatype.number({ min: 5, max: 20 }),
          })),
          backgroundColor: '#0070ad',
        },
        {
          label: 'Blue dataset',
          data: Array.from({ length: 50 }, () => ({
            x: faker.datatype.number({ min: -100, max: 100 }),
            y: faker.datatype.number({ min: -100, max: 100 }),
            r: faker.datatype.number({ min: 5, max: 20 }),
          })),
          backgroundColor: '#12abdb',
        },
      ],
    };

    return(
        <div>
            <Bubble options={options} data={data} />
        </div>
    )
}

export default Chartref;