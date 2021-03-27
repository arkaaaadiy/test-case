import { NextApiRequest, NextApiResponse } from 'next';
import { articles } from '../../../utils/test-data';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(articles)) {
      throw new Error('Записи не найдены');
    }
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message });
  }
};
export default handler;
