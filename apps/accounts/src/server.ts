import Fastify from "fastify";
import fastifyEnv from "@fastify/env";

const envSchema = {
  type: "object",
  required: ["NODE_ENV", "HTTP_PORT"],
  properties: {
    NODE_ENV: {
      type: "string",
    },
    HTTP_PORT: {
      type: "string",
    },
  },
};

const options = {
  confKey: "config",
  schema: envSchema,
  dotenv: true,
  data: process.env,
};

const initialize = async () => {
  const fastify = Fastify({ logger: true });
  fastify.register(fastifyEnv, options);
  await fastify.after();
  fastify.get("/", async (request, reply) => {
    return "Hello world!";
  });
  await fastify.ready();
  return fastify;
};

const start = async () => {
  try {
    const fastify = await initialize();
    await fastify.listen({ port: parseInt(process.env.HTTP_PORT ?? "8000") });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
