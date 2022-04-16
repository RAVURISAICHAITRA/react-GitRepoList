import './App.css';
import axios from 'axios';
//import RepoDetails from "./Components/RepoDetails.js"
import { useState } from "react";
function App() {
  const [username , setUsername] = useState("");
  const[loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [details, setDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    <>
    <div className="details-row">
                <label className="label">Name:</label>
                <span className="value">{details.name}</span>
    </div>
    <div className="details-row">
                <label className="label">Description:</label>
                <span className="value">{details.description}</span>
    </div>
      <div className="details-row">
        <label className="label">Owner name:</label>
        <span className="value">{details.owner.login}</span>
      </div>
      <div className="details-row">
        <label className="label">Stars count:</label>
        <span className="value">{details.stargazers_count}</span>
      </div>
      <div className="details-row">
        <label className="label">Number of forks:</label>
        <span className="value">{details.forks_count}</span>
      </div>
      <div className="details-row">
        <label className="label">language:</label>
        <span className="value">{details.language}</span>
      </div>
    </>
    searchRepos();
  };
  function searchRepos() {
    setLoading(true);
    axios({
      method:"get",
      url:`https://api.github.com/users/${username}/repos`,
    }).then(res => {
      setLoading(false);
      setRepos(res.data);
    })
  }
  function renderRepo(repo){
    return(
      <div className="row" onClick={()=> getDetails(repo.name)} key={repo.id}>
        <h2 className="repo-name">
          {repo.name}
        </h2>
      </div>
    )
  }
  function getDetails(repoName){
    setDetailsLoading(true);
    axios({
      method:"get",
      url:`https://api.github.com/repos/${username}/${repoName}`,
    }).then(res =>{ 
      setDetailsLoading(false);
      setDetails(res.data);
    })
  }
  return (
    <div className="page">
      <div className="landing-page-container">
        <div className="left-side">
          <form className="form">
            <input className='input' value={username} placeholder="Github Username" onChange={e => setUsername(e.target.value)} />
            <button className="button" onClick={handleSubmit}>{loading? "Searching..." : "Search"}</button>
          </form>
          <div className="results-container">
            {repos.map(renderRepo)}
          </div>
        </div>
        {/* <RepoDetails details={details} loading={detailsLoading} /> */}
      </div>
    </div>
  );
}

export default App;
