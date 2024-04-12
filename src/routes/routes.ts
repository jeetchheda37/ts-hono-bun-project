import { Hono } from 'hono';
import exampleRoute from './example/example';
const app = new Hono();

// Your Routes go Here
app.route("/example", exampleRoute);

export const routes = app;