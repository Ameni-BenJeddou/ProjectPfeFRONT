import { User } from '../Entities/User';
export interface Experience_details  
{
    id_Experience : number,
    company_Name :String,
    post :String,
    description :String,
    start_Date :Date,
    end_Date :Date,
    is_Current:Boolean ,
    id_User : User,
    
}