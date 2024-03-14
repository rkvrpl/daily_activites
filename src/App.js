
import './App.css';
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Работа", 6],
  ["Еда", 2],
  ["Учеба", 4],
  ["Отдых", 3],
  ["Сон", 9],
];

export const options = {
  title: "Мой план на день",
  is3D: true,
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"500px"}
    />
  );
}

export default App;
