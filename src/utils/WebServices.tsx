import Common from './Common';

/**
 *
  @param {} endPoint
  @param {} successCallBack
  @param {} failureCallBack
 */
const getApiCall = (
  endPoint: any,
  successCallBack: any,
  failureCallBack: any,
) => {
  Common.axiosInstance
    .get(endPoint)
    .then(response => {
      successCallBack(response);
    })
    .catch(error => {
      failureCallBack(error);
    });
};

/**
 * @exports
 */
export default {getApiCall};
