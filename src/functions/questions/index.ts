import handlerPath from '@libs/handler-resolver';
import schema from './schema';

export default {
  insert: {
    handler: `${handlerPath(__dirname)}/handlers/insert.default`,
    events: [
      {
        http: {
          method: 'post',
          path: 'questions',
          private: true,
          request: {
            schemas: {
              'application/json': schema,
            },
          },
        },
      },
    ],
  },
  
  getPublishedQuestionById: {
    handler: `${handlerPath(__dirname)}/handlers/getPublishedQuestionById.default`,
    events: [
      {
        http: {
          method: 'get',
          path: 'questions/{qId}/published',
        },
      },
    ],
  },
};
