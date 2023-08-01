const crypto = require('crypto');

// const secretKey = crypto.randomBytes(64).toString('hex');

module.exports ={
  node: {
      NODE_ENV: "DEVELOPMENT",
  },
  token: {
      TOKEN_EXPIRE_TIME: 86400, 
  },
  secretKey: {
      JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  },
  statusMessage: {
    PERMISSION_DENIED: "PERMISSION_DENIED",
    BAD_REQUEST: "BAD_REQUEST",
    USER_NOT_FOUND: "USER_NOT_FOUND",
    USER_ALREADY_EXIST: "USER_ALREADY_EXIST",
    INVALID_USERNAME_OR_PASSWORD: "INVALID_USERNAME_OR_PASSWORD",
    INVALID_PHONE_NUMBER_OR_PASSWORD: "INVALID_PHONE_NUMBER_OR_PASSWORD",
    INVALID_PHONE_NUMBER: "INVALID_PHONE_NUMBER",
    INVALID_OTP_CODE: "INVALID_OTP_CODE",
    INVALID_PHONE_NUMBER_OR_OTP_CODE: "INVALID_PHONE_NUMBER_OR_OTP_CODE",
    INVALID_PASSWORD: "INVALID_PASSWORD",
    INVALID_USER_ID: "INVALID_USER_ID",
    CONNECTION_ERROR: "CONNECTION_ERROR",
    TOKEN_EXPIRED: "TOKEN_EXPIRED",
    CAR_NOT_FOUND: "CAR_NOT_FOUND",
    FORM_NOT_FOUND: "FORM_NOT_FOUND",
    NO_BRAND_FOUND: "NO_BRAND_FOUND",
    NO_MODEL_FOUND: "NO_MODEL_FOUND",
    NO_YEAR_FOUND: "NO_YEAR_FOUND",
    NO_FORM_TYPE_FOUND: "NO_FORM_TYPE_FOUND",
    NO_PEROID_FOUND: "NO_PEROID_FOUND",
    OTP_NOT_FOUND: "OTP_NOT_FOUND",
    SUCCESS:"SUCCESS",
    FULL_REQUEST: "Full Request for day",
    NO_FOUND_CARPRICE: "NO_FOUND_CARPRICE",
    QUESTION_LIST_NOT_FOUND: "QUESTION_LIST_NOT_FOUND",
      USERNAME_ALREADY: "USERNAME ALREADY EXISTS",
      USER_DELETED_SUCCESSFULLY: "USER DELETED SUCCESSFULLY",
  },
  // role: {
  //     ADMIN_ROLE: "ADMIN",
  //     USER_ROLE: "USER",
  // },
}