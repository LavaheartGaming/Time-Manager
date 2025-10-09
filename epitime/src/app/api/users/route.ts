import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    id: number;
  name: string;
  phone_number: number;
  email: string
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ id: 1, name: 'John Doe', phone_number: 1234567890, email: 'foo@bar.com'})
}