import Fastify, { FastifyInstance } from "fastify";
import routes from "./api/api";
import config from "./config/index";

const App = async (options = {}): Promise<FastifyInstance> => {
  const app = Fastify(options);
  await app.after();
  app.register(config);
  app.register(routes);
  await app.ready();

  return app;
};

export default App;
