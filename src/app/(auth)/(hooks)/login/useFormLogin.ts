import { useInstanceForm } from "@/lib/hooks/use-instance-form";
import { IFormSections } from "@/components/builders/forms/form-builer.interface";

import { IFormLogin, loginSchema } from "@/app/(auth)/(lib)/schemas";
import { Input } from "@/components/ui/input";
export const useFormLogin = () => {
  const form = useInstanceForm<IFormLogin>({ schema: loginSchema });

  const formConfig: IFormSections<IFormLogin> = {
    form,
    sections: [
      {
        gridColumns: 1,
        fields: [
          {
            Field: Input,
            label: "Usuario",
            fieldConfig: {
              tabIndex: 1,
              maxlength: 10,
              id: "userName",
              placeholder: "Ingrese su nombre de usuario",
            },
          },
          {
            Field: Input,
            label: "Contraseña",
            fieldConfig: {
              tabIndex: 2,
              id: "password",
              type: "password",
              placeholder: "**********",
            },
          },
        ],
      },
    ],
  };

  return { formConfig };
};
