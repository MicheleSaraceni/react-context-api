import { useContext } from "react";
import AlertContext from "../contexts/AlertContext";
export default function Alert() {
    const { message } = useContext(AlertContext);
    return (
        <div>
            {message}
        </div>
    )
}