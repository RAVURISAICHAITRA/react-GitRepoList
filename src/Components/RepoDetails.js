export default function RepoDetails({details , loading}){
    if(loading) {
        return(
            <h1 className='loader'>Loading...</h1>
        )
    }
    return(
        <div className="repo-details-container">
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
        </div>
    )
}



