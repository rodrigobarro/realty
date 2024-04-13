import App from "./app";

const start = async () => {
  try {
    const serverPort: number = Number(process.env.HTTP_PORT) || 8000;
    const server = await App({
      logger: {
        level: "info",
        transport: {
          target: "pino-pretty",
        },
      },
    });
    await server.listen({ port: serverPort });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
