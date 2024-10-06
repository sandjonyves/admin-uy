

class ChoiseDish{

    localSave(isChoise){
        localStorage.setItem('isChoise',isChoise)
}
    localGet(){
        return localStorage.getItem('isChoise')
    }

    localInit(){
        localStorage.setItem('isShoise',false)
    }

    
}