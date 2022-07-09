import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const db = new PrismaClient();

const servicesHander = async (req: NextApiRequest, res: NextApiResponse) => {
  const getUsers = async () => {
    await db.services
      .findFirst({
        where: {
          id: Number(req.query.postId),
        },
      })
      .catch((e) => {
        res.status(500).send(e);
      })
      .then((i) => {
        res.status(201).send(i);
      });
  };

  switch (req.method) {
    case 'GET':
      await getUsers();
      break;

    default:
      res.status(500).send({
        error: 'Something went wrong!!!!',
      });
      break;
  }
};

export default servicesHander;
