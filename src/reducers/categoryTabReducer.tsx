const initialState = {
  data: [],
};

const menCategoryReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case 'MEN_CATEGORY_DATA':
      return {...state, data: payload};
    case 'WOMEN_CATEGORY_DATA':
      return {...state, data: payload};
    case 'KIDS_CATEGORY_DATA':
      return {...state, data: payload};
    default:
      return {...state};
  }
};
const womenCategoryReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case 'WOMEN_CATEGORY_DATA':
      return {...state, data: payload};
    default:
      return {...state};
  }
};
const kidsCategoryReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case 'KIDS_CATEGORY_DATA':
      return {...state, data: payload};
    default:
      return {...state};
  }
};
export {menCategoryReducer, womenCategoryReducer, kidsCategoryReducer};
