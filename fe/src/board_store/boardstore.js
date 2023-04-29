import {create} from 'zustand';
import axios from 'axios';

const boardStore = create((set) => ({
    board:[],
    isLoading:false,

    getBoardList:()=>{

        set({isLoading:true});

        axios.get(`${process.env.API_URL}/board/details/`)
        .then((response) =>{           
            set({isLoading:false});
            set({board:response.data}) // set the board array from api
        }).catch((err)=>{
            set({isLoading:false});
        })
    }

  }))


  export default boardStore;