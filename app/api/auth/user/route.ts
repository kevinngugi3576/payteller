import { createSessionClient } from '@/lib/apprwrite';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { account } = await createSessionClient();
      const user = await account.get();
      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching logged-in user:', error);
      res.status(500).json({ error: 'Error fetching logged-in user' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
