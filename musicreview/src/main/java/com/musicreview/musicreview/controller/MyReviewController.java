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
public class MyReviewController {
    
    private MyReviewService myReviewService;

    @Autowired
    public MyReviewController(MyReviewService theReviewService) {
        myReviewService = theReviewService;
    }

    @RequestMapping(value = "/getMyReviewByUserId/{userId}", method = RequestMethod.GET)
    public ResponseEntity<List<MyReview>> getByUserId(@PathVariable Integer userId) {
        return new ResponseEntity<List<MyReview>>(myReviewService.getByUserID(userId), HttpStatus.OK);
    }
    
    @RequestMapping(value = "/newMyReview", method = RequestMethod.POST)
    public MyReview addMyReview(@RequestBody MyReview theReview) {
        return (myReviewService.saveMyReview(theReview));
    }

    @RequestMapping(value = "/deleteMyReview/{userId}", method = RequestMethod.DELETE)
    public String deleteUser(@PathVariable Integer userId) {
        MyReview tempRev = myReviewService.getById(userId);
        if (tempRev == null) {
            throw new RuntimeException("User review not found");
        }
        myReviewService.deleteMyReview(userId);
        return "delete user review " + userId;
    }
}
