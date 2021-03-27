import React from 'react'
import { Article } from '../interfaces'
import ArticleListItem from './ArticleListItem'

type ArticleListProps = {
  articles: Article[]
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => (
  <ul className="divide-y divide-gray-100">
    {articles.map((article) => (
      <li key={article.title}>
        <ArticleListItem article={article} />
      </li>
    ))}
  </ul>
)

export default ArticleList
