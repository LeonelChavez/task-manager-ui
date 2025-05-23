import { TaskRepository } from './task-repository';

describe('TaskRepository', () => {
  it('should create an instance', () => {
    expect(new TaskRepository()).toBeTruthy();
  });
});
