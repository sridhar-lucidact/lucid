'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = void 0;
/*export const sendResponse: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const body ={message: 'Success'};
  return {
    statusCode: 200,
    body
  };
};*/
const ping = () => {
    console.log('Pinged...');
};
exports.ping = ping;
//# sourceMappingURL=lucid.js.map