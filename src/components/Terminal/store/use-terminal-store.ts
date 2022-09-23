import { defineStore } from 'pinia';

export default defineStore('terminal-store', {
  state() {
    return {
      terminalContainerHeight: 1400, // 终端容器默认高度

      ioHeight: 21, // 每个 io 的高度

      marginHeight: 20, // 每个 io 组之间的 margin 值

      initialInfoHeight: 41.6, // 初始提示信息高度
    };
  },
});
