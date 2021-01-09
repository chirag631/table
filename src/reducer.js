
const iState={

    selects:[],
    name:"1",
    email:"abcd"
}

const reducer = (state=iState,action) =>{

    if(action.type==='CHANGE_DATA'){
        return{
            ...state,
            selects:action.payload
        }
    }
    return state;
}

export default reducer;