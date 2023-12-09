import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <p className="text-white">Oops! You seem to be lost. Here are some helpful links</p>
            <Link to='/'><p className="text-slate-200 text-3xl">Click Here!</p></Link>
        </div>
    )
}