import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_URL from "../service/api";

interface PageData {
  title: string;
  content: string;
}

const DynamicPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const [page, setPage] = useState<PageData | null>(null);

  useEffect(() => {
    if (slug) {
      loadPage(slug);
    }
  }, [slug]);

  const loadPage = async (slug: string) => {
    try {
      const response = await API_URL.get(`/${slug}`);
      setPage(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!page) {
    return (
      <div className="mx-auto max-w-7xl p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl p-10">
      <h1 className="mb-6 text-4xl font-bold">
        {page.title}
      </h1>

      <div
        dangerouslySetInnerHTML={{
          __html: page.content,
        }}
      />
    </div>
  );
};

export default DynamicPage;