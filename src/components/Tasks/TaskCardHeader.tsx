type Props = {
  title: string;
};
const TaskCardHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex flex-row justify-between">
      <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
    </div>
  );
};
export default TaskCardHeader;
