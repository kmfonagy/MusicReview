package com.musicreview.musicreview.service;
import java.util.List;

import com.musicreview.musicreview.model.MyReview;

public interface MyReviewService {

    List<MyReview> getByUserID(int userID);

    MyReview getById(int theId);

    MyReview saveMyReview(MyReview theReview);

    int deleteMyReview(int theId);

}
