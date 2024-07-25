"use client";
import { useEffect } from "react";

import { FormBuilder } from "@/components/builders/forms/form-builder";

import { useDrawerStore } from "@/lib/stores/use-drawer-store";
import { useOnSubmit } from "@/app/(auth)/(hooks)/register/useHandleOnSubmit";
import { useFormRegister } from "@/app/(auth)/(hooks)/register/useFormRegister";

export const RegisterForm = () => {
  const { setDataDrawer } = useDrawerStore();

  const { formConfig } = useFormRegister();

  const { onSubmit } = useOnSubmit();

  useEffect(() => {
    setDataDrawer({
      type: "create",
      title: "Registro",
      description: "Ingrese sus credenciales",
    });
  }, []);

  return (
    <FormBuilder
      formConfig={formConfig}
      buttonText="Registrarse"
      onSubmit={onSubmit}
    />
  );
};
