// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({data}) => {
    return (
        <div className='review-list'>
            { data.map(review => {
                return (
                    <div className='review' key={review.display_title}>
                        {review["display_title"]}, 
                        {review["byline"]}<br/>
                    </div>)}
                )
            }
        </div>
    );
};

export default MovieReviews;