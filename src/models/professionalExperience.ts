export interface ProfessionalExperience {
  id: number;
  slug: string;
  company_name: string;
  company_image: string;
  title: string;
  description: string;
  professional_experience_tasks: string[];
  created_at: Date;
  updated_at: Date;
}
