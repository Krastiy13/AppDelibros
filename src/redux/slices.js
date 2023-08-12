import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "../services/api";
const counterSlice = createSlice({
    name: "app",
    initialState: {
        booksSelected: [],
        booksOnListDelleted: [],
        library: [],
        loading: 'idle', // Agregado para manejar el estado de carga
    },
    reducers: {
        setBookSelected: (state, action) => {
            state.booksSelected = [...state.booksSelected, action.payload]
        }, setBooksLisDelleted: (state, action) => {
            state.booksOnListDelleted = [...state.booksOnListDelleted, action.payload]
        }, updateLibrary: (state, action) => {
            state.library = action.payload;
        }, updtaeBookSelected: (state, action) => {
            state.booksSelected = action.payload
        }, addBookToLibrary: (state, action) => {
            state.library.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.library = action.payload; // Actualiza la biblioteca con los datos recibidos
            })
            .addCase(fetchBooks.rejected, (state) => {
                state.loading = 'failed';
            });
    }

});

export const { setBookSelected, setBooksLisDelleted, setLibrary, updateLibrary, updtaeBookSelected, addBookToLibrary } = counterSlice.actions;

export default counterSlice.reducer;