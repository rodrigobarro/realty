import App from "../src/infra/http/app";

test("Create a new Account", async () => {
  const app = await App();
  const res = await app.inject({
    url: "/accounts/create",
    method: "POST",
  });
  expect(res.statusCode).toEqual(200);
  app.close();
});
