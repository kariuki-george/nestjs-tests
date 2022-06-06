import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'First nameof the user' })
  firstName: string;
  @Field(() => String, { description: 'last name' })
  lastName: string;
  @Field(() => String, { description: 'email name' })
  email: string;
  @Field(() => String, { description: 'role' })
  role: string;
}
