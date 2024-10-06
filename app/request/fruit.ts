import { Dispatch } from "@reduxjs/toolkit";
import { setFruit } from "../redux/slices/fruitSlices";
import Axios from "../axios/Axios";



interface params_get{
    dispatch : Dispatch;
    setIsLoading:React.Dispatch<React.SetStateAction<boolean>>;
}

class Fruit{

    get({dispatch, setIsLoading}:params_get){
            setIsLoading(true);
            Axios.get('/store/fruit/',)
            .then((response)=>{
                setIsLoading(false);
                console.log(response.data)
                
                dispatch(setFruit(response.data))
                //  updateMarchand(response.data.results);
            })
            .catch((error)=>{
                setIsLoading(false);
                console.log(error)
            })
        };
    
}