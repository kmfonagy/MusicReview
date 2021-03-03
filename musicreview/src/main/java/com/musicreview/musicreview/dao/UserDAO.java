package com.musicreview.musicreview.dao;

import java.util.*;

import com.musicreview.musicreview.model.User;

public interface UserDAO {

    List<User> getAllUsers();

    User getUserById(int theId);

    User getUserByUsername(String theUsername);

    User saveUser(User theUser);

    void delete(int theId);
}
