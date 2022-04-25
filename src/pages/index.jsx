import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from 'react-chartjs-2';
import Layout from '../components/layout/layout';

const data = {
  labels: ["Red", "Blue", "Yellow", "Green"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "bottom"
    }
  }
}

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
  return (
    <Layout>
      <div>
        <p className="mb-16px text-large text-black">
          Akumulasi peforma anda hari ini
        </p>
        <div className="w-1/4">
          <Pie data={data} options={options} datasetIdKey="pie-chart" />
        </div>
      </div>
    </Layout>
  );
}
