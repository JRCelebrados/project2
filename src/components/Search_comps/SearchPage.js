import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';

const SearchPage = (props) => {
    const [input, setInput] = useState('');
    const [bookListDefault, setBookListDefault] = useState();
    const [bookList, setBookList] = useState();

    const fetchData = async () => {
        return await fetch('https://openlibrary.org/dev/docs/api/search.json')
        .then(response => response.json())
        .then(data =>{
            setBookList(data)
            setBookListDefault(data)
        });
    }

    const updateInput = async(input) => {
        const filtered = bookListDefault.filter(book => {
            return book.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setBookList(filtered);
    }

    useEffect( () => {fetchData()}, []);

    return (
        <>
        <h1>Book List</h1>
        <SearchBar input={input}
        onChange={updateInput}
        />
        <BookList bookList={bookList}/>
        </>
    )
}