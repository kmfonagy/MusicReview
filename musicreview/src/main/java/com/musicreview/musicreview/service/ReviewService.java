package com.musicreview.musicreview.service;

import java.util.List;

import com.musicreview.musicreview.model.Review;

public interface ReviewService {

    List<Review> getAllReviews(int theAlbumId);

    Review saveReview(Review theReview);

}
