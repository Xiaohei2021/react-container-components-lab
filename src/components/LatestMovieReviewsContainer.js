import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'y6haa1JACetI9xWViK29P7zPxGGkEGjb';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        };
    }
    
   

    componentDidMount() {
        fetch(URL)
        .then(r=> r.json())
        .then(data => this.setState({reviews: data.results}))
    }
    
    

    render() {
        return (
            <div className='latest-movie-reviews'>
                <MovieReviews data={this.state.reviews}/>
            </div>
        );
    }
}

export default LatestMovieReviewsContainer;
