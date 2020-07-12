import path from 'path'
import _ from 'lodash'
import logger from '@shared/Logger';

import { Router } from 'express';

class Controller {
  // Route Name
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  setRoute(router: Router, routePath: string, routes: Array<string>) {
    _.forEach(routes, async route => {
      try {
        const apiFile = await import(path.join(routePath + route));
        const api = apiFile.default
    
        switch (this.checkHandler(route)) {
          case 'get':
            router.get(api.route || '/:id', api.handler);
            break;
          case 'post':
            router.post(api.route || '/:id', api.handler);
            break;
          case 'put':
            router.put(api.route || '/:id', api.handler);
            break;
          case 'patch':
            router.patch(api.route || '/:id', api.handler);
            break;
          case 'delete':
            router.delete(api.route || '/:id', api.handler);
            break;
          default:
            router.get(api.route || '/', api.handler);
            break;
        }
          
      } catch (e) {
        logger.error(`Route Set Error: ${this.name}`, e)
      }
    });
  }

  checkHandler(fileName: String) {
    if (fileName.indexOf('.get.') > -1) {
      return 'get'
    } else if (fileName.indexOf('.put.') > -1) {
      return 'put'
    } else if (fileName.indexOf('.patch.') > -1) {
      return 'patch'
    } else if (fileName.indexOf('.delete.') > -1) {
      return 'delete'
    } else if (fileName.indexOf('.post.') > -1) {
      return 'post'
    } else {
      return 'list'
    }
  }
}

export default Controller;
