import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '04-01',
    Mood: 6.0,
    Energy: 5.6,
    "Amount of Sleep": 5.8,
  },
  {
    name: '04-02',
    Mood: 6.444444444444445,
    Energy: 6.555555555555555,
    "Amount of Sleep": 7.777777777777778,
  },
  {
    name: '04-03',
    Mood: 6.055555555555555,
    Energy: 5.611111111111111,
    "Amount of Sleep": 7.444444444444445,
  },
  {
    name: '04-04',
    Mood: 6.0,
    Energy: 5.071428571428571,
    "Amount of Sleep": 7.785714285714286,
  },
  {
    name: '04-05',
    Mood: 4.714285714285714,
    Energy: 5.285714285714286,
    "Amount of Sleep": 7.571428571428571,
  },
  {
    name: '04-06',
    Mood: 5.923076923076923,
    Energy: 6.0,
    "Amount of Sleep": 7.384615384615385,
  },
  {
    name: '04-07',
    Mood: 6.153846153846154,
    Energy: 5.538461538461538,
    "Amount of Sleep": 6.769230769230769,
  }, 
  {
    name: '04-08',
    Mood: 6.923076923076923,
    Energy: 6.384615384615385,
    "Amount of Sleep": 6.846153846153846,
  },
  {
    name: '04-09',
    Mood: 8.777777777777779,
    Energy: 8.11111111111111,
    "Amount of Sleep": 6.666666666666667,
  },
  {
    name: '04-10',
    Mood: 8.1875,
    Energy: 7.125,
    "Amount of Sleep": 7.1875,
  },
  {
    name: '04-11',
    Mood: 6.866666666666666,
    Energy: 6.4,
    "Amount of Sleep": 7.2,
  },
  {
    name: '04-12',
    Mood: 7.555555555555555,
    Energy: 7.111111111111111,
    "Amount of Sleep": 7.444444444444445,
  },
  {
    name: '04-13',
    Mood: 7.923076923076923,
    Energy: 7.615384615384615,
    "Amount of Sleep": 7.0,
  },
  {
    name: '04-14',
    Mood: 8.11111111111111,
    Energy: 7.555555555555555,
    "Amount of Sleep": 7.777777777777778,
  },
  {
    name: '04-15',
    Mood: 7.684210526315789,
    Energy: 7.368421052631579,
    "Amount of Sleep": 7.2631578947368425,
  },
  {
    name: '04-16',
    Mood: 7.777777777777778,
    Energy: 7.888888888888889,
    "Amount of Sleep": 7.333333333333333,
  },
  {
    name: '04-17',
    Mood: 7.9,
    Energy: 7.2,
    "Amount of Sleep": 6.4,
  },
  {
    name: '04-18',
    Mood: 7.222222222222222,
    Energy: 5.777777777777778,
    "Amount of Sleep": 7.555555555555555,
  },
  {
    name: '04-19',
    Mood: 7.3076923076923075,
    Energy: 6.769230769230769,
    "Amount of Sleep": 7.769230769230769,
  },
  {
    name: '04-20',
    Mood: 6.444444444444445,
    Energy: 6.111111111111111,
    "Amount of Sleep": 7.444444444444445,
  },
  {
    name: '04-21',
    Mood: 6.545454545454546,
    Energy: 6.7272727272727275,
    "Amount of Sleep": 7.2727272727272725,
  },
  {
    name: '04-22',
    Mood: 6.833333333333333,
    Energy: 7.0,
    "Amount of Sleep": 7.2727272727272725,
  },
  {
    name: '04-23',
    Mood: 8.125,
    Energy: 7.5,
    "Amount of Sleep": 6.25,
  },
];

export default class ClassXLineGraph extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width={'100%'} height={300}>
        <LineChart
          
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 50,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Energy" strokeWidth={3} stroke="#FFDB78" activeDot={{ r: 4, }} />
          <Line type="monotone" dataKey="Mood" strokeWidth={3} stroke="#EAD2DD" activeDot={{ r: 4, }}/>
          <Line type="monotone" dataKey="Amount of Sleep" strokeWidth={3} stroke="#DDE4F3" activeDot={{ r: 4,}}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
