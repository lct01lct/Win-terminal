<script setup lang="ts">
  import { showNext } from './terminal';
  import commandExecutor from './core/commandExecutor';

  const iptRef = ref<HTMLElement | null>(null);
  const answerIsVisible = ref<boolean>(false);
  const iptVal = ref<string>('');
  const answer = ref<string>('');

  onMounted(() => {
    iptRef.value!.focus();
    iptRef.value!.addEventListener('keydown', function (e: KeyboardEvent) {
      if (e.keyCode === 13) {
        answerIsVisible.value = true;
        answer.value = commandExecutor(iptVal.value);
        this.blur();
        showNext({ iptVal: iptVal.value, optVal: answer.value });
      }
    });
  });
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
