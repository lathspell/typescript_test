# hello-world-ts

> Minimal Node.js/TypeScript HTTP server test project.

## Overview

A small playground service exposing a single `/hello` endpoint, used to try out a plain `node:http` router setup with TypeScript, no framework.

## Technical Setup

- **Language / Framework**: TypeScript / plain Node.js (`node:http`), no web framework
- **Runtime**: Node.js >= 24
- **Build tool**: `tsc` (TypeScript compiler)
- **Sources**: `src/`
  - `server.ts` — HTTP server bootstrap
  - `router.ts` — merges route maps and dispatches requests
  - `types.ts` — shared `RouteHandler` / `RouteMap` types
  - `modules/hello/` — example module (`hello.controller.ts`, `hello.module.ts`)
- **Configuration**: `PORT` environment variable (defaults to `3000`)

## Local Development

Prerequisites: Node.js >= 24

```bash
npm install
npm run build       # compile TypeScript to dist/
npm start           # run compiled server (dist/server.js)
npm run typecheck   # type-check without emitting output
```

Once running, the server listens on `http://localhost:3000` (or `$PORT`):

```bash
curl http://localhost:3000/hello
```
