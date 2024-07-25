import { LoginForm } from "@/app/(auth)/(forms)/login/login";
import { RegisterForm } from "@/app/(auth)/(forms)/register/register";
import { DrawerViews } from "@/components/builders/drawer/drawer-builder";

export default function AuthPage() {
  return (
    <>
      <LoginForm />

      <DrawerViews>
        <RegisterForm />
      </DrawerViews>
    </>
  );
}
