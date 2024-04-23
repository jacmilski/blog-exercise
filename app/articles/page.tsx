import { Article, allArticles } from "@/.contentlayer/generated";
import { compareDesc, parseISO, format } from "date-fns";
import Link from "next/link";
import { Key } from "react";
import { UrlObject } from "url";

const getArticles = () => {
  return allArticles.sort((a: Article, b: Article) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))
}

function ArticleCard(article: Article, id: Key | null | undefined) {
  return (
    <div className="mb-8" key={id}>
      <h2 className="mb-1 text-xl">
        <Link href={article.url as unknown as UrlObject} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {article.title}
        </Link>
      </h2>
      <time dateTime={article.publishedAt} className="mb-2 block text-xs text-gray-600">
        {format(article.publishedAt, 'LLLL d, yyyy')}
      </time>
      <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{__html: article.body.raw }} />
    </div>
  )
}


export default function ArticlesPage() {
  const articles = getArticles();

  return (
    <main className="">
      {articles.map((article: Article) => ArticleCard(article, article._id))}
    </main>
  );
}