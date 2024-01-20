'use client';
import { Endpoints } from "@/consts";
import Button from "./Button";
import { axios } from "@/utils/axios";
import { useRouter } from "next/navigation";

const DeleteTaskButton = ({ taskId }: { taskId: string }) => {
    const router = useRouter();
    const deleteTask = async () => {
        await axios.delete(Endpoints.TASKS + '/' + taskId);
        router.refresh();
    };

    return (
        <Button
        text={'Delete task'}
        color="danger"
        onClick={() => deleteTask()}
        />
    );
}


export default DeleteTaskButton;