import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const [quotes, setQuotes] = useState([]);

 useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('http://dummyjson.com/quotes');
        const data = await response.json();
        setQuotes(data.quotes.slice(0, 10));
      } catch (error) {
        console.log('Error fetching quotes:', error);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <div>
      <h1>
      <ul>
        {quotes.map((q) => (
          <li>
            {q.quote}
          </li>
        ))}
      </ul>
      </h1>
    </div>
  );
}

export default App;
