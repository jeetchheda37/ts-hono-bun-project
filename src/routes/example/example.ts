import { Hono } from "hono";
import { exampleHello } from "../../controllers/example/example";
const exampleRoute = new Hono();

// Define All Routes here
exampleRoute.get("/", exampleHello);

export default exampleRoute;