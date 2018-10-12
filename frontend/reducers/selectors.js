export const selectAllCategories = state => {
  let categories = state.entities.categories;
  return Object.keys(categories).reverse().map(id => state.entities.categories[id]);
};

export const extractCategoryId = (category, name) => {
  Object.values(category).forEach(categ => {
    debugger;
    if (categ.name === name) {
      return categ.id;
    }
  });
};

// export const selectProjectsFromCategory = name => {
//   let category_id = undefined;
//   Object.keys(state.entites.categories).forEach(id =>
//     if (state.entities.categories[id].name === name) {
//       category_id = id;
//       return category_id;
//     }
//   )
// }
