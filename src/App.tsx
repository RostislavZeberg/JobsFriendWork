import { type FC, useCallback } from 'react';
import ItemCard from './components/ItemCard';
import AddItemForm from './components/AddItemForm';
import { useLocalStorage } from './hooks/useLocalStorage';
import type { Item } from './types';
import './index.scss';

const App: FC = () => {
  const [items, setItems] = useLocalStorage<Item[]>('items', []);

  const addItem = useCallback((text: string) => {
    setItems(prevItems => [...prevItems, { 
      id: Date.now().toString(), 
      text: text.trim() 
    }]);
  }, [setItems]);

  const deleteItem = useCallback((id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }, [setItems]);

  return (
    <div className="app">
      <h1 className="app__title">Список вещей</h1>
      <AddItemForm onAddItem={addItem} />
      <div className="app__items-list">
        {items.length > 0 ? (
          items.map(item => (
            <ItemCard key={item.id} item={item} onDelete={deleteItem} />
          ))
        ) : (
          <p className="app__empty-state">Список пуст. Добавьте первую вещь!</p>
        )}
      </div>
    </div>
  );
};

export default App;