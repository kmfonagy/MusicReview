package com.musicreview.musicreview.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.musicreview.musicreview.dao.ReviewsDAO;
import com.musicreview.musicreview.model.Review;

@Service
public class ReviewServiceImplementation implements ReviewService {

    @Autowired
    private ReviewsDAO reviewsDAO;

    @Override
    @Transactional
    public List<Review> getAllReviews(int theAlbumId) {
        return reviewsDAO.getAllReviews(theAlbumId);
    }

    @Override
    @Transactional
    public Review saveReview(Review theReview) {
        return reviewsDAO.saveReview(theReview);
    }
}
