export const tableSearch = (query: string, items: any, keys: string[]) => {
  const filteredItems = items.filter((item: any) =>
    keys.some((key) =>
      item[key] ? item[key].toLowerCase().includes(query.toLowerCase()) : ''
    )
  );

  return filteredItems;
};
