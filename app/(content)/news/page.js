import { getAllNews } from "@/lib/news";
import NewsList from "@/components/NewsList";

async function NewsPage() {
  const news = await getAllNews();
  return (
    <>
      <h1>News Main</h1>

      <NewsList news={news} />
    </>
  );
}

export default NewsPage;
