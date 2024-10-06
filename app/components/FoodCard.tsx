'use client';
import React, { useEffect, useState } from 'react';
import food from '@/public/assets/foud.jpeg';
import Button from './Button';
import Typography from './Typographie';
import Input from './Input';
import Select from './Select';
import Pagination from './Pagination';
import { SubmitHandler, useForm } from 'react-hook-form';
import ModalForm from './ModalForm';
import { Dishes } from '../request/dish';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
// import DishDetail from '../pages/dashboard/dishes/[dish_id]';
export default function FoodCard() {
  interface FormData {
    fruit: string;
    proteine: string;
    food_number: number;
    dish_max_number: number;
  }

  const DishesRequest = new Dishes()
  
  const dispatch = useAppDispatch()
  const selector_dish = useAppSelector(state=> state.persistedReducer.Dishes.dishes)

  const [showModal, setShowModal] = useState<boolean>(false);
  const [disbaleBtnChoise,setDisableBtnChoise] = useState<Boolean>(false)
  const { register, handleSubmit } = useForm<FormData>();
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const [message,setMessage] = useState<string>('')

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data,JSON.parse(localStorage.getItem('isChoise'))) ;localStorage.setItem('isChoise','true')
  
    DishesRequest.save({formData:data,setIsLoading:setIsLoading,setMessage:setMessage})
  };

  useEffect(()=>{
    localStorage.setItem('isChoise','false')
    setDisableBtnChoise(JSON.parse(localStorage.getItem('isChoise')))

    DishesRequest.getAll({dispatch,setIsLoading})
    console.log(selector_dish)
  },[])

  return (
    <div className='relative'>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col md:max-w-xl dark:border-gray-700 dark:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-full md:rounded-none md:rounded-s-lg"
          src={food.src} // Utilisation de food.src pour accéder au chemin de l'image
          alt="Food"
        />
        <div className="flex flex-col justify-between w-auto lg:w-96 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Riz Sauce Tomate
          </h5>
          <div className="grid grid-rows-2 gap-4 my-4">
            <div className="w-full flex gap-2">
              <Button onClick={() => setShowModal(true)} className='w-full'>
                <span>Modifier</span>
              </Button>
              <Button onClick={() => setShowModal(true)} className='w-full'>
                <span>Delete</span>
              </Button>
            </div>
            <div className="w-full">
              <Button onClick={() => setShowModal(true)} className='w-full' disabled={disbaleBtnChoise}>
                <span>Choisir</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ModalForm showModal={showModal} setShowModal={setShowModal} title='Riz Sauce Tomate'>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Typography variant='label'>Fruit :</Typography>
            <Select label='fruit' register={register} options={['test']} />
          </div>
          <div>
            <Typography variant='label'>Protéine :</Typography>
            <Select label=' proteine' register={register} options={['test']} />
          </div>
          <div>
            <Typography variant='label'>Food Number :</Typography>
            <Input register={register} label='food_number' type='number'/>
          </div>
          <div>
            <Typography variant='label'>Dish Max Number :</Typography>
            <p className='text-[0.6em] text-gray-400'>
              Nombre de plats max qu'un étudiant peut commander
            </p>
            <Input register={register} label='dish_ma_number' type='number' />
          </div>
          <div>
            <Button className='w-full' type='submit'>
              <span>Validate</span>
            </Button>
          </div>
        </form>
      </ModalForm>
    </div>
  );
}