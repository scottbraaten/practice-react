import ChartBar from "./ChartBar";

import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((dp) => dp.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((a) => 
                <ChartBar
                    key={a.label}
                    value={a.value}
                    maxValue={totalMaximum}
                    label={a.label}
                />
            )}
        </div>
    )
}

export default Chart;