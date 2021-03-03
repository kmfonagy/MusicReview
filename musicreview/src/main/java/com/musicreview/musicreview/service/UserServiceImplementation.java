package com.musicreview.musicreview.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.musicreview.musicreview.dao.UserDAO;
import com.musicreview.musicreview.model.User;

@Service
public class UserServiceImplementation implements UserService {

    @Autowired
    private UserDAO userDAO;

    @Override
    @Transactional
    public List<User> getAllUsers() {
        return userDAO.getAllUsers();
    }

    @Override
    @Transactional
    public User getUserById(int theId) {
        return userDAO.getUserById(theId);
    }

    @Override
    @Transactional
    public User getUserByUsername(String theUsername) {
        return userDAO.getUserByUsername(theUsername);
    }

    @Override
    @Transactional
    public User saveUser(User theUser) {
        return userDAO.saveUser(theUser);
    }

    @Override
    @Transactional
    public int deleteUser(int theId) {
        userDAO.delete(theId);
        return theId;
    }
}
