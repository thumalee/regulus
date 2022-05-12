import { formatJSONResponse } from "@libs/api-gateway";
import QuestionService from "@libs/question-service";
import { DynamoDB } from "aws-sdk";

const questionService = new QuestionService(
    new DynamoDB.DocumentClient({
      region: 'localhost',
      endpoint: 'http://localhost:8000'
    })
  );

  export default async (event) => {
    const questionId = event.pathParameters.qid;
    const type = event.pathParameters.type;
    const response = await questionService.getPublishedQuestionById(questionId, type);
    return formatJSONResponse(200, response);
  };