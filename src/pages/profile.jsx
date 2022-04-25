import { useEffect, useState } from "react";
import ProfileIcon from "../components/icons/profile";
import Layout from "../components/layout/layout";
import Title from "../components/title";
import { getPokemonIvysaur } from "../lib/api";

export default function Profile() {
  const [data, setData] = useState({});

  // if get data is prefered from server side, then use getServerSideProps
  const getData = async () => {
    const data = await getPokemonIvysaur();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("hehe")
  return (
    <Layout>
      <div>
        <Title
          text="Profile"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, laborum"
        >
          <ProfileIcon width={30} height={30} />
        </Title>
        <div>Example Data: </div>
        <div className="text-clip overflow-hidden">{JSON.stringify(data)}</div>
      </div>
    </Layout>
  );
}
