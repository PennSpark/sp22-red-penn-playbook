import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ClassXBarChart = () => {
    const data = [
        {
          "Statement": "I made progress towards my goals",
          "Strongly disagree": 5,
          "Disagree": 35,
          "Neither agree nor disagree": 32,
          "Agree": 127,
          "Strongly agree": 62,
        },
        {
          "Statement": "I stepped out of my comfort zone",
          "Strongly disagree": 12,
          "Disagree": 46,
          "Neither agree nor disagree": 55,
          "Agree": 112,
          "Strongly agree": 36,
        },
        {
            "Statement": "I performed an act of kindness",
            "Strongly disagree": 20,
            "Disagree": 63,
            "Neither agree nor disagree": 59,
            "Agree": 93,
            "Strongly agree": 26,
          },
          {
            "Statement": "I'm looking forward to tomorrow",
            "Strongly disagree": 0,
            "Disagree": 26,
            "Neither agree nor disagree": 59,
            "Agree": 124,
            "Strongly agree": 51,
          }
      ]
      
    return (
        <ResponsiveContainer width={'100%'} height={300}>
        <BarChart width={730} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="Statement" interval={0} tick={{ fontSize: "10.5" }} angle={0} textAnchor="middle"/>
  <YAxis />
  <Tooltip />
  <Bar dataKey="Strongly disagree" fill="#CF6C5D" />
  <Bar dataKey="Disagree" fill="#EAD2DD" />
  <Bar dataKey="Neither agree nor disagree" fill="#FFDB78" />
  <Bar dataKey="Agree" fill="#577ED2" />
  <Bar dataKey="Strongly agree" fill="#54706B" />
  <Legend />
</BarChart>
</ResponsiveContainer>
    )
}

export default ClassXBarChart