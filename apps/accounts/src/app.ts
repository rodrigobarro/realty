import Fastify, { FastifyInstance } from "fastify";
import fastifyEnv from "@fastify/env";

const App = async (options = {}): Promise<FastifyInstance> => {
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

  const envOptions = {
    confKey: "config",
    schema: envSchema,
    dotenv: true,
    data: process.env,
  };

  const app = Fastify(options);
  app.register(fastifyEnv, envOptions);
  await app.after();

  // routes
  app.get("/", async (request, reply) => {
    return { hello: "world" };
  });

  app.post("/accounts/create", async (request, reply) => {
    return { msg: "Account created"};
  });

  await app.ready();

  return app;
};

export default App;
