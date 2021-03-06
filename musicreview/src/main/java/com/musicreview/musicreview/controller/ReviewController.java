package com.musicreview.musicreview.controller;

import java.util.List;

import com.musicreview.musicreview.model.*;
import com.musicreview.musicreview.service.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api")
public class ReviewController {

    private ReviewService reviewService;

    @Autowired
    public ReviewController(ReviewService theReviewService) {
        reviewService = theReviewService;
    }

    @RequestMapping(value = "/getAllReviews/{albumId}", method = RequestMethod.GET)
    public ResponseEntity<List<Review>> getAllReviews(@PathVariable Integer albumId) {
        return new ResponseEntity<List<Review>>(reviewService.getAllReviews(albumId), HttpStatus.OK);
    }

    @RequestMapping(value = "/newReview", method = RequestMethod.POST)
    public Review addReview(@RequestBody Review theReview) {
        return (reviewService.saveReview(theReview));
    }
}
