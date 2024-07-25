import { useDrawerStore } from "@/lib/stores/use-drawer-store";
import { IFormRegister } from "../../(lib)/schemas";
import { useRegisterStore } from "@/lib/stores/use-register-store";
import { toast } from "sonner";

export const useOnSubmit = () => {
  const { toggleDrawer } = useDrawerStore();

  const { registers, setRegister } = useRegisterStore();

  const onSubmit = (data: IFormRegister) => {
    const { passwordValidation, ...rest } = data;

    const register = {
      ...rest,
      password: passwordValidation.password,
    };

    const exist = registers.find(
      (register) => register.userName === data.userName
    );

    if (!exist) {
      setRegister(register);
      toggleDrawer();
      toast.success("Registro exitoso");
    } else {
      toast.error("El usuario ya existe");
    }
  };

  return {
    onSubmit,
  };
};
