package com.musicreview.musicreview.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.musicreview.musicreview.dao.MyReviewDAO;
import com.musicreview.musicreview.model.MyReview;

@Service
public class MyReviewServiceImplementation implements MyReviewService {

    @Autowired
    private MyReviewDAO myReviewDAO;

    @Override
    @Transactional
    public List<MyReview> getByUserID(int theId) {
        return myReviewDAO.getByUserID(theId);
    }

    @Override
    @Transactional
    public MyReview getById(int theId) {
        return myReviewDAO.getById(theId);
    }

    @Override
    @Transactional
    public MyReview saveMyReview(MyReview theReview) {
        return myReviewDAO.saveMyReview(theReview);
    }

    @Override
    @Transactional
    public int deleteMyReview(int theId) {
        myReviewDAO.deleteMyReview(theId);
        return theId;
    }

}
