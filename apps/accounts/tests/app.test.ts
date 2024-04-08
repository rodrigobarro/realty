import fastify from "fastify";
import App from "../src/app";

function build(opts = {}) {
  const app = fastify(opts);
  app.get("/", async function (request, reply) {
    return { hello: "world" };
  });

  return app;
}

test("Test root route", async () => {
  const app = build();
  const res = await app.inject({
    url: "/",
  });
  expect(res.json()).toEqual({ hello: "world" });
});

test("Test /accounts/create route", async () => {
  const app = await App();
  const res = await app.inject({
    url: "/accounts/create",
    method: "POST",
  });
  expect(res.statusCode).toEqual(200);
});
