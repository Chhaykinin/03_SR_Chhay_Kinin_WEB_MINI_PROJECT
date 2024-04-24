import AddNewTaskComponent from '@/components/AddNewTaskComponent';
import ListBoardComponentHeader from '@/components/ListBoardComponentHeader';
import ListCardComponent from '@/components/ListCardComponent';
import MonthlyStatisticsComponent from '@/components/MonthlyStatisticsComponent';
import NavbarComponent from '@/components/NavbarComponent';
import SidebarComponent from '@/components/SidebarComponent';
import React from 'react'
const TodoListpage = async () => {
  return (
    <main>
      <div className="flex w-full">
        <div className="w-[20%]">
          <SidebarComponent />
        </div>
        <div className="w-[80%] p-5">
          <NavbarComponent />
          <div className="mt-5">
            <ListBoardComponentHeader />
          </div>

          <div className="flex p-2 gap-5">  
            <div className="w-full">
              <div>
              <ListCardComponent/>
              </div>
              <div>
              <ListCardComponent/>
              </div>
            </div>
            
            <div className=' w-56'>
              <MonthlyStatisticsComponent  />
            </div>
          </div>
          <div className=" right-10 mt-5 bottom-5 absolute">
            <AddNewTaskComponent />
          </div>
        </div>
      </div>
    </main>
  )
}

export default TodoListpage;
