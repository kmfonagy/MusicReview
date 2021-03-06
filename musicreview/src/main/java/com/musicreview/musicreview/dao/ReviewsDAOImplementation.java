package com.musicreview.musicreview.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.musicreview.musicreview.model.Review;

@Repository
public class ReviewsDAOImplementation implements ReviewsDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Review> getAllReviews(int theAlbumId) {
        Session currSession = entityManager.unwrap(Session.class);
        Query<Review> query = currSession.createQuery("from Review r where r.musicID=:musicid", Review.class);
        query.setParameter("musicid", theAlbumId);
        List<Review> list = query.getResultList();
        return list;
    }

    @Override
    public Review saveReview(Review theReview) {
        Review dbReview = entityManager.merge(theReview);
        theReview.setId(dbReview.getId());
        return theReview;
    }
}
