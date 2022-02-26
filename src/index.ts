import 'reflect-metadata';
import * as express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import container from './config/ioc.container';
import './controllers/home.controller';

const PORT = 3000;

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
});

const app = server.build();

app.listen(PORT, () => {
  console.log(`✅ Server is listening on: localhost:${PORT}`);
});
