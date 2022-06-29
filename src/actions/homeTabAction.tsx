import EndPoint from '../utils/EndPoints';
import WebServices from '../utils/WebServices';

/**
 *
 * @returns Home Mens Action
 */
const homeMenAction = () => {
  console.log('homeMenAction');

  return (dispatch: {type: any; payload: any}) => {
    WebServices.getApiCall(
      EndPoint.HOME_MEN,
      (successCallback: any) => {
        console.log('successCallback', successCallback);

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
        console.log('successCallback', successCallback);

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
        console.log('successCallback', successCallback);

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
