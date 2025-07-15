import { createServer } from 'node:http';
import { createYoga } from 'graphql-yoga';
import { createPubSub } from 'graphql-yoga';
import { builder } from './schema.js';

export const pubsub = createPubSub<{
  hello: [string];
}>();

const yoga = createYoga({
  schema: builder.toSchema()
});

let i = 0;
setInterval(() => {
  i++;
  pubsub.publish('hello', `world ${i}`);
}, 5_000);

const server = createServer(yoga);
const port = 1234;

server.listen(port, () => {
  console.info(`Server is running on http://localhost:${port}/graphql`);
});
