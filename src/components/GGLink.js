import { Link } from "react-router-dom";

export default function GGLink({ linkLabel, redirectsTo }) {
    return (
        <Link style={style} to={redirectsTo}>
            {linkLabel}
        </Link>)
}

const style = {
    textDecoration: "none",
    color: "black"
}

