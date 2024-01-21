import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames:null,
        pressedSearch: false,
    },
    reducers: {
        toggleGptSearchView: (state,action)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state,action)=>{
            const {movieNames, movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        },
        clearGptMovieResult: (state)=>{
            state.movieNames = null;
            state.movieResults = null;
        },
        pressedSearch: (state,action)=>{
            state.pressedSearch = true;
        },
        undoSearch: (state)=>{
            state.pressedSearch = false;
        }
    }
})
export const {toggleGptSearchView,addGptMovieResult, clearGptMovieResult,pressedSearch,undoSearch} = gptSlice.actions
export default gptSlice.reducer