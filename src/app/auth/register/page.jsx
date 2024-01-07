"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [ error, setError ] = useState(null);

  const onSubmit = handleSubmit( async (data) => {
    const res = await fetch("/api/auth/register", {
      method: 'POST',
      body: JSON.stringify({
        username: data.username,
        phone: data.phone,
        email: data.email,
        password: data.password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resJSON = await res.json()
    if(res.ok)router.push("/auth/login")
    else setError(resJSON.message)
  });

  return (
    <div className="h-[calc(100vh-9rem)] flex justify-center items-center">
      <form onSubmit={ onSubmit } className="flex flex-col w-3/12 min-w-72 gap-1">
        <h1 className="font-bold text-4xl">Sign up</h1>

        {
          error && (
            <span className="bg-red-600 py-3 px-4 rounded-md mt-4">
              { error }
            </span>
          )
        }
        
        <label htmlFor="usarname" className="text-sm">
          Username:
        </label>
        <input
          type="text"
          placeholder="NatanaelCano"
          className="p-[calc(0.8rem)] rounded-md bg-slate-700 "
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
        />
        {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
        )}

        <label htmlFor="Phone:" className="text-sm">
          Phone:
        </label>
        <input
          type="text"
          placeholder="555-213-9000"
          className="p-[calc(0.8rem)] rounded-md bg-slate-700 "
          {...register("phone", {
            required: {
              value: true,
              message: "Phone is required",
            },
          })}
        />
        {errors.phone && (
          <span className="text-red-500">{errors.phone.message}</span>
        )}

        <label htmlFor="email" className="text-sm">
          Email:
        </label>
        <input
          type="email"
          placeholder="nata@example.com"
          className="p-[calc(0.8rem)] rounded-md bg-slate-700 "
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
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
          <span className="text-red-500">{errors.password.message}</span>
        )}

        <button
          type="submit"
          className="bg-green-800 py-2 rounded-md hover:bg-green-700 transition-all mt-4"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
