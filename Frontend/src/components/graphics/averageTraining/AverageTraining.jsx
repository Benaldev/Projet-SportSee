import { formatLabel } from "../../../services/formatter";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import "./styles.scss";

export default function AverageTraining({ data }) {
  function CustomToolTip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className="average-training-tooltip">
          <p>{payload[0].value + " min"}</p>
        </div>
      );
    }
    return null;
  }

  return (
    <>
      <h3 className="average-training-title">
        Durée moyenne des <br />
        sessions
      </h3>
      <ResponsiveContainer width="100%" height="55%" className={"center"}>
        <LineChart data={data}>
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            strokeWidth={2}
            activeDot={{
              stroke: "#FFF",
              strokeWidth: 4,
              r: 2,
            }}
            dot={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "rgba(255,255,255,0.6)",
              fontSize: "0.75rem",
            }}
            tickFormatter={formatLabel}
            tickMargin={20}
            interval={0}
            padding={{ left: 5, right: 5 }}
          />
          <Tooltip content={<CustomToolTip />} cursor={false} />
          <YAxis hide domain={["dataMin-10", "dataMax+10"]} />
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="20%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="60%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
