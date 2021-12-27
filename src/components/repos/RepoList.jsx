import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import Spinner from "../layouts/Spinner";
import RepoItem from "./RepoItem";

const RepoList = ({ repos }) => {
  const { isLoading } = useContext(GithubContext);

  if (isLoading) return <Spinner />;
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Respositories
        </h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
