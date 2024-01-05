"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [ error, setError ] = useState(null);
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.error) {
      setError(res.error);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  });

  return (
    <div className="h-[calc(100vh-9rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="flex flex-col w-3/12 min-w-72 gap-1">
        <h1 className="font-bold text-4xl">Sing in</h1>

        {
          error && (
            <span className="bg-red-600 py-3 px-4 rounded-md mt-4">
              { error }
            </span>
          )
        }

        <label htmlFor="email" className="text-sm">
          Email:
        </label>
        <input
          type="email"
          placeholder="nata@example.com"
          className="p-[calc(0.8rem)] rounded-md bg-slate-700"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
        />

        {errors.email && (
          <span className="text-red-600">{errors.email.message}</span>
        )}

        <label htmlFor="password" className="text-sm">
          Password:
        </label>
        <input
          type="password"
          placeholder="•••••••••••"
          className="p-[calc(0.8rem)] rounded-md bg-slate-700 "
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
        />

        {errors.password && (
          <span className="text-red-600">{errors.password.message}</span>
        )}

        <button
          type="submit"
          className="bg-green-800 py-2 rounded-md hover:bg-green-700 transition-all mt-4"
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
