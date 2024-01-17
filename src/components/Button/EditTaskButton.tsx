import Button from "./Button"


const EditTaskButton = ({ className = ''}: { className?: string }) => {
    return (
        <Button
        className={className}
        text={'Edit task'}
        color="primary"
        onClick={null}
        />
    );
}

export default EditTaskButton;