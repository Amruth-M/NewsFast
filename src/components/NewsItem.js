import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
     let {title,description,imgUrl,newsUrl}=this.props;
    return (
      <div>
        <div className="card">
            <img src={!imgUrl?"https://image.cnbcfm.com/api/v1/image/108098050-1738787012467-gettyimages-2197839078-esteelauder584426_rzcw45cs.jpeg?v=1738787151&w=1920&h=1080":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
