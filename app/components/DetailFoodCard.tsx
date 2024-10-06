'use client'
import React, { useState } from 'react';
import food from '@/public/assets/foud.jpeg';
import ModalForm from './ModalForm';
import Button from './Button';
import Typography from './Typographie';
import Input from './Input';
import Select from './Select';
import Pagination from './Pagination';

export default function DetailFoodCard() {

  const [ShowModal, setShowMOdal] = useState<boolean>(false)

  return (
    <div className='relative mb-0'>

      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col md:max-w-full  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-[60%] md:rounded-none md:rounded-s-lg" src={food.src} alt="" />
        <div className="flex flex-col justify-between w-[80%] m-5 lg:w-[60%] leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Riz Sauce tomate
          </h5>
          <div className="w- gap-4 my-4">
            <div className='mx-4 w-full gap-2'>

              <div >
                <Typography variant='label'> fruit : </Typography>
                <Select options={[{ value: '1', label: 'orange' }, { value: '1', label: 'ananas' }, { value: '1', label: 'viande de boeuf' }]} />
              </div>

              <div >
                <Typography variant='label'> Proteine : </Typography>
                <Select options={[{ value: '1', label: 'viande de boeuf' }, { value: '1', label: 'viande de boeuf' }, { value: '1', label: 'viande de boeuf' }]} />
              </div>
              <div>
                <Typography variant='label'> food number : </Typography>
                <Input type='number' />
              </div>
              <div>
                <Typography variant='label'> order food number : </Typography>
                <Input type='number' />
              </div>
              <div className="w-full">
                <Button onClick={() => setShowMOdal(true)} className='w-full' >
                  <span>
                    Valider
                  </span>
                </Button>
              </div>
            </div>





          </div>
        </div>

      </div>

      {/* <div
      
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover rounded-t-lg h-48 w-auto md:h-auto md:w-1/3 md:rounded-none md:rounded-s-lg"
          src={food.src} // Utilisation de food.src pour accéder au chemin de l'image
          alt="Food"
        />
        <div className="flex flex-col justify-between w-auto lg:w-[60%] leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Riz Sauce tomate
          </h5>
          <div className="w- gap-4 my-4">
          <div className='mx-4 w-full gap-2'>

          <div >
              <Typography variant='label'> fruit : </Typography>
              <Select options={[{ value :'1',label:'orange'},{ value :'1',label:'ananas'},{ value :'1',label:'viande de boeuf'}]}/>
          </div>

          <div >
              <Typography variant='label'> Proteine : </Typography>
              <Select options={[{ value :'1',label:'viande de boeuf'},{ value :'1',label:'viande de boeuf'},{ value :'1',label:'viande de boeuf'}]}/>
          </div>
          <div>
              <Typography variant='label'> food number : </Typography>
              <Input type='number'  />
          </div>
          <div>
              <Typography variant='label'> order food number : </Typography>
              <Input type='number'  />
          </div>
          </div>
         

            <div className="w-full">
              <Button onClick={() => setShowMOdal(true)} className='w-full' >
                <span>
                  Choisir
                </span>
              </Button>
            </div>


          </div>
        </div>
        
      </div> */}




      {/* </ModalForm> */}


    </div>
  );
}