/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Chores from './pages/Chores';
import ShoppingList from './pages/ShoppingList';
import WishList from './pages/WishList';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="chores" element={<Chores />} />
      <Route path="shoppinglist" element={<ShoppingList />} />
      <Route path="wishlist" element={<WishList />} />
    </Routes>
  </BrowserRouter>,
);
