"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import FormGenerator from "@/components/forms-generator";
import { USER_LOGIN_FORM } from "@/constants/forms";



const LogInForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold ">Login</h2>
      <p>You will receive an an email with one time password</p>
      {USER_LOGIN_FORM.map((field) => (
        <FormGenerator
          key={field.id}
          {...field}
          errors={errors}
          register={register}
          name={field.name}
        />
      ))}
    </>
  );
};

export default LogInForm;
