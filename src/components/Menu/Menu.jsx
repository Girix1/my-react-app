import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/article"}>
        <button>Article</button>
      </Link>
      <Link to="/about">
      <button>About</button>
      </Link>
      <Link to="/dfsfs">
      <button>error</button>
      </Link>
    </>
  );
}
