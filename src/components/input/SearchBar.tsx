import React, { ChangeEvent, useState } from 'react';
import CloseButton from '../ui/CloseButton';
import useTheme from '../../hooks/use-theme';

type Props = {
  placeholder: string;
  onChangeText: (text: string) => void;
  onCancelSearch: () => void;
};

const SearchBar = (props: Props) => {
  const [text, setText] = useState<string>('');
  const { inputTheme } = useTheme();
  const searchTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    props.onChangeText(event.target.value);
  };

  const clearInput = () => {
    setText('');
    props.onCancelSearch();
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={searchTextHandler}
        className={inputTheme}
        placeholder={props.placeholder}
      />

      <div className="clear-input" onClick={clearInput}>
        <CloseButton />
      </div>
    </div>
  );
};

export default SearchBar;
