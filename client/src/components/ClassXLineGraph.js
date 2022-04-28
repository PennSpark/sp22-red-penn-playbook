import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '04-01',
    Mood: 6.0,
    Energy: 5.6,
    "Amount of Sleep": 5.8,
  },
  {
    name: '04-02',
    Mood: 6.44,
    Energy: 6.55,
    "Amount of Sleep": 7.77,
  },
  {
    name: '04-03',
    Mood: 6.05,
    Energy: 5.61,
    "Amount of Sleep": 7.44,
  },
  {
    name: '04-04',
    Mood: 6.0,
    Energy: 5.07,
    "Amount of Sleep": 7.78,
  },
  {
    name: '04-05',
    Mood: 4.71,
    Energy: 5.28,
    "Amount of Sleep": 7.57,
  },
  {
    name: '04-06',
    Mood: 5.92,
    Energy: 6.0,
    "Amount of Sleep": 7.38,
  },
  {
    name: '04-07',
    Mood: 6.15,
    Energy: 5.53,
    "Amount of Sleep": 6.76,
  },
  {
    name: '04-08',
    Mood: 6.92,
    Energy: 6.38,
    "Amount of Sleep": 6.84,
  },
  {
    name: '04-09',
    Mood: 8.77,
    Energy: 8.11,
    "Amount of Sleep": 6.66,
  },
  {
    name: '04-10',
    Mood: 8.18,
    Energy: 7.125,
    "Amount of Sleep": 7.18,
  },
  {
    name: '04-11',
    Mood: 6.86,
    Energy: 6.4,
    "Amount of Sleep": 7.2,
  },
  {
    name: '04-12',
    Mood: 7.55,
    Energy: 7.11,
    "Amount of Sleep": 7.44,
  },
  {
    name: '04-13',
    Mood: 7.92,
    Energy: 7.61,
    "Amount of Sleep": 7.0,
  },
  {
    name: '04-14',
    Mood: 8.11,
    Energy: 7.55,
    "Amount of Sleep": 7.77,
  },
  {
    name: '04-15',
    Mood: 7.68,
    Energy: 7.36,
    "Amount of Sleep": 7.26,
  },
  {
    name: '04-16',
    Mood: 7.77,
    Energy: 7.88,
    "Amount of Sleep": 7.33,
  },
  {
    name: '04-17',
    Mood: 7.9,
    Energy: 7.2,
    "Amount of Sleep": 6.4,
  },
  {
    name: '04-18',
    Mood: 7.22,
    Energy: 5.77,
    "Amount of Sleep": 7.55,
  },
  {
    name: '04-19',
    Mood: 7.30,
    Energy: 6.76,
    "Amount of Sleep": 7.76,
  },
  {
    name: '04-20',
    Mood: 6.44,
    Energy: 6.11,
    "Amount of Sleep": 7.44,
  },
  {
    name: '04-21',
    Mood: 6.54,
    Energy: 6.72,
    "Amount of Sleep": 7.27,
  },
  {
    name: '04-22',
    Mood: 6.83,
    Energy: 7.0,
    "Amount of Sleep": 7.27,
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
          <defs>
            <linearGradient id="colorEnergy" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="red" />
              <stop offset="100%" stopColor="green" />
            </linearGradient>
            <linearGradient id="colorMood" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="orange" />
              <stop offset="100%" stopColor="blue" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Energy" strokeWidth={3} stroke="blue" activeDot={{ r: 4, }} />
          <Line type="monotone" dataKey="Mood" strokeWidth={3} stroke="red" activeDot={{ r: 4, }} />
          <Line type="monotone" dataKey="Amount of Sleep" strokeWidth={3} stroke="green" activeDot={{ r: 4, }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}