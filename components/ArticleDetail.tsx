import React from 'react'
import { Article } from '../interfaces'

type ArticleDetailProps = {
  article: Article
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8">
    <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
      <h2 className="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black">
        {article.title}
      </h2>
    </div>
    <div className="col-start-1 row-start-2 px-4 sm:pb-16">
      <p className="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
        {article.description}
      </p>
      <hr className="w-16 border-gray-300 hidden sm:block" />
    </div>
    <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
      <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
        <div className="relative col-span-3 row-span-2">
          <img
            src={article.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
)

export default ArticleDetail
