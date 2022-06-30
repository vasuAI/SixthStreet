import EndPoint from '../utils/EndPoints';
import WebServices from '../utils/WebServices';

/**
 *
 * @returns Home Mens Action
 */
const categoryMenAction = () => {
  return (dispatch: {type: any; payload: any}) => {
    WebServices.getApiCall(
      EndPoint.CATEGORY_MEN,
      (successCallback: any) => {
        dispatch({
          type: 'MEN_CATEGORY_DATA',
          payload: successCallback.data.data,
        });
      },
      (failureCallback: any) => {
        console.log('Not found', failureCallback);
      },
    );
  };
};
/***
 *
 */
const categoryWomenAction = () => {
  return (dispatch: {type: any; payload: any}) => {
    WebServices.getApiCall(
      EndPoint.CATEGORY_WOMEN,
      (successCallback: any) => {
        dispatch({
          type: 'WOMEN_CATEGORY_DATA',
          payload: successCallback.data.data,
        });
      },
      (failureCallback: any) => {
        console.log('Not found', failureCallback);
      },
    );
  };
};
const categoryKidsAction = () => {
  return (dispatch: {type: any; payload: any}) => {
    WebServices.getApiCall(
      EndPoint.CATEGORY_KIDS,
      (successCallback: any) => {
        dispatch({
          type: 'KIDS_CATEGORY_DATA',
          payload: successCallback.data.data,
        });
      },
      (failureCallback: any) => {
        console.log('Not found', failureCallback);
      },
    );
  };
};

/**
 * @exports
 */
export {categoryMenAction, categoryKidsAction, categoryWomenAction};
