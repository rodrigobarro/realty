import fastifyEnv from "@fastify/env";
import mongodb from "@fastify/mongodb";
import fastifyPlugin from "fastify-plugin";

const config = async (app: any, options: any) => {
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

  app.register(fastifyEnv, envOptions);
  app.register(mongodb, {
    forceClose: true,
    url: "mongodb://admin:password@0.0.0.0:27017/?authSource=admin",
  });
};

export default config;
