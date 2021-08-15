import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export default class Sample {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;
}
