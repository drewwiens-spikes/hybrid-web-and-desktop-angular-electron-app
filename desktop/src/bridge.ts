import { execFile } from 'child_process';
import { join } from 'path';

import { AppWindow } from '../../common/types';

const win = window as AppWindow;

const pathToExe = join('/', 'Windows', 'System32', 'calc.exe');

win.bridgeV1 = {
  launch: () => execFile(pathToExe),
};
