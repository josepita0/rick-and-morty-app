import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface IProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const AuthCard = ({ children, title, description }: IProps) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">{children}</CardContent>
    </Card>
  );
};
