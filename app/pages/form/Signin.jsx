"use client";

import Input from "@/app/components/Input";
import React, { useReducer, useState } from "react";
import { User } from "@/app/request/user";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { login } from "@/app/redux/slices/authSlice";
import { useRouter } from "next/router";

export default function Signin() {
  const dispatch = useAppDispatch();

  // const navigate = useRout();

  const userInstance = new User();

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    role: "ADMIN",
    matricule_or_email: "",
    password: "",
  });

  const handleChange = (e, fieldName) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [fieldName]: value,
    });
    // console.log(formData)
  };

  const onSubmit = () => {
    // dispatch(login(formData))
    userInstance.userLogin(dispatch, formData, navigate, setIsLoading);
  };
  return (
    <div>
      <h1 className="mb-4 text-center text-2xl font-semibold">Login</h1>
      <form action="#" method="POST">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            email
          </label>
          <Input
            type="email"
            id="email"
            onChange={(e) => handleChange(e, "matricule_or_email")}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-800">
            Password
          </label>
          <Input
            type="password"
            id="password"
            onChange={(e) => handleChange(e, "password")}
          />
        </div>
        {/* <div className="mb-4 flex items-center">
            <Input type='checkbox' id="remember" />
            <label htmlFor="remember" className="text-green-900 ml-2">Remember Me</label>
          </div> */}
        <div className="mb-6 text-blue-500">
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
        </div>
        <button
          type="button"
          onClick={() => onSubmit()}
          className="w-full rounded-md bg-red-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
