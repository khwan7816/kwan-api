import { Request, Response } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';

const handler = async (req: Request, res: Response) => {
  const { params, body } = req

  const result: any = {};

  console.log('cafe patch')

  return res.status(OK).json(result);
}

export default {
  route: '',
  handler
};
