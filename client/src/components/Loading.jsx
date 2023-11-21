import { BounceLoader } from "react-spinner";
import './Loading.css';

const Loading = () => {
    return (
        <div className="overlay">
            <BounceLoader size={100} color={"#393646"} loading={true} />
        </div>
    )
}

export default Loading;