import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import SampleService from './sample.service';

@Resolver('Sample')
export default class SampleResolver {
  constructor(private readonly sampleService: SampleService) {}

  @Query('findPost')
  findSample(@Args({ name: 'id', type: () => ID }) id: number) {
    return this.sampleService.findOne(id);
  }

  @Query('getPosts')
  getSamples() {
    return this.sampleService.findAll();
  }
}
