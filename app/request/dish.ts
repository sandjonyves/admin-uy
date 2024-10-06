import { Dispatch } from "@reduxjs/toolkit"
import { setDish, setDishes } from "../redux/slices/dishSlices";
import Axios from "../axios/Axios";



interface params_save{
    // dispacth : Dispatch;
    formData : any;
    setIsLoading:React.Dispatch<React.SetStateAction<boolean>>;
    setMessage:React.Dispatch<React.SetStateAction<string>>
}

interface params_ChoiseDishDay{
    dispatch : Dispatch;

    formData : any;
    setIsLoading:React.Dispatch<React.SetStateAction<boolean>>;
    setMessage:React.Dispatch<React.SetStateAction<string>>;
    dish_id : number;
}

interface params_get{
    dispatch : Dispatch;
    setIsLoading:React.Dispatch<React.SetStateAction<boolean>>;
}
export class Dishes{

    save({formData,setIsLoading,setMessage}:params_save) {
        setIsLoading(true)
        
        Axios.post('/store/dish/',formData)
            .then((response)=>{
                console.log(response)
                setMessage('Save Dish successfully!')
                setIsLoading(false)
                // if (isSignUp) {
                //     // dispatch(login(response.data))
                //     this.userLogin(dispatch, formData, navigate, setIsLoading, setMessage)
                // }
            })
            .catch((error)=>{
                setIsLoading(false)
                setMessage(error.response.data.message)
                console.log(error.response.data.message)
            })
    }      

    
        getAll({dispatch, setIsLoading}:params_get){
                setIsLoading(true);
                Axios.get('/store/dish/',)
                .then((response)=>{
                    setIsLoading(false);
                    console.log(response.data)
                    
                    dispatch(setDishes(response.data))
                    //  updateMarchand(response.data.results);
                })
                .catch((error)=>{
                    setIsLoading(false);
                    console.log(error)
                })
            };
        
 
    
    ChoiseDishDay({dispatch,formData,setIsLoading,setMessage,dish_id}:params_ChoiseDishDay) {
        setIsLoading(true)
        
        Axios.post(`/store/dish/${dish_id}`,formData)
            .then((response)=>{
                console.log(response)
                setMessage('Save Dish of day successfully!')
                setIsLoading(false)
                localStorage.setItem('isChoise','true')
                // if (isSignUp) {
                //     // dispatch(login(response.data))
                //     this.userLogin(dispatch, formData, navigate, setIsLoading, setMessage)
                // }
            })
            .catch((error)=>{
                setIsLoading(false)
                setMessage(error.response.data.message)
                console.log(error.response.data.message)
            })
    }  
}