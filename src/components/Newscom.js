import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spoinner from './Spoinner';

export class Newscom extends Component {
   

    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }

    async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=47430c5fc2b542c28900a016597db8c9&page=1&pageSize=${this.props.pageSize}`;
      // let url = `https://saurav.tech/NewsAPI/top-headlines/category/health/in.json?page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});


      let data =await fetch(url);
      let parseData=await data.json()
      console.log(parseData);
      this.setState({articles:parseData.articles,
        totalResults:parseData.totalResults,
        loading:false
      })
    }

    prevClick=async()=>{
      // let url = `https://saurav.tech/NewsAPI/top-headlines/category/health/in.json?page=${this.state.page-1}&pageSize=${this.props.pageSize}`;

    
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&ategory=${this.props.category}&apiKey=47430c5fc2b542c28900a016597db8c9&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data =await fetch(url);
      let parseData=await data.json()
      console.log(parseData);
      this.setState({
        page:this.state.page-1,
        articles:parseData.articles,
        loading:false
      })
    }

    nextClick=async ()=>{

      if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

      // }
      // else{
        // let url = `https://saurav.tech/NewsAPI/top-headlines/category/health/in.json?page=${this.state.page+1}&pageSize=${this.props.pageSize}`;

      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&ategory=${this.props.category}&apiKey=47430c5fc2b542c28900a016597db8c9&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data =await fetch(url);
      let parseData=await data.json()
      console.log(parseData);
      this.setState({
        page:this.state.page+1,
        articles:parseData.articles,
        loading:false
      })
    }
    }


  render() {
    
    return (
      <div className="container my-3">
        <div className="text-center"><h1 style={{color:'green'}}>Top Headlines- from NewsFast</h1></div>
        {this.state.loading && <Spoinner/>}
           <div className="row my-3">

                {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url}/>
                </div>

            })}
             
           </div>
           <div className="container d-flex justify-content-evenly">
           <button disabled={this.state.page<=1} type="button" onClick={this.prevClick} className="btn btn-success">&#8592;Previous</button>
           <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.nextClick} className="btn btn-success">Next&#8594;</button>
           </div>
      </div>
    )
  }
}

export default Newscom





