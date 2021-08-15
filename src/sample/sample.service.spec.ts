import { Test, TestingModule } from '@nestjs/testing';
import SampleService from './sample.service';

describe('SampleService', () => {
  let service: SampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleService],
    }).compile();

    service = module.get<SampleService>(SampleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a single sample using the id', () => {
    const result = service.findOne(1);
    expect(result.id).toEqual(1);
  });

  it('should get all samples', () => {
    const result = service.findAll();
    expect(result.length).toEqual(2);
  });
});
