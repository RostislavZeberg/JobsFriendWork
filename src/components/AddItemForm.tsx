import React, { type FC, useState, useCallback } from 'react';
import type { AddItemFormProps } from '../types';

const AddItemForm: FC<AddItemFormProps> = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) {
      setError('Поле не должно быть пустым');
      return;
    }
    
    setError('');
    onAddItem(trimmedValue);
    setInputValue('');
  }, [inputValue, onAddItem]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    if (error && value.trim()) {
      setError('');
    }
  }, [error]);

  return (
    <form onSubmit={handleSubmit} className="app__input-container input-container" noValidate>
      <label htmlFor="item-input" className="input-container__label">
        Название вещи:
      </label>
      <input
        id="item-input"
        name="itemName"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите название вещи"
        className={`input-container__input ${error ? 'input-container__input--error' : ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? 'input-error' : undefined}
      />
      <button type="submit" className="input-container__button">
        Добавить
      </button>
      {error && (
        <div id="input-error" className="input-container__error" role="alert">
          {error}
        </div>
      )}
    </form>
  );
};

export default AddItemForm;