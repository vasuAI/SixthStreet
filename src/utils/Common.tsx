import axios from 'axios';

const BASE_URL = 'https://mobilecdn.6thstreet.com/resources/20190121/en-ae';

const $http = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

const STATUS_CODE = {
  success: 200,
  successAction: 201,
  notFound: 404,
  badRequest: 400,
  accountSuspend: 401,
  invalid: 422,
  timeout: 408,
  userNotFound: 410,
  userBlocked: 403,
};

/**
 * @exports
 */
export default {axiosInstance: $http, statusCode: STATUS_CODE};
