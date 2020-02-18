export const getDepth = (item, childrenProperty) => {
  // returns depth of item and children
  let depth = 0;

  if (item[childrenProperty]) {
    item[childrenProperty].forEach(d => {
      const tmpDepth = getDepth(d, childrenProperty);

      if (tmpDepth > depth) {
        depth = tmpDepth;
      }
    });
  }

  return depth + 1;
};

export const getValuesByKey = (data, key, childrenProp) => {
  const values = [data[key]];
  if (data[childrenProp]) {
    data[childrenProp].forEach(item => {
      values.push(...getValuesByKey(item, key, childrenProp));
    });
  }

  return values;
};

export const removeFromTree = (items, position, childrenProperty) => {
  const lastIndex = position.length - 1;
  let itemsRemoveCandidate = items;
  position.forEach((pos, index) => {
    if (index === lastIndex) {
      itemsRemoveCandidate.splice(pos, 1)[0]; // eslint-disable-line no-unused-expressions
    } else {
      itemsRemoveCandidate = itemsRemoveCandidate[pos][childrenProperty];
    }
  });

  return items;
};

export const addToTree = (items, item, position, childrenProperty) => {
  const lastIndex = position.length - 1;
  let itemsAddCandidate = items;
  position.forEach((pos, index) => {
    if (index === lastIndex) {
      itemsAddCandidate.splice(pos, 0, item); // eslint-disable-line no-unused-expressions
    } else {
      if (!itemsAddCandidate[pos][childrenProperty]) {
        itemsAddCandidate[pos][childrenProperty] = [];
      }
      itemsAddCandidate = itemsAddCandidate[pos][childrenProperty];
    }
  });

  return items;
};
