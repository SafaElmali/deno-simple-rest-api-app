import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/routes.ts";

const PORT = 3000;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`App started and listening on ${PORT} `);

await app.listen({ port: PORT });
