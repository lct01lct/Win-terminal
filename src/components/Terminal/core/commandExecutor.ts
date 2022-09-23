import commandMap from './command/commandMap';

export interface ICommand {
  func: string; // 命令
  params?: string[]; // 命令参数
  options?: string; // 命令配置项
}

const commandExecutor = (text: string = ''): string => {
  text = text.trim();

  if (!text) {
    return '';
  }

  const { func, params, options } = parsePrompt(text);

  if (!commandMap[func]) {
    return `\'${func}\' 不是内部或外部命令，也不是可运行的程序
    或批处理文件。`;
  } else {
    return commandMap[func](params, options);
  }
};

function parsePrompt(text: string): ICommand {
  const content: string[] = text.split(' ').filter((item) => item);
  return {
    func: content[0],
    params: content.slice(1, content.length - 1) || '',
    options: content[content.length - 1] || '',
  };
}

export default commandExecutor;
