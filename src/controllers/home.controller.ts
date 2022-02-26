import * as express from 'express';
import { controller, Controller, httpGet, request, response } from 'inversify-express-utils';

@controller('/')
export class HomeController implements Controller {
  @httpGet('/')
  private getHome(@request() req: express.Request, @response() res: express.Response) {
    return res.send('Hello, world!');
  }
}
