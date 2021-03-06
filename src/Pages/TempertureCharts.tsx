import React from "react";
import {getData} from "../Components/NivoChart/data";
import MyChart from "../Components/MyChart/MyChart";
import MyResponsiveLine from "../Components/NivoChart/NivoChart";

const TemperatureCharts = () => {

    const [number, setNumber] = React.useState(16);

    return (
        <>
        <h1>Temperature logs</h1>
    <h2>React - ChartJS</h2>
    <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        getData(number);
    }}>
        <input type="number" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNumber(parseInt(event.target.value))}
               value={number} />
    </form>
    <MyChart number={number} setNumber={setNumber} />
    <h2>React - Nivo</h2>
    <MyResponsiveLine number={number} setNumber={setNumber}  />
        </>
    )
}

export default TemperatureCharts
