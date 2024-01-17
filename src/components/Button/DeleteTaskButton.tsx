import Button from "./Button";

const DeleteTaskButton = ({ className = ''}: { className?: string }) => {
    return (
        <Button
        className={className}
        text={'Delete task'}
        color="danger"
        onClick={null}
        />
    );
}


export default DeleteTaskButton;