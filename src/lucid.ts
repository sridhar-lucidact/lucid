'use strict';
import {APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult} from 'aws-lambda';
export const sendResponse: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const body ={message: 'Success'};
  return {
    statusCode: 200,
    body
  };
};
