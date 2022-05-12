import middy from '@middy/core';
import jsonBodyParser from '@middy/http-json-body-parser';
import Anylogger from 'anylogger';

export const middyfy = (handler) => {
  return middy(handler).use(jsonBodyParser());
};

export const createLogger = (module: string) => new Anylogger(module);

export { v4 as uuid } from 'uuid';
