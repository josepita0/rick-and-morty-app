import { useInstanceForm } from "@/lib/hooks/use-instance-form";
import { IFormRegister, registerSchema } from "@/app/(auth)/(lib)/schemas";
import { IFormSections } from "@/components/builders/forms/form-builer.interface";
import { Input } from "@/components/ui/input";

export const useFormRegister = () => {
  const form = useInstanceForm<IFormRegister>({ schema: registerSchema });

  const formConfig: IFormSections<IFormRegister> = {
    form,
    sections: [
      {
        gridColumns: 1,
        fields: [
          {
            Field: Input,
            label: "Usuario",
            fieldConfig: {
              maxlength: 10,
              id: "userName",
              placeholder: "Ingrese su nombre de usuario",
            },
          },
          {
            Field: Input,
            label: "Contraseña",
            fieldConfig: {
              id: "passwordValidation.password",
              type: "password",
              placeholder: "**********",
            },
          },
          {
            Field: Input,
            label: "Confirmar contraseña",
            fieldConfig: {
              id: "passwordValidation.confirmPassword",
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
