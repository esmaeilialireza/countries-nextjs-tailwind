import { FC, HTMLProps } from 'react';
import clsx from 'clsx';

import { EyeSvg } from 'components/svg';

interface SearchBarProps extends HTMLProps<HTMLDivElement> {
  onSearch: (searchTerm: string) => void;
  value: string;
}

const SearchBar: FC<SearchBarProps> = ({
  onSearch,
  value,
  className,
  ...props
}) => {
  return (
    <div className={clsx('relative', className)} {...props}>
      <input
        className="border w-full rounded-md p-2"
        onChange={(e) => onSearch(e.target.value)}
        value={value}
        placeholder="Search"
      />
      <div className="absolute end-3 top-[50%] -translate-y-[50%]">
        <EyeSvg />
      </div>
    </div>
  );
};

export default SearchBar;
