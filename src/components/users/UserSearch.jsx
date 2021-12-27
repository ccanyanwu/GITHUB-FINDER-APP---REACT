import { useState, useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import GithubContext from "../../context/github/GithubContext";
import { searchUsers } from "../../context/github/GithubActions";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const {setAlert} = useContext(AlertContext)

  //handle form input change
  const handleChange = (e) => setText(e.target.value);

  //handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text.trim().length > 0) {
      dispatch({ type: 'SET_LOADING' });
      const users = await searchUsers(text);
      dispatch({type: 'GET_USERS', payload: users})
      setText("");
    } else {
      setAlert("Please enter a name", "error");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={() => dispatch({type: 'CLEAR_USERS'})}>Clear</button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
