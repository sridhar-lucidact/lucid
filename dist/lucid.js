'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/*export const sendResponse: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const body ={message: 'Success'};
  return {
    statusCode: 200,
    body
  };
};*/
exports.default = {
    ping: () => {
        console.log('Pinged...');
    }
};
//# sourceMappingURL=lucid.js.map