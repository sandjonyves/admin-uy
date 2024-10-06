'use client'

import React, { useEffect } from 'react';
import DashboardLayout from '../layout';
import { FaPlus } from 'react-icons/fa';
import CardDish from '@/app/components/FoodCard';
import Pagination from '@/app/components/Pagination';

export default function Pages() {

  useEffect(()=>{

    if(localStorage.getItem('isChoise')==undefined){
      localStorage.setItem('isChoise','false')
    }
  },[])
  return (
    <DashboardLayout>
      <div className="p-4 sm:ml-64 mt-8">
        <div className="p-4 dark:border-gray-700">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="flex items-center justify-center bg-sky-600 rounded h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <FaPlus />
              </p>
              <span className="p-4 text-2xl text-gray-400 dark:text-gray-500">
                Ajouter un Plat
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <CardDish />
              <CardDish />
              <CardDish />
              <CardDish />
              <CardDish />
              <CardDish />
            </div>
          </div>
        </div>
        <Pagination></Pagination>
      </div>
     
    </DashboardLayout>
  );
}