import React, { Component } from 'react';

export class NewsItem extends Component {
  
  render() {
    
    let { title, description, imageUrl, newsUrl } = this.props;
    
    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={!imageUrl?"https://i.insider.com/64fe8243a39a1b00190cd432?width=1200&format=jpeg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
            {description}...</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
          </div>
        </div>
          
      </div>
    );
  }
}

export default NewsItem;
