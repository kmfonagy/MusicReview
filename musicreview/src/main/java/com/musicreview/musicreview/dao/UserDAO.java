package com.musicreview.musicreview.dao;

import java.util.List;

import com.musicreview.musicreview.model.User;

public interface UserDAO {

    List<User> get();

    User get(int id);
}
