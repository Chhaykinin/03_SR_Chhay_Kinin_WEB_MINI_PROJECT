import ListBoardComponentHeader from '@/components/ListBoardComponentHeader';
import NavbarComponent from '@/components/NavbarComponent';
import SidebarComponent from '@/components/SidebarComponent';

import React from 'react'

const TodoListpage =async () => {
 

  return (
    <main>
        <div className="flex w-full">
      <div className="w-[20%]">
        <SidebarComponent />
      </div>
      <div className="w-[80%] p-5">
        <NavbarComponent />
        <div className="mt-5">
        <ListBoardComponentHeader/>
        </div>
        <div className="flex gap-5">
          <div className="  border-gray rounded-lg w-todoCardWidth mt-5 relative">
            TODO
          </div>
          <div className="  border-gray rounded-lg w-todoCardWidth mt-5 relative">
            WORKING ON
          </div>
          <div className="  border-gray rounded-lg w-todoCardWidth mt-5 relative">
            CHECKING 
          </div>
          <div className="  border-gray rounded-lg w-todoCardWidth mt-5 relative">
            COMPLETED
          </div>
         
        </div>
      </div>
    </div>
    </main>
  )
}

export default TodoListpage;
