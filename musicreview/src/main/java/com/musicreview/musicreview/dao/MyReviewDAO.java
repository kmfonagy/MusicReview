package com.musicreview.musicreview.dao;

import java.util.List;

import com.musicreview.musicreview.model.MyReview;

public interface MyReviewDAO {

    List<MyReview> getByUserID(int theId);

    MyReview getById(int theId);

    MyReview saveMyReview(MyReview theReview);

    void deleteMyReview(int theId);
}