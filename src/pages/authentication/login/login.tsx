import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";

import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthService from "@/services/AuthService";
import { useStore } from "@/stores";
import { AxiosError, AxiosResponse } from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { setAuthToken } = useStore();
  const _authService = AuthService();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    _authService
      .login(data.email, data.password)
      .then((res: AxiosResponse) => {
        setAuthToken(res.data?.data?.access_token);
        setIsLoading(false);
        toast.success("Login successful. Welcome back!");
        navigate("/", { replace: true });
      })
      .catch((error: AxiosError) => {
        const { response } = error;

        if (response?.status === 401) {
          toast.error("Email or password incorrect. Please try again.");
        } else {
          toast.error("Oops! Something went wrong.");
        }
        setIsLoading(false);
      });
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h3>Dolce</h3>
        <h4>Login to your account</h4>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              type="text"
              {...register("email", {
                required: "Please enter your email.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter an valid email.",
                },
              })}
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm font-medium">
                {errors.email.message as string}
              </p>
            )}
          </div>
          <div>
            <div className="relative">
              <Input
                autoComplete="current-password"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Please enter your password.",
                })}
                placeholder="Password"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 cursor-pointer hover:bg-transparent"
                onClick={() => setShowPassword((prev) => !prev)}
                disabled={isLoading}
              >
                {showPassword && !isLoading ? (
                  <EyeIcon className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
                )}
              </Button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm font-medium">
                {errors.password.message as string}
              </p>
            )}
          </div>
          <div>
            <Link
              to="/signup"
              className="text-sm inline font-medium underline underline-offset-2"
            >
              Forgot password?
            </Link>
          </div>
          <Button className="w-full my-1" disabled={isLoading} type="submit">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Logging in...
              </>
            ) : (
              "Login"
            )}
          </Button>
          <div className="text-sm font-medium">
            Don't have an account?{" "}
            <Link to="/auth/signup" className="underline underline-offset-2">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
