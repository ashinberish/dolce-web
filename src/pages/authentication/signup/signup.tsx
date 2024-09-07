import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

import "./signup.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data: any) => {
    setIsLoading(true);

    console.log(data);
    // Handle signup logic with data.email, data.password, etc.
    // Remember to set isLoading back to false after the operation completes
  };

  const password = watch("password", "");

  return (
    <div className="login-wrapper">
      <div className="signup-card">
        <h3>Dolce</h3>
        <h4>Create an account</h4>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              type="text"
              {...register("email", {
                required: "Please enter an email.",
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
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Please enter a password.",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters.",
                  },
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
                {showPassword ? (
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
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords did not match.",
                })}
                placeholder="Confirm Password"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 cursor-pointer hover:bg-transparent"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                disabled={isLoading}
              >
                {showConfirmPassword ? (
                  <EyeIcon className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
                )}
              </Button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm font-medium">
                {errors.confirmPassword.message as string}
              </p>
            )}
          </div>
          <Button className="w-full my-1" disabled={isLoading} type="submit">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating
                Account...
              </>
            ) : (
              "Create Account"
            )}
          </Button>
          <div className="text-sm font-medium">
            Already have an account?{" "}
            <Link to="/auth/login" className="underline underline-offset-2">
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
