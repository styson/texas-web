import { buildResponse } from '../util/util';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { getUser, putUser } from '../util/dynamo';
import { UserInfo } from '../interfaces/UserInfo';

const client = new DynamoDBClient({
  region: 'us-west-2'
});

export async function register(userInfo: UserInfo) {
  const email = userInfo.email.trim();
  const name = userInfo.name.trim();
  const password = userInfo.password.trim();
  const username = userInfo.username.trim().toLowerCase();

  
  if (!username || !email || !name || !password) {
    return buildResponse(401, 'all fields are required');
  }
  
  // check for existing user
  // const user = await client.send()
  const user = await getUser(userInfo);

  if (user) {
    return buildResponse(401, 'user already exists');
  }

  const response = await putUser(userInfo);
  return buildResponse(200, 'user registered');
}
