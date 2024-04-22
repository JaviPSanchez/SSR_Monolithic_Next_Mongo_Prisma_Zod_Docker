"use server";

// import { revalidatePath, revalidateTag } from "next/cache";
import * as z from "zod";
import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  //To validate en the backend
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "Email sent!" };

  //NextJS Cash Options (With StartTransition does it automatically)
  //   revalidatePath();
  //   revalidateTag();
};
