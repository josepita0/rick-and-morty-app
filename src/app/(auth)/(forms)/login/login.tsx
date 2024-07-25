"use client";

import { Button } from "@/components/ui/button";
import { FormBuilder } from "@/components/builders/forms/form-builder";

import { useDrawerStore } from "@/lib/stores/use-drawer-store";

import { AuthCard } from "@/app/(auth)/(components)/auth-card";
import { useFormLogin } from "@/app/(auth)/(hooks)/login/useFormLogin";
import { useOnSubmit } from "@/app/(auth)/(hooks)/login/useHandleOnSubmit";
import { useList } from "@/lib/services/use-common.services";
import { ModuleEnum } from "@/lib/common/module.enum";

export const LoginForm = () => {
  const cardConfig = {
    title: "Iniciar sesión",
    description: "Ingrese sus credenciales",
  };

  const { data } = useList({ module: ModuleEnum.CHARACTER });

  console.log({ data });

  const { onSubmit } = useOnSubmit();

  const { formConfig } = useFormLogin();

  const { toggleDrawer } = useDrawerStore();

  return (
    <AuthCard {...cardConfig}>
      <FormBuilder
        formConfig={formConfig}
        buttonText="Iniciar sesión"
        onSubmit={onSubmit}
      />
      <Button variant="outline" type="button" onClick={() => toggleDrawer()}>
        Registro
      </Button>
    </AuthCard>
  );
};
