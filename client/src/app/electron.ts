import { AppWindow } from '../../../common/types';

const win = window as AppWindow;

export const isElectron = !!win.bridgeV1;

export function launch() {
  if (isElectron) {
    win.bridgeV1.launch();
  }
}
