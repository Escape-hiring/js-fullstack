import SchemaBuilder from '@pothos/core';
import { pubsub } from './index.js';

export const builder = new SchemaBuilder({});

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      resolve: (_parent, _args, _ctx) => 'world'
    })
  })
});

builder.subscriptionType({
  fields: (t) => ({
    hello: t.string({
      subscribe: (_parent, _args, _ctx) => pubsub.subscribe('hello'),
      resolve: (payload) => payload
    })
  })
});

export const schema = () => builder.toSchema();
