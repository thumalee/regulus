import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import QuestionService from '@libs/question-service';
import { DynamoDB } from 'aws-sdk';

import schema from '../schema';

const questionService = new QuestionService(
  new DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000'
  })
);

const insert: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const inserted = await questionService.insert(event.body);

  return formatJSONResponse(200, inserted);
};

export default middyfy(insert);
