import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from 'react-chartjs-2';
import Layout from '../components/layout/layout';
import { getPokemonIvysaur } from "../lib/api";

const pieData = {
  datasets: [
    {
      label: "# of Votes",
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
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

export default function Home({ data }) {
  const labels = [];
  const dataStat = [];
  data.stats.forEach((item) => {
    labels.push(item.stat.name)
    dataStat.push(item.base_stat);
  });
  pieData.labels = labels;
  pieData.datasets[0].data = dataStat;
  return (
    <Layout>
      <div>
        <p className="mb-16px text-large text-black">
          Akumulasi peforma anda hari ini
        </p>
        <div className="w-1/4 mb-16px">
          <Pie data={pieData} options={options} datasetIdKey="pie-chart" />
        </div>
        <div>Example Data: </div>
        <div className="text-clip overflow-hidden">{JSON.stringify(data)}</div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  // if get data is prefered from client side, then use useEffect
  const data = await getPokemonIvysaur();
  return {
    props: { data },
  };
}