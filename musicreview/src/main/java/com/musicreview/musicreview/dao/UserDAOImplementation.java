package com.musicreview.musicreview.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.musicreview.musicreview.model.User;

@Repository
public class UserDAOImplementation implements UserDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<User> getAllUsers() {
        Session currSession = entityManager.unwrap(Session.class);
        Query<User> query = currSession.createQuery("from User", User.class);
        List<User> list = query.getResultList();
        return list;
    }

    @Override
    public User getUserById(int theId) {
        User user = entityManager.find(User.class, theId);
        return user;
    }

    @Override
    public User getUserByUsername(String theUsername) {
        Session currSession = entityManager.unwrap(Session.class);
        Query<User> query = currSession.createQuery("from User u where u.username=:username", User.class);
        query.setParameter("username", theUsername);
        User user = query.getSingleResult();
        return user;
    }

    @Override
    public User saveUser(User theUser) {
        User dbUser = entityManager.merge(theUser);
        theUser.setId(dbUser.getId());
        return theUser;
    }

    @Override
    public void delete(int theId) {
        Session currSession = entityManager.unwrap(Session.class);
        User user = currSession.get(User.class, theId);
        currSession.delete(user);
    }
}
