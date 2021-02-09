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

    @Transactional
    @Override
    public List<User> get() {
        return userDAO.get();
    }

    @Transactional
    @Override
    public User get(int id) {
        return userDAO.get(id);
    }
}
