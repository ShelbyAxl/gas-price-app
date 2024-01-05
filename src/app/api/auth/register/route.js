import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const data = await request.json();

    const emailFound = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    const userFound = await prisma.user.findUnique({
      where: {
        username: data.username,
      },
    });

    if (emailFound)
      return NextResponse.json(
        {
          message: "Email already exist!",
        },
        {
          status: 400,
        }
      );

    if (userFound)
      return NextResponse.json(
        {
          message: "Username already exist!",
        },
        {
          status: 400,
        }
      );

    const hashPass = await bcrypt.hash(data.password, 10);
    const newUser = await prisma.user.create({
      data: {
        username: data.username,
        phone: data.phone,
        email: data.email,
        password: hashPass,
      },
    });

    const { password: _, ...user } = newUser;
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
