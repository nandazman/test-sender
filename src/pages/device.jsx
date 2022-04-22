import DeviceIcon from "../components/icons/device";
import Layout from "../components/layout/layout";
import Title from "../components/title";

export default function Device() {
  return (
    <Layout>
      <div>
        <Title
          text="Device"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, laborum"
        >
          <DeviceIcon width={19} height={30} />
        </Title>
      </div>
    </Layout>
  );
}
