import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { loginUser } from "../../features";
import { FormSubmit, InputChange } from "../../utils/TypeScript";

const LoginForm = () => {
  const initialState = { email: "", password: "" };

  const [userLogin, setUserLogin] = useState(initialState);

  const { email, password } = userLogin;

  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleChangeInput = (e: InputChange) => {
    const { value, name } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();

    dispatch(loginUser(userLogin));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your email
        </label>
        <input
          name="email"
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="name@flowbite.com"
          required
          value={email}
          onChange={handleChangeInput}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your password
        </label>
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
          onChange={handleChangeInput}
        />

        <small
          className="relative float-right bottom-8 right-2 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </small>
      </div>

      <button
        type="submit"
        className="text-white cursor-pointer w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        disabled={email.length > 0 && password.length > 0 ? false : true}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
