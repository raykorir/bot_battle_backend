const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);


server.get("/", (req, res) => {
    const endpoints = Object.keys(router.db.getState());
    res.json({ endpoints });
});

server.listen(port, () => {
    console.log(`JSON Server is running on port http://localhost:${port}`);
});
