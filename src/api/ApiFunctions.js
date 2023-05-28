//all api functions

import { dummyURL } from "./ApiRoutes";
import axios from "axios";

//get users

export const getUser = async ()=>{
    const response = await axios.get(dummyURL);
    return response;
}