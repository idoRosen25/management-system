import { TaskStatus } from '@prisma/client';
import CardLoader from '../Card/CardLoader';

const TaskColumnLoader = ({ status }: { status: TaskStatus }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-5 h-full gap-4 border-2 border-gray-400 rounded-md p-2">
      <>
        <CardLoader key={`${status}_card_column_loader`} />
        <CardLoader key={`${status}_card_column_loader`} />
      </>
      <>
        <CardLoader key={`${status}_card_column_loader`} />
        <CardLoader key={`${status}_card_column_loader`} />
      </>
      <>
        <CardLoader key={`${status}_card_column_loader`} />
        <CardLoader key={`${status}_card_column_loader`} />
      </>
      <>
        <CardLoader key={`${status}_card_column_loader`} />
        <CardLoader key={`${status}_card_column_loader`} />
      </>
      <>
        <CardLoader key={`${status}_card_column_loader`} />
        <CardLoader key={`${status}_card_column_loader`} />
      </>
    </div>
  );
};

export default TaskColumnLoader;
