import { Dispatch } from "@reduxjs/toolkit";
import { setFruit } from "../redux/slices/fruitSlices";
import { setProteine } from "../redux/slices/proteineSlices";
import Axios from "../axios/Axios";


interface params_get{
    dispatch : Dispatch;
    setIsLoading:React.Dispatch<React.SetStateAction<boolean>>;
}

class Proteine{

    get({dispatch, setIsLoading}:params_get){
            setIsLoading(true);
            Axios.get('/store/fruit/',)
            .then((response)=>{
                setIsLoading(false);
                console.log(response.data)
                
                dispatch(setProteine(response.data))
                //  updateMarchand(response.data.results);
            })
            .catch((error)=>{
                setIsLoading(false);
                console.log(error)
            })
        };
    
}