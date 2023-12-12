import { useParams } from "react-router-dom";
export default function Profile() {
 const { user } = useParams();
 return <p>Welcome {user}</p>;
}