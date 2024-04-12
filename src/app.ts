import { Hono } from 'hono';
import { logger } from 'hono/logger';
import {routes} from "./routes/routes";

const app = new Hono();

//Logger
app.use(logger());

// Merge Your routes here
app.route("/", routes);

const server = Bun.serve({
    fetch: app.fetch,
    port: 8083,
});
console.log(`Listening on ${server.url}`);