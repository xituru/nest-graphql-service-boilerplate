import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import SampleResolver from './sample.resolver';
import SampleService from './sample.service';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: ['**/*.graphql'],
    }),
  ],
  providers: [SampleResolver, SampleService],
})
export default class SampleModule {}
