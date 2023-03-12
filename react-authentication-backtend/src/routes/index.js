import { logInRoute } from "./logInRoute";
import { resetPasswordRoute } from "./resetPasswordRoute";
import { signUpRoute } from "./signUpRoute";
import { testRoute } from "./testRoute";
import { updateUserInfoRoute } from "./updateUserInfoRoute";
import { verifyEmailRoute } from "./verifyEmailRoute";
import { forgotPasswordRoute } from "./forgotPasswordRoute";
import { getGoogleOauthUrlRoute } from "./getGoogleOauthUrlRoute";
import { googleOauthCallbackRoute } from "./googleOauthCallbackRoute";

export const routes = [
  logInRoute,
  signUpRoute,
  resetPasswordRoute,
  testRoute,
  updateUserInfoRoute,
  verifyEmailRoute,
  forgotPasswordRoute,
  getGoogleOauthUrlRoute,
  googleOauthCallbackRoute,
];
