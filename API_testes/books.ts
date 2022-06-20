import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const books = new Map<string, any>();
books.set('1', {
    id: 1,
    title: 'Alice no pais das maravilhas',
    author: 'garry baskenbauer',
    nickname: 'garry'
});

const router = new Router();
router
    .get('/', ({ response }) => {
        response.body = 'hello word';
    })
    .get('/book', ({ response }) => {
        response.body = Array.from(books.values());
    })
    .get('/book/:id', ({ response, params }) => {
        response.body = params?.id && books.has(params.id) && books.get(params.id);
    })
    .get('/author/:nickname', ({ response, params }) => {
        response.body = params?.nickname && books.has(params.nickname) && books.get(params.nickname);
    })

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());


await app.listen({ port: 8000 });