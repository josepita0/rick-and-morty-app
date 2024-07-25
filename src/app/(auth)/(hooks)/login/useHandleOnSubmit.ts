import { toast } from "sonner";
import { useRegisterStore } from "@/lib/stores/use-register-store";

import { IFormLogin } from "@/app/(auth)/(lib)/schemas";

export const useOnSubmit = () => {
  const { registers } = useRegisterStore();

  const onSubmit = (data: IFormLogin) => {
    const exist = registers.find(
      (register) =>
        register.userName === data.userName &&
        register.password === data.password
    );

    if (exist) {
      toast.success("Inicio de sesión exitoso");
    } else {
      toast.error("Credenciales invalidas");
    }
  };

  return {
    onSubmit,
  };
};
