import { IsEmail, Length } from 'class-validator';

export class UserInfo {
  @IsEmail()
  email: string;

  @Length(2,40)
  name: string;

  @Length(4,40)
  password: string;
  
  @Length(4, 20)
  username: string;
}
