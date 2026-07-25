import type { IncomingMessage, ServerResponse } from "node:http";

export type RouteHandler = (req: IncomingMessage, res: ServerResponse) => void;
export type RouteMap = Record<string, Record<string, RouteHandler>>;
