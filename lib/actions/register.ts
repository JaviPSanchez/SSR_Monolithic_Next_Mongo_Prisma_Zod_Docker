"use server";

// import { revalidatePath, revalidateTag } from "next/cache";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  //To validate en the backend
  const validateFields = RegisterSchema.safeParse(values);
  console.log(validateFields);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, email, password } = validateFields.data;
  //Hash Password
  const hashedPassword = await bcrypt.hash(password, 10);
  // Check if email exist already
  const existingUser = await getUserByEmail(email);
  // Send error
  if (existingUser) {
    return { error: "Email already in use!" };
  }
  // Creamos user
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //TODO: Send verification token email

  return { success: "User created!" };

  //NextJS Cash Options (With StartTransition does it automatically)
  //   revalidatePath();
  //   revalidateTag();
};
