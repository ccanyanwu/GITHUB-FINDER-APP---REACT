import { FaEye, FaInfo, FaStar, FaLink, FaUtensils } from "react-icons/fa";

const RepoItem = ({ repo }) => {
  const {
    name,
    html_url,
    description,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url} target="_blank" rel="noreferrer">
            <FaLink className="inline mr-1" /> {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
          <div className="badge badge-info badge-lg mr-2">
            <FaEye className="mr-2" /> {watchers_count}
          </div>
          <div className="badge badge-success badge-lg mr-2">
            <FaStar className="mr-2" /> {stargazers_count}
          </div>
          <div className="badge badge-error badge-lg mr-2">
            <FaInfo className="mr-2" /> {open_issues}
          </div>
          <div className="badge badge-warning badge-lg mr-2">
            <FaUtensils className="mr-2" /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
