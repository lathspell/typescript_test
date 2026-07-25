import type { IncomingMessage, ServerResponse } from "node:http";
import type { RouteMap } from "./types.js";
import { helloRoutes } from "./modules/hello/hello.module.js";

function mergeRoutes(...routeMaps: RouteMap[]): RouteMap {
  const merged: RouteMap = {};
  for (const routeMap of routeMaps) {
    for (const [method, handlersByPath] of Object.entries(routeMap)) {
      merged[method] = { ...merged[method], ...handlersByPath };
    }
  }
  return merged;
}

const routes: RouteMap = mergeRoutes(helloRoutes);

export function handleRequest(req: IncomingMessage, res: ServerResponse): void {
  const method = req.method ?? "GET";
  const url = req.url ?? "/";

  const handler = routes[method]?.[url];

  if (!handler) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
    return;
  }

  handler(req, res);
}
