import { tableUniDriverFactory } from './Table.uni.driver';

export const tablePrivateUniDriverFactory = (base, ...args) => {
  const publicDriver = tableUniDriverFactory(base, ...args);
  return {
    ...publicDriver,
    getInnerHtml: () => base._prop('innerHTML'),
    getCellTextAt: async (rowIndex, cellIndex) =>
      (await publicDriver.getCell(rowIndex, cellIndex))._prop('textContent'),
  };
};
