import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news";

const DefaultPage = async () => {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
};

export default DefaultPage;
