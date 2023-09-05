import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "../services/api";

const items = localStorage.getItem("bookSelected") !== null ? JSON.parse(localStorage.getItem("bookSelected")) : [];

const counterSlice = createSlice({
    name: "app",
    initialState: {
        booksSelected: items,
        booksOnListDelleted: [],
        library: [],
        loading: 'idle', // Agregado para manejar el estado de carga
        bookFiltred: []

    },
    reducers: {
        setBookSelected: (state, action) => {
            state.booksSelected = [...state.booksSelected, action.payload]
            //Guardamos los libro selcionados en el LocalStorage
            localStorage.setItem("bookSelected", JSON.stringify(state.booksSelected.map(book => book)))
        }, setBooksLisDelleted: (state, action) => {
            state.booksOnListDelleted = [...state.booksOnListDelleted, action.payload]
        }, updateLibrary: (state, action) => {
            state.library = action.payload;
        }, updtaeBookSelected: (state, action) => {
            state.booksSelected = action.payload
            // Actualizamos el localStore al borrar un libro 
            localStorage.setItem("bookSelected", JSON.stringify(state.booksSelected.map(book => book)))
        }, addBookToLibrary: (state, action) => {
            state.library.push(action.payload);
        }, setBooksFiltred: (state, action) => {
            state.bookFiltred = action.payload
        }, resetFilter: (state) => {
            state.bookFiltred = [];
        }, updateBooksFiltred: (state, action) => {
            state.bookFiltred.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {

                const storedData = localStorage.getItem("bookSelected");
                // Aqui sacamos los ISBN de los libros con un map 
                const booksSelectedISBN = JSON.parse(storedData).map(book => book.book.ISBN)


                // const libraryFiltrated = action.payload.map(book => book.book.ISBN).filter(codigoISBN => codigoISBN !== booksSelectedISBN )

                // Aqui miramos si los libros selecionados estan incluidos en la libreria que hacemos el fetch 

                const libraryFiltered = action.payload.filter(book => !booksSelectedISBN.includes(book.book.ISBN));


                console.log(libraryFiltered)

                state.library = libraryFiltered; // Actualiza la biblioteca con los datos recibidos


                state.loading = 'idle';

            })
            .addCase(fetchBooks.rejected, (state) => {
                state.loading = 'failed';
            });
    }

});

export const { setBookSelected, setBooksLisDelleted, setLibrary, updateLibrary, updtaeBookSelected, addBookToLibrary, setBooksFiltred, updateBooksFiltred } = counterSlice.actions;

export default counterSlice.reducer;