import ProfileIcon from "../components/icons/profile";
import Layout from "../components/layout/layout";
import Title from "../components/title";

export default function Profile() {
  return (
    <Layout>
      <div>
        <Title
          text="Profile"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, laborum"
        >
          <ProfileIcon width={30} height={30} />
        </Title>
      </div>
    </Layout>
  );
}
