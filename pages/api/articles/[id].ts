import { NextApiRequest, NextApiResponse } from 'next'
import { articles } from '../../../utils/test-data'

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req
  switch (method) {
    case 'GET':
      try {
        const article = articles.find((article) => article.id === +id)
        if (!article) throw new Error('Запись не найдена')
        res.status(200).json(article)
      } catch (error) {
        res.status(500).json({ statusCode: 500, message: error.message })
      }
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
