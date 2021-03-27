import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import { Article } from '../../interfaces'
import { articles } from '../../utils/test-data'
import ArticleDetail from '../../components/ArticleDetail'

type ArticleCardProps = {
  article?: Article
  errors?: string
}

const ArticleCard = ({ article, errors }: ArticleCardProps) => {
  if (errors) {
    return (
      <Layout title="Детализация статьи">
        <p>
          <span style={{ color: 'red' }}>Ошибка:</span> {errors}
        </p>
      </Layout>
    )
  }
  return (
    <Layout title={article ? article.title : 'Детализация статьи'}>
      {article && <ArticleDetail article={article} />}
    </Layout>
  )
}

export default ArticleCard

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = articles.map((article) => ({
    params: { id: article.id.toString() },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id
  try {
    const res = await fetch(`http://localhost:3000/api/articles/${id}`)
    const article = await res.json()
    if (!article) {
      return {
        redirect: {
          destination: '/articles',
          permanent: false,
        },
      }
    }
    return { props: { article } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}
