import { useNavigate } from "react-router";
import AddCard from "../component/AddCard";

export default function AddPost() {

    const navigate = useNavigate();

    function onAdd() {
        // redirect su homepage
        navigate('/');
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <AddCard onAdd={onAdd} />
        </div>
    )
}