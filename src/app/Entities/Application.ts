import { Vacancy } from '../Entities/vacancy';
import { User } from '../Entities/User';
export interface Application  
{
      id_Application : number,
      creation_Date :Date,
      gender : Boolean, // 0=male,1=female
      relevant_Education_Level : number,
      relevant_Experience_Level : number,
      status: string,
      id_Opening :Vacancy,
      id_User : User
      
}