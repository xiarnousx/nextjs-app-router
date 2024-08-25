import { getNewsItem } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";
async function NewsDetailsPage({ params }) {
  const newsItem = await getNewsItem(params.slug);
  if (!newsItem) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}

export default NewsDetailsPage;
