const INITIAL_STATE={
    isLoading:false,
    news:[],
    message:""
}


export const reducer2=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case "GET_NEWS_START": return {...state, isLoading:true, message:''}
        case 'GET_NEWS': return{...state, news:action.payload, isLoading:false}
        case 'GET_NEWS_ERROR': return{...state, message:action.payload, isLoading:false}
    
        default:
            return state
    }
}
