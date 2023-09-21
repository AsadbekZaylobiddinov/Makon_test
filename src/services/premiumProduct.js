import axios from "axios"

export async function GetAllPremiumProductAsync(){

    var pageSize = sessionStorage.getItem('pageSize');
    var pageIndex = sessionStorage.getItem('pageIndex');

    var url = `/PremiumProduct`;

    if(pageSize){
        url+=`?PageSize=${pageSize}`;
    }
    else{
        url+=`?PageSize=20`;
    }

    if(pageIndex){
        url+=`&PageIndex=${pageIndex}`;
    }
    else{
        url+=`&PageIndex=1`;
    }


    return await axios.get(`${url}`);
}