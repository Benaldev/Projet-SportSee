import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import "./styles.scss";

const Intensity = ({ data }) => {
  return (
    <ResponsiveContainer>
      <RadarChart
        outerRadius={55}
        data={data}
        style={{ background: "#282d30", borderRadius: "10px" }}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          axisLine={false}
          dataKey="kind"
          tickLine={false}
          tick={{
            dy: 4,
            fill: "#fff",
            fontSize: 9,
          }}
        />
        <Radar dataKey="value" fill="red" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Intensity;
