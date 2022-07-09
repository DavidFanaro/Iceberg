import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const db = new PrismaClient();

const servicesHander = async (req: NextApiRequest, res: NextApiResponse) => {
  const getUsers = async () => {
    await db.services
      .findMany()
      .catch((e) => {
        res.status(500).send(e);
      })
      .then((i) => {
        res.status(200).send(i);
      });
  };

  const createPost = async () => {
    await db.services
      .create({
        data: {
          name: req.body.name,
          url: req.body.url,
          image: req.body.image,
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
    case 'POST':
      await createPost();
      break;

    default:
      res.status(500).send({
        error: 'Something went wrong!!!!',
      });
      break;
  }
};

export default servicesHander;
