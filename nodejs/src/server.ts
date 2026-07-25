import { createServer } from "node:http";
import { handleRequest } from "./routeryes.js";

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

const server = createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
