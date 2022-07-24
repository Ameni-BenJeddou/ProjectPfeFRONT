import { Account } from '../Entities/Account';
export interface User  
{
    id_user : number,
    firstName :String,
    lastName :String,
    date_Birth :Date,
    region :String,
    phone_Number :String,
    email_Notification_Active :Boolean,
    work_Status :Boolean,
    gender : Boolean,
    id_Account : Account
    
}