import { User } from '../Entities/User';
export interface Education_details  
{
    id_Education : number,
    degree_Name :String,
    major :String,
    institute :String,
    start_Date :Date,
    end_Date :Date,
    is_Current:Boolean ,
    id_User : User,
    
}