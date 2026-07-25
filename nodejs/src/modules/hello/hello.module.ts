import type { RouteMap } from "../../types.js";
import { getHello } from "./hello.controller.js";

export const helloRoutes: RouteMap = {
  GET: {
    "/hello": getHello,
  },
};
