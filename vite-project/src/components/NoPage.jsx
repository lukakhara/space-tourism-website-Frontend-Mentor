import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="min-h-screen  flex justify-center items-center text-white text-[4rem] bg-black">
      <h1 className="">NOT FOUNT PAGE</h1>
      <Link to={"/"}>
        <button className="border-2">RETURN TO HOME PAGE</button>
      </Link>
    </div>
  );
}

export default NoPage;
