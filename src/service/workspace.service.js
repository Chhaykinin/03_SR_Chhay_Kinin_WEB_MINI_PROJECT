import headerToken from "@/app/api/headerToken";

export const getAllWorkspacesServer = async ()=>{
    const header = await headerToken();
    const res =await fetch(
        "http://110.74.194.123:8989/api/todo/v1/workspaces",{
            headers: header
        }
    );
    const data = await res.json();
    return data;
   
}

export const insertWorkSpaceservice = async(workData)=>{
    const res= await fetch(
        "http://110.74.194.123:8989/api/todo/v1/workspaces",
        {
            method:"POST",
            body:JSON.stringify(workData),
            headers:{
                "content-type":"application/json"
            }
        }
    )
    const data=await res.json();
    return data;
}
