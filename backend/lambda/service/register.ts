import { buildResponse } from '../util/util';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { getUser, putUser } from '../util/dynamo';
import { UserInfo } from '../interfaces/UserInfo';

const client = new DynamoDBClient({
  region: 'us-west-2'
});

export async function register(userInfo: UserInfo) {
  // check for existing user
  const user = await getUser(userInfo);
  if (user) {
    return buildResponse(401, 'user already exists');
  }

  const response = await putUser(userInfo);
  return buildResponse(200, 'user registered');
}
