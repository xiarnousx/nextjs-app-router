import Link from "next/link";
import Image from "next/image";
import { DUMMY_NEWS as news } from "@/data/dummy-news";
import NewsList from "@/components/NewsList";

function NewsPage() {
  return (
    <>
      <h1>News Main</h1>

      <NewsList news={news} />
    </>
  );
}

export default NewsPage;
