import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const db = new PrismaClient();

const servicesHander = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      res.send(await db.services.findMany());

      break;

    case 'POST':
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
      break;

    default:
      res.status(500).send({
        error: 'Something went wrong!!!!',
      });
      break;
  }
};

export default servicesHander;
