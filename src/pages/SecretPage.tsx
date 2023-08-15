import { useParams } from 'react-router-dom';
import '../styles/Sceret.css'

function SecretPage() {

    const id = useParams().id;

    return (
        <div className="red">
            <h1>Hello to Secret {id}</h1>
        </div>
    )
}

export default SecretPage;
