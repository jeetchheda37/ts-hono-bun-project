import {Context} from "hono";
import Example from "../../models/example/example";

export const exampleHello = async (ctx: Context) => {
    let exm = new Example();
    return ctx.text(exm.sayHello());
};