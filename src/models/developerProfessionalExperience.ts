import { Developer } from "./developer";
import { ProfessionalExperience } from "./professionalExperience";

export interface DeveloperProfessionalExperience {
  id: number;
  owner: Developer;
  professional_experience: ProfessionalExperience;
  date_of_start: Date;
  date_of_quit: Date;
  created_at: Date;
  updated_at: Date;
}
