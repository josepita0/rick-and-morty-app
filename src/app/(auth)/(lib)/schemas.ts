import { z } from "zod";

import { COMMON_VALIDATORS } from "@/lib/common/common.validators";

export const loginSchema = z.object({
  userName: COMMON_VALIDATORS.STRING,

  password: COMMON_VALIDATORS.PASSWORD,
});

export interface IFormLogin extends z.infer<typeof loginSchema> {}

export const registerSchema = z.object({
  userName: COMMON_VALIDATORS.STRING,
  passwordValidation: z
    .object({
      password: COMMON_VALIDATORS.PASSWORD,
      confirmPassword: COMMON_VALIDATORS.PASSWORD,
    })
    .superRefine(({ password, confirmPassword }, ctx) => {
      if (password !== confirmPassword) {
        ctx.addIssue({
          code: "custom",
          message: "Las contraseñas no coinciden",
          path: ["confirmPassword"],
        });
      }
    }),
});

export interface IFormRegister extends z.infer<typeof registerSchema> {}
