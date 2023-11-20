// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (!('page' in req.query) || !('limit' in req.query)) {
    res.status(200).json({name: 'not ok'})
  }
  res.status(200).json({ name: `${req.query.page} - ${req.query.limit}` });
}
