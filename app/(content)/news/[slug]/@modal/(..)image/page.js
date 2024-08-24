"use client";
import { DUMMY_NEWS as news } from "@/data/dummy-news";
import { notFound, useRouter } from "next/navigation";

const ImagePage = ({ params }) => {
  const router = useRouter();
  const newsItem = news.find((item) => item.slug === params.slug);
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default ImagePage;
