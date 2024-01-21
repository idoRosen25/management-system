'use client';
import { Endpoints } from "@/consts";
import Button from "./Button";
import { axios } from "@/utils/axios";
import { useRouter } from "next/navigation";
import { useState } from "react";


const DeleteTaskButton = ({ taskId }: { taskId: string }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const deleteTask = async () => {
        setLoading(true);
        await axios.delete(Endpoints.TASKS + '/' + taskId);
        setLoading(false);
        router.refresh();
    };

    return (
        
        <Button
        text={'Delete task'}
        color="danger"
        onClick={() => deleteTask()}
        isLoading={loading}
        />
    );
}


export default DeleteTaskButton;