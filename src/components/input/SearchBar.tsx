import React, { ChangeEvent, useState } from 'react';
import CloseButton from '../ui/CloseButton';
import useTheme from '../../hooks/use-theme';

const SearchBar = () => {
  const [text, setText] = useState<string>('');
  const { inputTheme } = useTheme();
  const searchTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const clearInput = () => {
    setText('');
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={searchTextHandler}
        className={inputTheme}
      />

      <div className="clear-input" onClick={clearInput}>
        <CloseButton />
      </div>
    </div>
  );
};

export default SearchBar;
