import React from 'react'
import { ReactNode } from 'react'
import Dashboard from './page'
import { SideBar } from '@/app/components/SideBar'
type DashboardLayoutProps = {
    children: ReactNode;
  };
export default function DashboardLaout({children}:DashboardLayoutProps) {
  return (
    <div>
        <SideBar>

         {/* <SideBar> */}
         <main>
            {children}
        </main>
         {/* </SideBar> */}
      
        {/* <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>

         </div> */}
         {/* <div className="p-4 sm:ml-64">
         {children}
      </div> */}
        
        </SideBar>
    </div>
  )
}
