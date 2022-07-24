import { Job_skill_set } from '../Entities/Job_skill_set';

export interface Vacancy  
{
    id_Opening? : number;
      job_type :String;
      description :String;
      department :String;
      location :String;
      creation_Date :Date;
      closure_Date? : Date;
      is_Active : Boolean; // 0=inactive , 1=active
      gender? : Boolean; // 0=male,1=female
      relevant_Education_Level : number;
      relevant_Experience_Level : number;
      id_Job_set?: Job_skill_set[];
}