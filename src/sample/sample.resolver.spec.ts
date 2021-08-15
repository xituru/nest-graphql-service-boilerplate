import { Test, TestingModule } from '@nestjs/testing';
import { Sample } from './sample.interfaces';
import SampleResolver from './sample.resolver';
import SampleService from './sample.service';

const mockSample: Sample = {
  id: 1,
  title: 'Mock Post',
};

const sampleServiceMock = {
  findOne: jest.fn((): Sample => mockSample),
  findAll: jest.fn((): Sample[] => [mockSample]),
};

describe('SampleResolver', () => {
  let resolver: SampleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SampleResolver,
        { provide: SampleService, useValue: sampleServiceMock },
      ],
    }).compile();

    resolver = module.get<SampleResolver>(SampleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should query for a single sample', () => {
    const result = resolver.findSample(1);
    expect(result.id).toEqual(1);
  });

  it('should query all samples', () => {
    const result = resolver.getSamples();
    expect(Array.isArray(result)).toEqual(true);
  });
});
