import React from 'react';
import { render } from 'react-dom';
import './style.css';

import { Book } from './components/Book';

const books = ['Harry Potter', 'Maly princ', 'Velky kral', 'Starec a more'];

const App = () => (
  <>
    {books.map((kniha) => {
      return <Book name={kniha} />;
    })}
  </>
);

render(<App />, document.querySelector('#app'));
