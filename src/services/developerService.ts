import { ListResponseModel } from "@/models/base/listResponseModel";
import { SingleResponseModel } from "@/models/base/singleResponseModel";
import { Developer } from "@/models/developer";
import { DeveloperProfessionalExperience } from "@/models/developerProfessionalExperience";
import { DeveloperSkill } from "@/models/developerSkill";
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

  const getById = (
    id: number,
    cachingMode: RequestCache
  ): SingleResponseModel<Developer> => {
    const { data, isFetching, isFetched } = useQuery(
      ["getDeveloperById", id],
      async () => {
        const response = await fetch(`${controllerUrl}/${id}/`, {
          cache: cachingMode,
        });
        return await response.json();
      }
    );

    return { data, isFetching, isFetched };
  };

  const getMainDeveloper = (): SingleResponseModel<Developer> => {
    return getById(
      Number.parseInt(process.env.NEXT_PUBLIC_MAIN_DEV_ID!),
      "default"
    );
  };

  const getProfessionalExperiencesByDevId = (
    id: number
  ): ListResponseModel<DeveloperProfessionalExperience> => {
    const { data, isFetching, isFetched } = useQuery(
      ["getProfessionalExperiencesByDevId", id],
      async () => {
        const response = await fetch(
          `${controllerUrl}/${id}/professional_experiences/`,
          {
            cache: "no-store",
          }
        );
        return await response.json();
      }
    );

    return { data, isFetching, isFetched };
  };

  const getSkillsByDevId = (id: number): ListResponseModel<DeveloperSkill> => {
    const { data, isFetching, isFetched } = useQuery(
      ["getSkillsByDevId", id],
      async () => {
        const response = await fetch(`${controllerUrl}/${id}/skills/`, {
          cache: "no-store",
        });
        return await response.json();
      }
    );

    return { data, isFetching, isFetched };
  };

  return {
    getAll,
    getById,
    getMainDeveloper,
    getProfessionalExperiencesByDevId,
    getSkillsByDevId,
  };
}
