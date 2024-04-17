import Fastify from "fastify";
import proxy from "@fastify/http-proxy";
const server = Fastify();

server.register(proxy, {
  upstream: "http://localhost:8000",
  prefix: "/accounts",
  http2: false,
});

server.register(proxy, {
    upstream: "http://localhost:8000",
    prefix: "/chat",
    http2: false,
  });

server.listen({ port: 3000 });
