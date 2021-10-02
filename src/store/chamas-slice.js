import { createSlice } from "@reduxjs/toolkit";

const initialChamasState = {
    chamas: [
        {
            id:'1',organization:'AkiliMali',name:'Mwendazake',location:'Free Area', county:'Nakuru',
            status:'active',branch:'Nakuru',accountManager:'Johnson Mweru',createdAt:'2021-08-09'
        },
        {
            id:'2',organization:'Lolwe',name:'Lamcha',location:'Kapsabet', county:'Baringo',
            status:'active',branch:'Kapsabet',accountManager:'Johnson Mwas',createdAt:'2021-08-09'
        }
    ]
};

const chamas_slice = createSlice({
    name: "chamas",
    initialState: initialChamasState,
    reducers:{
        addChama(state,action){

        },
        updateChama(state,action){

        },
        deleteChama(state, action){

        },
        updateChamaStatus(state,action){

        }
    }
});

export default chamas_slice.reducer;
export const chamasActions = chamas_slice.actions;