import headerToken from "@/app/api/headerToken";

export const getAllWorkspacesServer = async ()=>{
    const header = await headerToken();
    const res =await fetch(
        "http://110.74.194.123:8989/api/todo/v1/workspaces",{
            headers: header
        }
    );
    const data= await res.json();
    return data;
    // console.log("data in service", data);
}
