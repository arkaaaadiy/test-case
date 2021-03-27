import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import List from '../../components/ArticleList'
import { Article } from '../../interfaces'

type ArticlesProps = {
  articles: Article[]
}

const Articles = ({ articles }: ArticlesProps) => (
  <Layout title="Список статей">
    <h1 className="text-2xl font-semibold p-4">Список статей</h1>
    <List articles={articles} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/articles`)
    const articles = await res.json()
    if (!articles) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
    return { props: { articles } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

export default Articles
