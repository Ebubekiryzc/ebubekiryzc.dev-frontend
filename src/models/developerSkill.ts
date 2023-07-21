import { Developer } from "./developer";
import { Skill } from "./skill";

export interface DeveloperSkill {
  id: number;
  developer: Developer;
  skill: Skill;
  percentage: number;
  created_at: Date;
  updated_at: Date;
}
