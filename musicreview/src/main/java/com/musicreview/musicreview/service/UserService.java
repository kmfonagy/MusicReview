package com.musicreview.musicreview.service;

import java.util.List;

import com.musicreview.musicreview.model.User;

public interface UserService {

    List<User> getAllUsers();

    User getUserById(int theId);

    User getUserByUsername(String theUsername);

    User saveUser(User theUser);

    int deleteUser(int theId);

}
