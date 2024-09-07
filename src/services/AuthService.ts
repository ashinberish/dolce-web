import { axios } from "./AxiosService";

const userEndpointPrefix = "/user";

const AuthService = () => {
  const login = (email: string, password: string) => {
    return axios.post(userEndpointPrefix + "/login", {
      email: email,
      password: password,
    });
  };

  const signup = (email: string, password: string) => {
    return axios.post(userEndpointPrefix + "/login", {
      email: email,
      password: password,
    });
  };

  return { login, signup };
};
export default AuthService;
