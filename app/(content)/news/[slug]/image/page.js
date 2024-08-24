import { DUMMY_NEWS as news } from "@/data/dummy-news";
import { notFound } from "next/navigation";

const ImagePage = ({ params }) => {
  const newsItem = news.find((item) => item.slug === params.slug);
  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default ImagePage;
