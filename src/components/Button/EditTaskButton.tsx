'use client';
import Button from "./Button"


const EditTaskButton = ({ className = ''}: { className?: string }) => {
    return (
        <Button
        className={className}
        text={'Edit task'}
        color="primary"
        onClick={() => console.log('Edit task button clicked')}
        />
    );
}

export default EditTaskButton;