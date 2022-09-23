<script setup lang="ts">
  import TerminalDefault from './terminal-default.vue';
  import TerminalItem from './terminal-item.vue';
  import { ios } from './terminal';

  onMounted(() => {
    const oTerminal: HTMLElement = document.querySelector('.terminal-container')!;
    oTerminal.addEventListener('click', function () {
      const oCurrentIpt: HTMLElement = document.querySelector('.terminal-item-ipt')!;
      oCurrentIpt.focus();
    });
  });
</script>

<template>
  <div class="terminal-wrapper">
    <div class="terminal-container">
      <TerminalDefault></TerminalDefault>
      <TerminalItem v-for="(item, index) in ios" :key="index"></TerminalItem>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .terminal-wrapper {
    overflow: auto;
    width: 1500px;
    height: 700px;
    background-color: #000;

    .terminal-container {
      width: 100%;
      height: 1400px;
      color: white;
      font-weight: 100;
      font-family: 'FZXiDengXian-Z06S';
    }
  }
</style>
