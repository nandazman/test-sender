import MessageIcon from "../components/icons/message";
import Layout from "../components/layout/layout";
import Title from "../components/title";

export default function Message() {
  return (
    <Layout>
      <div>
        <Title
          text="List Pesan"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, laborum"
        >
          <MessageIcon width={30} height={24} />
        </Title>
      </div>
    </Layout>
  );
}
