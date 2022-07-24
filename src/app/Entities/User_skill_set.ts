import { User } from '../Entities/User';
import { Skills } from '../Entities/Skills';
export interface User_skill_set  
{
  id_User_Set : number,
    level : number,
    id_User :User,
    id_Skill :Skills
  
}