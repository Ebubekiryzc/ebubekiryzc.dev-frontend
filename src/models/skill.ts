export interface Skill {
  id: number;
  slug: string;
  name: string;
  description: string;
  image: string;
  level: number;
  parent?: Skill;
  childrens: Skill[];
  created_at: Date;
  updated_at: Date;
}
