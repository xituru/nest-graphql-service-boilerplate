import { Injectable } from '@nestjs/common';
import Sample from './models/sample.model';

@Injectable()
export default class SampleService {
  #samples: Sample[] = [
    { id: 1, title: 'Lorem Ipsum' },
    { id: 2, title: 'Dolor' },
  ];

  findOne(sampleId: number) {
    return this.#samples.find(({ id }) => id === sampleId);
  }

  findAll() {
    return this.#samples;
  }
}
