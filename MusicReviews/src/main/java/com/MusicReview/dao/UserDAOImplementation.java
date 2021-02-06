package com.MusicReview.dao;

import java.util.List;

import javax.persistence.EntityManager;
import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.MusicReview.model.User;

@Repository
public class UserDAOImplementation implements UserDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<User> get() {

        Session currSession = entityManager.unwrap(Session.class);
        Query<User> query = currSession.createQuery("from User", User.class);
        List<User> list = query.getResultList();
        return list;

    }

    @Override
    public User get(int id) {

        Session currSession = entityManager.unwrap(Session.class);
        User user = currSession.get(User.class, id);
        return user;

    }
}
