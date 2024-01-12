import { useRouteError } from "react-router-dom";

const Error = () => {
    let err = useRouteError();
    return (
        <div className="m-4 p-4">
            <h1 className="font-bold">Oops!!</h1>
            <h2 className="font-bold">Something went wrong</h2>
            <h3 className="font-bold">{err.status}: {err.statusText}</h3>
        </div>
    )
}

export default Error;