import { exec } from 'child_process';
import { promisify } from 'util';

export const EXEC_PROMISE = 'EXEC_PROMISE';

export const execPromiseProvider = {
  provide: EXEC_PROMISE,
  useValue: promisify(exec),
};
