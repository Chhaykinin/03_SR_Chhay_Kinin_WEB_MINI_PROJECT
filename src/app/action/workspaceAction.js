import { insertWorkSpaceservice } from "@/service/workspace.service";

export async function handleworkspace(workspaceInput){
    // define obj structure
    const newWorkspace={
        workspaceName:workspaceInput.get('workspaceName'),
    };
    //calling server 
    await insertWorkSpaceservice(newWorkspace);
    console.log("new Workspace:",newWorkspace);
    //calling revlidate tag
    revalidateTag('workspace')

}