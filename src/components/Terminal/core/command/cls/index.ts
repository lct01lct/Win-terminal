import { ios } from '../../../terminal';
import useTerminalStore from '../../../store/use-terminal-store';
/**
 * cls 清屏命令
 */
export default function rdCommand(params: string[], options: string): string {
  const terminalStore = useTerminalStore();
  const scrollHeight: number =
    ios.slice(1, ios.length).reduce((initVal, item) => {
      return (
        initVal +
        (((item.optVal ? 1 : 0) + 1) * terminalStore.ioHeight + terminalStore.marginHeight)
      );
    }, 0) +
    terminalStore.initialInfoHeight +
    terminalStore.ioHeight +
    terminalStore.marginHeight;

  const oWrapper: HTMLElement = document.querySelector('.terminal-wrapper')!;
  oWrapper.scrollTop = scrollHeight;

  console.log(scrollHeight);
  return '';
}

export const commandName: string = 'cls';
