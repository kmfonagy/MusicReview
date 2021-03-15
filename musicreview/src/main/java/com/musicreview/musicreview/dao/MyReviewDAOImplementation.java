package com.musicreview.musicreview.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.musicreview.musicreview.model.MyReview;

@Repository
public class MyReviewDAOImplementation implements MyReviewDAO {
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<MyReview> getByUserID(int theId) {
        Session currSession = entityManager.unwrap(Session.class);
        Query<MyReview> query = currSession.createQuery("from MyReview r where r.userID=:userid",
                MyReview.class);
        query.setParameter("userid", theId);
        List<MyReview> list = query.getResultList();
        return list;
    }

    @Override
    public MyReview getById(int theId) {
        MyReview myRev = entityManager.find(MyReview.class, theId);
        return myRev; 

    }
    
    @Override
    public MyReview saveMyReview(MyReview theReview) {
        MyReview dbReview = entityManager.merge(theReview);
        theReview.setId(dbReview.getId());
        return theReview;
    }

    @Override
    public void deleteMyReview(int theId) {
        Session currSession = entityManager.unwrap(Session.class);
        MyReview review = currSession.get(MyReview.class, theId);
        currSession.delete(review);

    }

}
