
import { types } from "../types"

const initial ={
    title:'старый тескт'
}

export const titleReducer = (state=initial,action)=>{
    switch(action.type){
        case types.CHANGE_TITLE:
            return {...state,title:'новый текст'}
        default: return state
    }
}