
module.exports = Object.freeze({
    
    //Error codes
    SUCCESSFUL_CODE: 0,
    FAILED_CODE: 1,

    //Login's
    AUTH_LOGIN_FAILED_CODE: 1,
    AUTH_LOGIN_SUCCESS_MESSAGE: "Authenticate successfully",
    AUTH_LOGIN_FAILED_MESSAGE: "Authenticate failed",

    //Registration's
    AUTH_SIGNUP_FAILED_CODE: 1,
    AUTH_SIGNUP_SUCCESS_MESSAGE: "Registrate successfully",
    AUTH_SIGNUP_FAILED_MESSAGE: "Something went wrong on registration",


    //JWT's
    AUTH_JWT_SUCCESS_CODE: 0,
    AUTH_JWT_INVALID_TOKEN_CODE: 1,
    AUTH_JWT_UNAUTHORIZE_CODE: 2,
    AUTH_JWT_INVALID_TOKEN_MESSAGE: "Access denied! Invalid token",
    AUTH_JWT_UNAUTHORIZE_MESSAGE: "Access denied! Unauthorized",

    //Validator's
    VAL_IS_REQUIRED_MESSAGE: "is required",
    VAL_IS_BEING_USED_MESSAGE: "is being used",
    VAL_IS_NOT_EMAIL_MESSAGE: "must have email format",
    VAL_IS_NOT_MATCHED_MESSAGE: "do not match",
})

