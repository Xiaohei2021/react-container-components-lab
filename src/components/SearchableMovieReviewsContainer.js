import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'y6haa1JACetI9xWViK29P7zPxGGkEGjb';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;


// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews:[],
            searchTerm: ""
        };
    }
    

    handleSubmit = (e) =>{
        e.preventDefault();

        fetch(URL+this.state.searchTerm)
        .then(r=>r.json())
        .then(data => (this.setState({reviews: data, searchTerm: ""})))
        
    }

    handleInput = (e) => {
        this.setState({searchTerm: e.target.value});
    }

    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Enter your Search Term here' onChange={this.handleInput}/>
                    <input type="submit"/>
                 </form>

                 <MovieReviews data={this.state.reviews}/>
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;