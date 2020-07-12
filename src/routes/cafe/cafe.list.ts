import { Request, Response } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';

const handler = async (req: Request, res: Response) => {
  const { params, query } = req

  const result: any = [1, 2, 3];

  console.log('cafe index')

  return res.status(OK).json(result);
}

export default {
  route: '',
  handler
};
