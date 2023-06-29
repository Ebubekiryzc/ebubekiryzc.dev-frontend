import { ListResponseModel } from "@/models/base/listResponseModel";
import { SingleResponseModel } from "@/models/base/singleResponseModel";
import { Developer } from "@/models/developer";
import { useQuery } from "react-query";

let controllerUrl = `${process.env.NEXT_PUBLIC_API_URL}/developers/api/developers`;

export default function useDeveloperService() {
  const getAll = (): ListResponseModel<Developer> => {
    const { data, isFetching, isFetched } = useQuery(
      "getAllDevelopers",
      async () => {
        const response = await fetch(`${controllerUrl}/`, {
          cache: "no-store",
        });
        return await response.json();
      }
    );

    return {
      data: data ?? [],
      isFetching,
      isFetched,
    };
  };

  const getById = (id: number): SingleResponseModel<Developer> => {
    const { data, isFetching, isFetched } = useQuery(
      ["getDeveloperById", id],
      async () => {
        const response = await fetch(`${controllerUrl}/${id}/`, {
          cache: "no-store",
        });
        return await response.json();
      }
    );

    return { data, isFetching, isFetched };
  };

  const getMainDeveloper = (): SingleResponseModel<Developer> => {
    return getById(Number.parseInt(process.env.NEXT_PUBLIC_MAIN_DEV_ID!));
  };

  return { getAll, getById, getMainDeveloper };
}
