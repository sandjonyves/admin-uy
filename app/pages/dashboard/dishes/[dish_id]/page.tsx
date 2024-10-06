'use client';

import DetailFoodCard from '@/app/components/DetailFoodCard';
import React from 'react';

import { FaTrash } from 'react-icons/fa';
export default function Page({
    params
}: {
    params: { dish_id: string } // Assurez-vous que params a la bonne structure
}) {
    return (
        <div className="p-4 sm:ml-64 mt-8">
        <div className="p-4 dark:border-gray-700">
          <div className="grid grid-cols-1 gap-4 mb-4">
        
          <DetailFoodCard></DetailFoodCard>
            
            <div className="flex items-center justify-center bg-red-600 rounded-full h-15 dark:bg-red-500">
              <p className="text-2xl text-gray-400 dark:text-white">
                <FaTrash />
              </p>
              <span className="p-4 text-2xl text-gray-400 dark:text-white">
                delete
              </span>
            </div>
         </div>
         </div>
        </div>
    );
}