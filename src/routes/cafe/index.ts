import glob from 'glob'

import { Router } from 'express';
import Controller from '@shared/routes/Controller'

// Route file rule
const rule: string = '**/*.*.*(ts|js)';

// Init shared
const router = Router();

// API routes
const routes = glob.sync(rule, { cwd: __dirname });

// Route name
const routeName: string = 'cafe';

const controller: Controller = new Controller(routeName);
const controllerPath: string = __dirname + '/';

controller.setRoute(router, controllerPath, routes);

export default router;
