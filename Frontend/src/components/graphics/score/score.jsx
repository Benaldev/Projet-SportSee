import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

import "./styles.scss";

const Score = ({ data }) => {
  const score = data.score;

  const chartData = [
    {
      name: "score",
      value: score * 100,
      fill: "#FF0000",
    },
  ];

  return (
    <ResponsiveContainer>
      <RadialBarChart
        innerRadius="0%"
        outerRadius="0%"
        data={chartData}
        startAngle={180}
        endAngle={-90}
      >
        <text x="8%" y="8%" fontSize="1.2rem" fontWeight={500}>
          Score
        </text>
        <RadialBar
          data={[{ value: 100 }]}
          dataKey="value"
          barSize={150}
          fill="#ffffff"
          isAnimationActive={false}
        />
        <RadialBar
          dataKey="value"
          barSize={10}
          cornerRadius={100}
          fill="#FF0000"
        />
        <text
          textAnchor="middle"
          fontSize="1rem"
          fontWeight={500}
          fill="#74798C"
        >
          <tspan
            x="50%"
            y="47%"
            fontSize="2rem"
            fontWeight={700}
            fill="#282D30"
          >
            {Math.round(score * 100)}%
          </tspan>
          <tspan x="50%" y="57%">
            de votre
          </tspan>
          <tspan x="50%" y="67%">
            objectif
          </tspan>
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default Score;
