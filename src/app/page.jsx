import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";

export default function Home() {
  return <main>
    
    <div className="flex w-full">
      <div className="w-[20%]">
        <SidebarComponent />
      </div>
      <div className="w-[80%] p-5">
        <NavbarComponent />
        <div className="mt-5">
        <ListBoardComponentHeader/>
        </div>
        
         
         
        
      </div>
     
    </div>
  </main>;
}
