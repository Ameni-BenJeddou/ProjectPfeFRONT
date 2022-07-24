import { Vacancy } from '../Entities/vacancy';
import { Skills } from '../Entities/Skills';
export interface Job_skill_set  
{
  Id_Job_Set : number,
    level : number,
    id_Opening :Vacancy,
    id_Skill :Skills
    
}