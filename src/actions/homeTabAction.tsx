import EndPoint from '../utils/EndPoints';
import WebServices from '../utils/WebServices';

/**
 *
 * @returns Home Mens Action
 */
const homeMenAction = () => {
  return (dispatch: {type: any; payload: any}) => {
    WebServices.getApiCall(
      EndPoint.HOME_MEN,
      (successCallback: any) => {
        dispatch({
          type: 'MEN_DATA',
          payload: successCallback.data.data,
        });
      },
      (failureCallback: any) => {
        console.log('Not found', failureCallback);
      },
    );
  };
};
const homeWomenAction = () => {
  return (dispatch: {type: any; payload: any}) => {
    WebServices.getApiCall(
      EndPoint.HOME_WOMEN,
      (successCallback: any) => {
        dispatch({
          type: 'WOMEN_DATA',
          payload: successCallback.data.data,
        });
      },
      (failureCallback: any) => {
        console.log('Not found', failureCallback);
      },
    );
  };
};
const homeKidsAction = () => {
  return (dispatch: {type: any; payload: any}) => {
    WebServices.getApiCall(
      EndPoint.HOME_KIDS,
      (successCallback: any) => {
        dispatch({
          type: 'KIDS_DATA',
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
export {homeMenAction, homeKidsAction, homeWomenAction};
