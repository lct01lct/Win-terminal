<script setup lang="ts">
  import { showNext, commandedStack, currentCommandIdx, setCurrentCommandIdx } from './terminal';
  import commandExecutor from './core/commandExecutor';

  const iptRef = ref<HTMLElement | null>(null);
  const answerIsVisible = ref<boolean>(false);
  const iptVal = ref<string>('');
  const answer = ref<string>('');

  onMounted(() => {
    iptRef.value!.focus();
  });

  const handleKeyup = (e: KeyboardEvent) => {
    if (pressBoradEventMap[e.keyCode]) {
      e.preventDefault();
      pressBoradEventMap[e.keyCode]();
    }
  };

  let firstPressArrow = true; // 是否第一次按上箭头
  const pressBoradEventMap: Record<number, (...args: any[]) => any> = {
    // 回车
    13: function () {
      // 执行命令
      answerIsVisible.value = true;
      answer.value = commandExecutor(iptVal.value);
      iptRef.value!.blur();
      showNext({ iptVal: iptVal.value, optVal: answer.value });

      // 更新命令栈
      iptVal.value && commandedStack.push(iptVal.value);
      setCurrentCommandIdx(commandedStack.length - 1);
    },

    // 上箭头
    38: function () {
      if (firstPressArrow) {
        iptVal.value = commandedStack[currentCommandIdx] || '';
        firstPressArrow = false;
      } else {
        setCurrentCommandIdx(currentCommandIdx - 1);
        iptVal.value = commandedStack[currentCommandIdx];
      }
    },

    // 下箭头
    40: function () {
      if (currentCommandIdx === commandedStack.length - 1) {
        iptVal.value = '';
        firstPressArrow = true;
      } else {
        firstPressArrow = false;
        setCurrentCommandIdx(currentCommandIdx + 1);
        iptVal.value = commandedStack[currentCommandIdx];
      }
    },
  };
</script>

<template>
  <div class="terminal-item">
    <div class="terminal-current-path">
      C:\Users\User&gt
      <input
        type="text"
        class="terminal-item-ipt"
        spellcheck="false"
        ref="iptRef"
        v-model="iptVal"
        v-if="!answerIsVisible"
        @keyup="handleKeyup"
      />
      <span v-else class="terminal-item-prompt">{{ iptVal }}</span>
    </div>
    <div class="terminal-current-answer" v-if="answerIsVisible">{{ answer }}</div>
  </div>
</template>

<style scoped lang="scss">
  .terminal-item {
    margin-top: 20px;
    .terminal-current-path {
      .terminal-item-ipt {
        outline: none;
        border: none;
        color: #fff;
        font-size: 16px;
        font-weight: 100;
        background-color: #000;
        width: 1000px;
      }
      .terminal-item-prompt {
        font-size: 16px;
        font-weight: 100;
      }
    }
  }
</style>
