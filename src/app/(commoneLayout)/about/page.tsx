export const dynamic = "force-dynamic";
const AboutPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  //   throw new Error("Something went wrong...");
  return <div>This is about page component</div>;
};

export default AboutPage;
