import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ message: "rqh vwxglhv wkh hohphqwv, rqh vwxglhv wkh dssolfdwlrqv" });
} 