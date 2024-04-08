import { DynamoDBClient, GetItemCommand, GetItemCommandInput, PutItemCommand, PutItemCommandInput } from '@aws-sdk/client-dynamodb';
import { UserInfo } from '../interfaces/UserInfo';
import bcrypt from 'bcryptjs';
import { buildResponse } from './util';

const client = new DynamoDBClient({
  region: 'us-west-2'
});

export async function putUser(userInfo: UserInfo) {
  const hashedPassword = await bcrypt.hash(userInfo.password, 10);

  const input: PutItemCommandInput = {
    Item: {
      pk: {
        S: 'player',
      },
      sk: {
        S: `#${userInfo.username}`,
      },
      name: {
        S: userInfo.name,
      },
      email: {
        S: userInfo.email,
      },
      password: {
        S: hashedPassword,
      },
    },
    // ConditionExpression: 'attribute_not_exists',
    ReturnConsumedCapacity: 'TOTAL',
    TableName: 'texas-web',
  };

  const command = new PutItemCommand(input);

  try {
    return await client.send(command);
  }
  catch {
    return buildResponse(401, 'put error');
  }
}

export async function getUser(userInfo: UserInfo) {
  const input: GetItemCommandInput = {
    Key: {
      pk: {
        S: 'player',
      },
      sk: {
        S: `#${userInfo.username}`,
      },
    },
    TableName: 'texas-web',
  };

  const command = new GetItemCommand(input);
  const response = await client.send(command);

  return response.Item;
}
