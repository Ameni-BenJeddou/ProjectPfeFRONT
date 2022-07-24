import { User } from '../Entities/User';
export interface Spontaneaous_application  
{
    id_S_Application : number,
      creation_Date :Date,
      job_Type : string,
      relevant_Education_Level : number,
      relevant_Experience_Level : number,
      id_User : User
      
}