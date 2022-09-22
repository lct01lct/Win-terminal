interface ICommandModule {
  commandName: string;
  default: (params?: string, options?: string) => string;
}

const commandFiles = import.meta.glob('./**/index.ts', { eager: true });

const commandMap: Record<string, ICommandModule['default']> = {};

for (const file in commandFiles) {
  const module = commandFiles[file] as ICommandModule;
  Object.assign(commandMap, {
    [module.commandName]: module.default,
  });
}

export default commandMap;
