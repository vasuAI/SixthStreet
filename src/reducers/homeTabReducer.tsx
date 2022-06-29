const initialState = {
  data: [],
};

const menReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case 'MEN_DATA':
      return {...state, data: payload};
    default:
      return {...state};
  }
};
const womenReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case 'WOMEN_DATA':
      return {...state, data: payload};
    default:
      return {...state};
  }
};
const kidsReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case 'KIDS_DATA':
      return {...state, data: payload};
    default:
      return {...state};
  }
};
export {menReducer, womenReducer, kidsReducer};
// const initialState = {
//   menData: [],
//   womenData: [],
//   kidsData: [],
// };

// const homeTabReducer = (state = initialState, action: any) => {
//   const {type, payload} = action;
//   switch (type) {
//     case 'MEN_DATA':
//       return {...state, menData: payload};
//     case 'WOMEN_DATA':
//       return {...state, data: payload};
//     case 'KIDS_DATA':
//       return {...state, data: payload};
//     default:
//       return {...state};
//   }
// };
// export default homeTabReducer;
