export const selectCategoriesMap = (state) => {
  return state.categories.categoriesData.reduce((accu, currObj) => {
    const { title, items } = currObj;
    accu[title.toLowerCase()] = items;
    return accu;
  }, {});
};

// const categoryMap = querySnapshot.docs.reduce((accu, currDocSnap) => {
//   const { title, items } = currDocSnap.data();
//   accu[title.toLowerCase()] = items;
//   return accu;
// }, {});
