import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  title: string;
  items?: {
    id: string;
    name: string;
  }[];
  selectedItemId?: string;
  onChange: (value: string) => void;
  [key: string]: unknown;
};

const SelectInput: React.FC<Props> = ({
  title = 'select',
  items = [],
  onChange,
  selectedItemId,
}) => {
  const selectedItem = useMemo(() => {
    return items.find((item) => item.id === selectedItemId);
  }, [items, selectedItemId]);
  return (
    <div className="group relative cursor-pointer py-2 border border-gray-400 rounded-lg">
      <div className="flex items-center justify-between space-x-5 bg-white pr-4">
        <a className="capitalize menu-hover py-2 text-base font-medium text-black lg:mx-4">
          {selectedItem?.name.toLowerCase() || title}
        </a>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>

      <div className="border invisible absolute z-50 top-12 divide-y flex w-full flex-col bg-white text-gray-800 shadow-xl group-hover:visible rounded-lg">
        {items.map(({ id, name }) => (
          <div
            key={id}
            onClick={() => onChange(id)}
            className={twMerge(
              'capitalize p-3 block font-semibold text-gray-500 hover:text-black first:rounded-t-lg last:rounded-b-lg hover:bg-indigo-200',
              id === selectedItemId
                ? 'bg-indigo-600 text-white hover:bg-indigo-800'
                : '',
            )}
          >
            {name.toLowerCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectInput;
