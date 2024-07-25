import { useQuery } from "@tanstack/react-query";

import { ModuleEnum } from "@/lib/common/module.enum";
import { listService } from "./common.services";

interface IUseList {
  module: ModuleEnum;
}

export const useList = <T>({ module }: IUseList) => {
  const query = useQuery({
    queryKey: [module],
    queryFn: () => listService<T>(module),
  });

  return {
    ...query,
  };
};
