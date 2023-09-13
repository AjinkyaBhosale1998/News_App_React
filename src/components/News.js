import React, { Component } from "react";
import NewsItem from "./NewsItem.js";
import Spinner from "./Spinner.js"

export class News extends Component {
  

    constructor() {
        super();
        console.log("hello from news componenets");
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

   async componentDidMount() {
      console.log("cdm");
      let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bddc4d3699f340c2b98ee91f8bfbb44f";
      let data = await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false })
    }

    handlPrevclick = async () => {
      console.log("Previous");
    }
    handleNextclick = async () => {
      
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bddc4d3699f340c2b98ee91f8bfbb44f&page=${this.state.page + 1}`;
      let data = await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles})
      
      this.setState({
        page:this.state.page + 1,

      })

      console.log("Next");
    }

    render() {

    return (
      <div className="container my-4">
        <h1 className="text-center">Bharat Times 🇮🇳 - Top Headlines</h1>
          <Spinner/>
        <div className="row">
            {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title ? element.title.slice(0, 45) : ""}
    description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}
        </div>

        <div className="container d-flex justify-content-between">
          <button class="btn btn-dark" onclick={this.handlPrevclick}>&larr; Previous</button>
          <button class="btn btn-dark" onclick={this.handleNextclick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
