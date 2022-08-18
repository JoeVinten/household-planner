import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/wishlist">wishlist</Link>
          </li>
          <li>
            <Link to="/chores">chores</Link>
          </li>
          <li>
            <Link to="/shoppinglist">shoppinglist</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
