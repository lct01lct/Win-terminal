interface IIOItem {
  iptVal: string;
  optVal: string;
}

const ios = reactive<IIOItem[]>([
  {
    iptVal: '',
    optVal: '',
  },
]);

// 展示下一个 io
const showNext = (item: IIOItem) => {
  ios.push(item);
};

const commandedStack: string[] = []; // 命令栈
let currentCommandIdx: number = 0; // 当前指向命令栈的索引
const setCurrentCommandIdx = (idx: number) => {
  if (idx < 0) {
    idx = 0;
  } else if (commandedStack.length && idx > commandedStack.length - 1) {
    idx = commandedStack.length - 1;
  }
  currentCommandIdx = idx;
};

export { ios, showNext, commandedStack, currentCommandIdx, setCurrentCommandIdx };
