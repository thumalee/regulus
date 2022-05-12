import handlerPath from '@libs/handler-resolver';
import schema from './schema';

export default {
  handler: `${handlerPath(__dirname)}/handler.default`,
  events: [
    {
      http: {
        method: 'post',
        path: 'hello',
        private: true,
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
