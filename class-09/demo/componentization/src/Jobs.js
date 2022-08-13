import React from 'react';

class Jobs extends React.Component {
  render() {
    return (
      <>
        {this.props.jobs.map((job, idx) => (
          <Job 
            job={job}
            idx={idx}
          />
        ))}
      </>
    )
  }
}

class Job extends React.Component {
  render() {
    return (
      <div key={this.props.idx}>
        <h3>Vault Tec</h3>
        <h2><a href={this.props.job.url}>{this.props.job.name}</a></h2>
        <p>{this.props.job.description}</p>
        <p>{this.props.job.location}</p>
      </div>
    )
  }
}

export default Jobs;