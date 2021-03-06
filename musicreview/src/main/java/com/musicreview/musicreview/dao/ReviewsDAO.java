package com.musicreview.musicreview.dao;

import java.util.List;

import com.musicreview.musicreview.model.Review;

public interface ReviewsDAO {

    List<Review> getAllReviews(int theAlbumId);

    Review saveReview(Review theReview);

}