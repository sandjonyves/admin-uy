
// import { sassTrue } from "sass";
import Axios from "../axios/Axios";
import { login } from "../redux/slices/authSlice";
// import { setAdmins, setClients, setMerchants, setOrders } from "../redux/slices/dataSlice";
import { decode } from "../utils/utilities";

// cette classe permet d'ecrire toute les fonctions de lecture des utilisateurs en focntion de leurs role 
export class User{
    userRegister(dispatch,formData,navigate,setIsLoading,setMessageError, isSignUp = true) {
        setIsLoading(sassTrue)
        
        Axios.post('/account/register/',formData)
            .then((response)=>{
                console.log(response)
                setMessageError('Created account successfully!')
                setIsLoading(false)
                // if (isSignUp) {
                //     // dispatch(login(response.data))
                //     this.userLogin(dispatch, formData, navigate, setIsLoading, setMessageError)
                // }
            })
            .catch((error)=>{
                setIsLoading(false)
                setMessageError(error.response.data.message)
                console.log(error.response.data.message)
            })
    }      
        
    userLogin(dispatch,formData,navigate,setIsLoading,setMessageError){
        // alert('sajdkasj')

        setIsLoading(true)
        Axios.post('/account/login',{'matricule_or_email':formData.matricule_or_email,'password':formData.password})
        .then((response)=>{
            const user = decode(response.data.access)
            console.log(user)
            setIsLoading(false)
            // setMessageError('')           
            // enreigistrement des donnees d'authetification dans le store 
            dispatch(login(user))
            navigate.push('/pages/dashboard/')
            // redirection  
            // switch (user.role) {
            //     case 'ADMIN':
            //         navigate('/dashboard/')
            //         break;

            //     case 'MARCHAND':
            //         navigate('/dashboard/merchant')
            //         break;
            
            //     default:
            //         break;
            // }
            
        })
        .catch((error)=>{
        
            setIsLoading(false)
            console.log(error)
            console.log(error.response.data.message)
            setMessageError(error.response.data.message)
            // setIsLoading(false)
            // console.log(error.response)
            // console.log(error)
        //    alert(error)
        })
    }

    userLogout(dispatch,user,navigate,setIsLoading){
        setIsLoading(true)
        // Axios.post(`account/logout/${user.user_id}`)
        Axios.post(`/account/logout/${user.id}`)
        .then((response)=>{
            console.log(response)
            setIsLoading(false)    

            // Anhilation des donnees d'authetification dans le store 
            dispatch(login(null))
            navigate('/signin')             
        })
        .catch((error)=>{
            setIsLoading(false)
            console.log(error)
            // setIsLoading(false)
            // console.log(error.response)
            // console.log(error)
        //    alert(error)
        })
    }
    // lecture de tous les client 

    // getUser(dispatch,tokenOfUser){
    //     const dataOfUser = decode(tokenOfUser.access)
    //     if (dataOfUser.role == "ADMIN"){
    //         Axios.get(`/account/admin/${dataOfUser.user_id}`,)
    //         .then((response)=>{
    //             dispatch(singleUsers(response.data))
    //             console.log(response.data)
    //                 // updateAdmin(reponse.data.resuts);
    //         })
    //         .catch((error)=>{
    //                 console.log(error)
    //             })
    //     }else if(dataOfUser.role =="MARCHAND"){
    //         Axios.get(`/account/marchand/${dataOfUser.user_id}`,)
    //         .then((response)=>{
    //             dispatch(singleUsers(response.data))
    //             console.log(response)
    //             //  updateRetreiveMarchand(reponse.data);
    //         })
    //         .catch((error)=>{
    //              console.log(error)
    //          })

    //     }else{
    //         Axios.get(`/account/client/${dataOfUser.user_id}`,)
    //         .then((response)=>{
    //             dispatch(singleUsers(response.data))
    //             console.log(response.data.results)
    //             //  updateRetreiveClient(reponse.data);
    //         })
    //         .catch((error)=>{
    //              console.log(error)
    //          })
    //     }
    // }

    // getAllClients(dispatch, setIsLoading){
    //     setIsLoading(true);
    //     Axios.get('/account/otherClient/',)
    //     .then((response)=>{
    //         setIsLoading(false);
    //         console.log(response.data)
    //         dispatch(setClients(response.data))
    //         //  updateMarchand(response.data.results);
    //     })
    //     .catch((error)=>{
    //         setIsLoading(false);
    //         console.log(error)
    //     })
    // };

    // // lecture de tous les marchands
    // getAllMerchants(dispatch, setIsLoading){
    //     setIsLoading(true);
    //     Axios.get('/account/marchand/',)
    //     .then((response)=>{
    //         setIsLoading(false);
    //         console.log(response.data)
    //         dispatch(setMerchants(response.data))
    //         //  updateMarchand(response.data.results);
    //     })
    //     .catch((error)=>{
    //         setIsLoading(false);
    //         console.log(error)
    //     })
    // };
    // // lecture de tous les administrateurs
    // getAllAdmin(dispatch, setIsLoading){
    //     setIsLoading(true)
    //     Axios.get('/account/admin/',)
    //     .then((response)=>{
    //         setIsLoading(false)
    //         console.log(response.data)
    //         dispatch(setAdmins(response.data))
    //             // updateAdmin(response.data.resuts);
    //     })
    //     .catch((error)=>{
    //         setIsLoading(false)
    //         console.log(error)
    //     })
    // }

    // geClient({updateRetreiveClient,user_id}){
    //     Axios.get(`/account/client/${user_id}`,)
    //     .then((response)=>{
    //         console.log(response.data)
    //         //  updateRetreiveClient(reponse.data);
    //     })
    //     .catch((error)=>{
    //          console.log(error)
    //      })
    // };

    // // lecture de tous les marchands
    // getMarchand({updateRetreiveMarchand,user_id}){
    //     Axios.get(`/account/marchand/${user_id}`,)
    //     .then((response)=>{
    //         console.log(response)
    //         //  updateRetreiveMarchand(reponse.data);
    //     })
    //     .catch((error)=>{
    //          console.log(error)
    //      })
    // };
    // // lecture de tous les administrateurs
    // getAdmin({updateRetreiveAdmin,user_id}){
    //     Axios.get(`/account/admin/${user_id}`,)
    //     .then((response)=>{
    //         console.log(response.data)
    //             // updateRetreiveAdmin(reponse.data);
    //     })
    //     .catch((error)=>{
    //             console.log(error)
    //         })
    // }


    //    updateUser(dispatch,user,setIsLoading,setErrorMessage){
    //     setIsLoading(true)
    // if (user.role=="ADMIN") {
    //         Axios.put(`/account/admin/${user.id}/`,user)
    //         .then((response)=>{
    //             console.log(response.data)
    //             setErrorMessage('')
    //             dispatch(login(response.data))
    //             setIsLoading(false)
    //         })
    //         .catch((error)=>{
    //             console.log(error)
    //             setErrorMessage(error.response.data.detail)
    //             setIsLoading(false)
    //         })
    //     }else{
    //         console.log(user)
    //         Axios.put(`/account/marchand/${user.id}/`,user)
    //         .then((response)=>{
    //             setErrorMessage('OK')
    //             setIsLoading(false)
    //             console.log(response.data)
    //         })
    //         .catch((error)=>{
    //             setIsLoading(false)
    //             setErrorMessage(error.response.data.detail)
    //             console.log(error)
    //         })
    //     }
    //    }

      
    // // lecture de tous les marchandsv
    // deleteAdmin(id, dispatch, refresh){
    //     Axios.delete(`/account/admin/${id}`,)
    //     .then((response)=>{
    //         console.log(response)
    //         refresh(dispatch)
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    // };
    // deleteMerchant(id, dispatch, refresh){
    //     Axios.delete(`/account/marchand/${id}`,)
    //     .then((response)=>{
    //         console.log(response)
    //         refresh(dispatch)
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    // };
    // deleteClient(id, dispatch, refresh){
    //     Axios.delete(`/account/client/${id}`,)
    //     .then((response)=>{
    //         console.log(response)
    //         refresh(dispatch)
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    // };

}
