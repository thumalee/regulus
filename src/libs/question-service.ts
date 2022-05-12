import { DynamoDB } from 'aws-sdk';
import { ASSESSMENT_TABLE } from '@libs/constants';
import { uuid } from '@libs/lambda';

export default class QuestionService {
  db: DynamoDB.DocumentClient;

  constructor(db: DynamoDB.DocumentClient) {
    this.db = db;
  }

  insert = async (question) => {
    const now = Date.now();
    const id = uuid();

    await this.db
      .batchWrite({
        RequestItems: {
          [ASSESSMENT_TABLE]: [
            {
              PutRequest: {
                Item: {
                  id,
                  sort: 'ITEM#HEADER',
                  updateTime: now,
                  createTime: now,
                  type: 'header',
                  gsk1sort: 'ACTIVE#9999999999',
                },
              },
            },
            {
              PutRequest: {
                Item: {
                  id,
                  sort: 'ITEM#WIP',
                  title: question.title,
                  name: question.name,
                  content: question.content,
                  updateTime: now,
                  createTime: now,
                  type: 'wip',
                  gsk1sort: 'ACTIVE#8888888888',
                },
              },
            },
          ],
        },
      })
      .promise();
      console.log(ASSESSMENT_TABLE);
    return { ...question, id };
  };

  
  getPublishedQuestionById = async (questionId:string, type:string) => {
    
    const params = {
      TableName: ASSESSMENT_TABLE,
      KeyConditionExpression: 'id = :hashKey and type = :type',
      ExpressionAttributeValues: {
        ':haskey' : questionId,
        ':type' : type
      },
    ScanIndexForward: false,
  };

    const response = await this.db.query(params).promise();
    // const response = {content: {}, type : "bla", name: "12",title: "1324"};
    return {...response};
  };
}
