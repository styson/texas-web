import { UserInfo } from './interfaces/UserInfo';
import { buildResponse } from './util/util';

const healthPath = '/health';
const loginPath = '/login';
const registerPath = '/register';
const verifyPath = '/verify';

const loginService = require('./service/login');
const registerService = require('./service/register');
const verifyService = require('./service/verify');

export const handler = async (event: any) => {
  console.log('Request Event: ', event);
  
  let response;
  
  switch(true) {
    case event.httpMethod === 'GET' && event.path === healthPath:
      response = buildResponse(200);
      break;
    case event.httpMethod === 'POST' && event.path === loginPath:
      const loginBody = JSON.parse(event.body);
      response = await loginService.login(loginBody);
      break;
    case event.httpMethod === 'POST' && event.path === registerPath:
      const registerBody = JSON.parse(event.body);
      const userInfo: UserInfo = {
        ...registerBody
      };
      response = await registerService.register(userInfo);
      break;
    case event.httpMethod === 'POST' && event.path === verifyPath:
      const verifyBody = JSON.parse(event.body);
      response = await verifyService.verify(verifyBody);
      break;
    default:
      response = buildResponse(404, '404 - Not Found');
      break;
  }
  
  return response;
};
