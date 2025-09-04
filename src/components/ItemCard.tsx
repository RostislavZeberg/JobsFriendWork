import { type FC, memo } from 'react';
import type { ItemCardProps } from '../types';

const ItemCard: FC<ItemCardProps> = memo(({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <div className="app__item-card item-card">
      <span className="item-card__text">{item.text}</span>
      <button 
        type="button" 
        onClick={handleDelete}
        className="item-card__button"
        aria-label={`Удалить ${item.text}`}
      >
        Удалить
      </button>
    </div>
  );
});

ItemCard.displayName = 'ItemCard';

export default ItemCard;