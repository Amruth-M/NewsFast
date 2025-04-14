import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class Newscom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true, // Ensure loading is true initially
      page: 1,
      totalResults: 0,
    };
  }

  // Reusable method for fetching articles
  fetchArticles = async (page, category) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=47430c5fc2b542c28900a016597db8c9&page=${page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });

    try {
      const data = await fetch(url);
      const parsedData = await data.json();

      // Log the response for debugging
      console.log(parsedData);

      if (Array.isArray(parsedData.articles)) {
        this.setState({
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
          loading: false,
        });
      } else {
        console.error('API did not return articles as an array');
        this.setState({ articles: [], loading: false });
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
      this.setState({ loading: false });
    }
  };

  // Automatically fetch articles when the component mounts
  async componentDidMount() {
    const category = this.props.category || 'business'; // Default category is business
    this.fetchArticles(this.state.page, category);
  }

  // Handle previous page click
  prevClick = () => {
    if (this.state.page > 1) {
      const newPage = this.state.page - 1;
      this.setState({ page: newPage });
      this.fetchArticles(newPage, this.props.category);
    }
  };

  // Handle next page click
  nextClick = () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
      const newPage = this.state.page + 1;
      this.setState({ page: newPage });
      this.fetchArticles(newPage, this.props.category);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <div className="text-center">
          <h1 style={{ color: 'green' }}>Top Headlines - {this.props.category || 'Business'}</h1>
        </div>
        {this.state.loading && <Spinner />}
        <div className="row my-3">
          {!this.state.loading &&
            this.state.articles.length > 0 &&
            this.state.articles.map((element) => (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  title={element.title || 'No title available'}
                  description={element.description || 'No description available'}
                  imgUrl={element.urlToImage || 'https://via.placeholder.com/150'}
                  newsUrl={element.url}
                />
              </div>
            ))}
        </div>

        {/* Display message if no articles */}
        {!this.state.loading && this.state.articles.length === 0 && (
          <div>No news available. Please try again later.</div>
        )}

        <div className="container d-flex justify-content-evenly">
          <button
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.prevClick}
            className="btn btn-success"
          >
            &#8592; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            onClick={this.nextClick}
            className="btn btn-success"
          >
            Next &#8594;
          </button>
        </div>
      </div>
    );
  }
}

export default Newscom;










