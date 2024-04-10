export default async function Router(app: any, options: any) {
    app.post('/accounts/create', async function() {
        return { hello: 'world' };
    });
}
