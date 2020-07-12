import glob from 'glob'
import _ from 'lodash'

import { Router } from 'express';
import UserRouter from './Users';

// Init router and path
const router = Router();

// Add sub-routes
// router.use('/users', UserRouter);

const rule = '*';
const routes = glob.sync(rule, {
  cwd: __dirname,
  ignore: '**/*.*(ts|js)'
});

_.forEach(routes, async route => {
  const file = await import(`./${route}`);
  router.use(`/${route}`,  file.default);
})

// Export the base-router
export default router;
