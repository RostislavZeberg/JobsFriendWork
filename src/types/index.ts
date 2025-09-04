export interface Item {
  id: string;
  text: string;
}

export interface ItemCardProps {
  item: Item;
  onDelete: (id: string) => void;
}

export interface AddItemFormProps {
  onAddItem: (text: string) => void;
}