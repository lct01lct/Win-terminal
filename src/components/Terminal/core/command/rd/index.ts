import { ICommand } from '../../commandExecutor';

/**
 * rd 删除文件夹命令
 */
export default function rdCommand(params: string[], options: string): string {
  params.push(options);

  return '';
}

export const commandName: string = 'rd';
