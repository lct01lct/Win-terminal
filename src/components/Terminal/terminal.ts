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

const showNext = (item: IIOItem) => {
  ios.push(item);
};

export { ios, showNext };
