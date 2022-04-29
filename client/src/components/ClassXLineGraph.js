import React, { PureComponent } from 'react';
import { ScatterChart, ComposedChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '04-01',
    Mood: 6.0,
    Energy: 5.6,
    "Amount of Sleep": 5.8,
    amt1: 12
  },
  {
    name: '04-02',
    Mood: 6.44,
    Energy: 6.55,
    "Amount of Sleep": 7.77,
    amt1: 12,
    amt2: 12
  },
  {
    name: '04-03',
    Mood: 6.05,
    Energy: 5.61,
    "Amount of Sleep": 7.44,
    amt2: 12,
    amt3: 12
    
  },
  {
    name: '04-04',
    Mood: 6.0,
    Energy: 5.07,
    "Amount of Sleep": 7.78,
    amt3: 12,
    amt4: 12
    
  },
  {
    name: '04-05',
    Mood: 4.71,
    Energy: 5.28,
    "Amount of Sleep": 7.57,
    amt4: 12,
    amt5: 12
    
  },
  {
    name: '04-06',
    Mood: 5.92,
    Energy: 6.0,
    "Amount of Sleep": 7.38,
    amt5: 12,
    amt6: 12
    
  },
  {
    name: '04-07',
    Mood: 6.15,
    Energy: 5.53,
    "Amount of Sleep": 6.76,
    amt6: 12,
    amt7: 12
    
  },
  {
    name: '04-08',
    Mood: 6.92,
    Energy: 6.38,
    "Amount of Sleep": 6.84,
    amt7: 12,
    amt8: 12
    
  },
  {
    name: '04-09',
    Mood: 8.77,
    Energy: 8.11,
    "Amount of Sleep": 6.66,
    amt8: 12,
    amt9: 12
    
  },
  {
    name: '04-10',
    Mood: 8.18,
    Energy: 7.125,
    "Amount of Sleep": 7.18,
    amt9: 12,
    amt10: 12
    
  },
  {
    name: '04-11',
    Mood: 6.86,
    Energy: 6.4,
    "Amount of Sleep": 7.2,
    amt10: 12,
    amt11: 12
  },
  {
    name: '04-12',
    Mood: 7.55,
    Energy: 7.11,
    "Amount of Sleep": 7.44,
    amt11: 12,
    amt12: 12
  },
  {
    name: '04-13',
    Mood: 7.92,
    Energy: 7.61,
    "Amount of Sleep": 7.0,
    amt12: 12,
    amt13: 12
  },
  {
    name: '04-14',
    Mood: 8.11,
    Energy: 7.55,
    "Amount of Sleep": 7.77,
    amt13: 12,
    amt14: 12
  },
  {
    name: '04-15',
    Mood: 7.68,
    Energy: 7.36,
    "Amount of Sleep": 7.26,
    amt14: 12,
    amt15: 12
  },
  {
    name: '04-16',
    Mood: 7.77,
    Energy: 7.88,
    "Amount of Sleep": 7.33,
    amt15: 12,
    amt16: 12
  },
  {
    name: '04-17',
    Mood: 7.9,
    Energy: 7.2,
    "Amount of Sleep": 6.4,
    amt16: 12,
    amt17: 12
  },
  {
    name: '04-18',
    Mood: 7.22,
    Energy: 5.77,
    "Amount of Sleep": 7.55,
    amt17: 12,
    amt18: 12
  },
  {
    name: '04-19',
    Mood: 7.30,
    Energy: 6.76,
    "Amount of Sleep": 7.76,
    amt18: 12,
    amt19: 12
  },
  {
    name: '04-20',
    Mood: 6.44,
    Energy: 6.11,
    "Amount of Sleep": 7.44,
    amt19: 12,
    amt20: 12
  },
  {
    name: '04-21',
    Mood: 6.54,
    Energy: 6.72,
    "Amount of Sleep": 7.27,
    amt20: 12,
    amt21: 12
  },
  {
    name: '04-22',
    Mood: 6.83,
    Energy: 7.0,
    "Amount of Sleep": 7.27,
    amt21: 12,
    amt22: 12
  },
  // {
  //   name: '04-23',
  //   Mood: 8.125,
  //   Energy: 7.5,
  //   "Amount of Sleep": 6.25,
  //   amt22: 12,
  // },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default class ClassXLineGraph extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width={'100%'} height={300}>
        <ComposedChart 

          width={1500}
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
            <linearGradient id="colorAmt1" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(56, 82, 188)" />
              <stop offset="100%" stopColor="rgb(59, 94, 202)" />
            </linearGradient>
            <linearGradient id="colorAmt2" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(59, 94, 202)" />
              <stop offset="100%" stopColor="rgb(56, 83, 190)" />
            </linearGradient>
            <linearGradient id="colorAmt3" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(56, 83, 190)" />
              <stop offset="100%" stopColor="rgb(56, 82, 188)" />
            </linearGradient>
            <linearGradient id="colorAmt4" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(56, 82, 188)" />
              <stop offset="100%" stopColor="rgb(46, 45, 148)" />
            </linearGradient>
            <linearGradient id="colorAmt5" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(46, 45, 148)" />
              <stop offset="100%" stopColor="rgb(55, 79, 186)" />
            </linearGradient>
            <linearGradient id="colorAmt6" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(55, 79, 186)" />
              <stop offset="100%" stopColor="rgb(57, 86, 193)" />
            </linearGradient>
            <linearGradient id="colorAmt7" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(57, 86, 193)" />
              <stop offset="100%" stopColor="rgb(130, 170, 63)" />
            </linearGradient>
            <linearGradient id="colorAmt8" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(130, 170, 63)" />
              <stop offset="100%" stopColor="rgb(207, 124, 46)" />
            </linearGradient>
            <linearGradient id="colorAmt9" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(207, 124, 46)" />
              <stop offset="100%" stopColor="rgb(217, 159, 46)" />
            </linearGradient>
            <linearGradient id="colorAmt10" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(217, 159, 46)" />
              <stop offset="100%" stopColor="rgb(127, 170, 63)" />
            </linearGradient>
            <linearGradient id="colorAmt11" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(127, 170, 63)" />
              <stop offset="100%" stopColor="rgb(217, 174, 46)" />
            </linearGradient>
            <linearGradient id="colorAmt12" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(217, 174, 46)" />
              <stop offset="100%" stopColor="rgb(212, 155, 46)" />
            </linearGradient>
            <linearGradient id="colorAmt13" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(212, 155, 46)" />
              <stop offset="100%" stopColor="rgb(213, 151, 46)" />
            </linearGradient>
            <linearGradient id="colorAmt14" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(213, 151, 46)" />
              <stop offset="100%" stopColor="rgb(214, 166, 46)" />
            </linearGradient>
            <linearGradient id="colorAmt15" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(214, 166, 46)" />
              <stop offset="100%" stopColor="rgb(209, 152, 46)" />
            </linearGradient>
            <linearGradient id="colorAmt16" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(209, 152, 46)" />
              <stop offset="100%" stopColor="rgb(216, 164, 46)" />
            </linearGradient>
            <linearGradient id="colorAmt17" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(216, 164, 46)" />
              <stop offset="100%" stopColor="rgb(144, 174, 63)" />
            </linearGradient>
            <linearGradient id="colorAmt18" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(144, 174, 63)" />
              <stop offset="100%" stopColor="rgb(220, 187, 46)" />
            </linearGradient>
            <linearGradient id="colorAmt19" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(220, 187, 46)" />
              <stop offset="100%" stopColor="rgb(59, 94, 202)" />
            </linearGradient>
            <linearGradient id="colorAmt20" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(59, 94, 202)" />
              <stop offset="100%" stopColor="rgb(211, 82, 42)" />
            </linearGradient>
            <linearGradient id="colorAmt21" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(211, 82, 42)" />
              <stop offset="100%" stopColor="rgb(218, 193, 46)" />
            </linearGradient>
            <linearGradient id="colorAmt22" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgb(218, 193, 46)" />
              <stop offset="100%" stopColor="rgb(213, 152, 46)" />
            </linearGradient>

          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area legendType = "none" type="monotone" dataKey="amt1" fill="url(#colorAmt1)" />
          <Area legendType = "none" type="monotone" dataKey="amt2" fill="url(#colorAmt2)" />
          <Area legendType = "none" type="monotone" dataKey="amt3" fill="url(#colorAmt3)" />
          <Area legendType = "none" type="monotone" dataKey="amt4" fill="url(#colorAmt4)" />
          <Area legendType = "none" type="monotone" dataKey="amt5" fill="url(#colorAmt5)" />
          <Area legendType = "none" type="monotone" dataKey="amt6" fill="url(#colorAmt6)" />
          <Area legendType = "none" type="monotone" dataKey="amt7" fill="url(#colorAmt7)" />
          <Area legendType = "none" type="monotone" dataKey="amt8" fill="url(#colorAmt8)" />
          <Area legendType = "none" type="monotone" dataKey="amt9" fill="url(#colorAmt9)" />
          <Area legendType = "none" type="monotone" dataKey="amt10" fill="url(#colorAmt10)" />
          <Area legendType = "none" type="monotone" dataKey="amt11" fill="url(#colorAmt11)" />
          <Area legendType = "none" type="monotone" dataKey="amt12" fill="url(#colorAmt12)" />
          <Area legendType = "none" type="monotone" dataKey="amt13" fill="url(#colorAmt13)" />
          <Area legendType = "none" type="monotone" dataKey="amt14" fill="url(#colorAmt14)" />
          <Area legendType = "none" type="monotone" dataKey="amt15" fill="url(#colorAmt15)" />
          <Area legendType = "none" type="monotone" dataKey="amt16" fill="url(#colorAmt16)" />
          <Area legendType = "none" type="monotone" dataKey="amt17" fill="url(#colorAmt17)" />
          <Area legendType = "none" type="monotone" dataKey="amt18" fill="url(#colorAmt18)" />
          <Area legendType = "none" type="monotone" dataKey="amt19" fill="url(#colorAmt19)" />
          <Area legendType = "none" type="monotone" dataKey="amt20" fill="url(#colorAmt20)" />
          <Area legendType = "none" type="monotone" dataKey="amt21" fill="url(#colorAmt21)" />
          <Area legendType = "none" type="monotone" dataKey="amt22" fill="url(#colorAmt22)" />
          <Line type="monotone" dataKey="Energy" strokeWidth={3} stroke="#577ED2" activeDot={{ r: 4, }} />
          <Line type="monotone" dataKey="Mood" strokeWidth={3} stroke="#CF6C5D" activeDot={{ r: 4, }} />
          <Line type="monotone" dataKey="Amount of Sleep" strokeWidth={3} stroke="#54706B" activeDot={{ r: 4, }} />
        </ComposedChart >
      </ResponsiveContainer>
    );
  }
}