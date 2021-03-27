import Link from 'next/link'
import React from 'react'
import { Article } from '../interfaces'

type ArticleListItemProps = {
  article: Article
}

const ArticleListItem: React.FC<ArticleListItemProps> = ({ article }) => (
  <Link href={`/articles/[id]`} as={`/articles/${article.id}`}>
    <a className="p-4 flex space-x-4 hover:bg-gray-300">
      <img
        src={article.image}
        alt=""
        className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
        style={{ width: 144, height: 144 }}
      />
      <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
        <h2 className="text-lg font-semibold text-black mb-0.5">
          {article.title}
        </h2>
        <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
          <p>{article.description.slice(0, 100)}...</p>
        </dl>
      </div>
    </a>
  </Link>
)

export default ArticleListItem
