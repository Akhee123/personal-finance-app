import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
  } from "chart.js";
import { Bar } from "react-chartjs-2";
import { AppContext } from "../../../App";
import { useContext } from "react";

function Chart() {

    const context = useContext(AppContext);

    // const data = { 
    //     labels: context.category.map(element => element.category);
    //     datasets: 
    // };

    return (
        <div>
            <Bar
            data={data}
            // options={}
            ></Bar>
        </div>
    );
  }
  
  export default Chart;