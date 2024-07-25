import { toast } from "sonner";
import { AxiosError } from "axios";

import { noAuthApi } from "@/config/axios.config";
import { ModuleEnum } from "@/lib/common/module.enum";

export const listService = async <T>(
  module: ModuleEnum,
  queries?: any
): Promise<T[]> => {
  const axios = noAuthApi;

  const url = `/${module.toLowerCase()}`;

  try {
    const { data } = await axios?.get(url);

    return data?.result;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log({ error });

      // toast.error(error.response?.data?.info?.message_to_show);
    }
  }
};
