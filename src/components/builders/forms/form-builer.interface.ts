import { UseFormReturn } from "react-hook-form";

interface IInput<T> {
  id: keyof T;
  tabIndex?: number;
  placeholder?: string;
  disabled?: boolean;
  isLoading?: boolean;
  [key: string]: any;
}

interface ISections<T> {
  title?: string;
  gridColumns: number;
  fields: {
    label: string;
    Field: React.ElementType;
    fieldConfig: IInput<T>;
  }[];
}
export interface IFormSections<T = null> {
  form: UseFormReturn;
  sections: ISections<T>[];
}
