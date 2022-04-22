import BroadcastIcon from "../components/icons/broadcast";
import Layout from "../components/layout/layout";
import Title from "../components/title";

export default function Broadcast() {
  return (
    <Layout>
      <div>
        <Title
          text="Broadcast"
          description="Isi data di bawah untuk melakukan blast pesan"
        >
          <BroadcastIcon width={35} height={30} />
        </Title>
      </div>
    </Layout>
  );
}
