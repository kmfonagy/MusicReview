package com.musicreview.musicreview.service;

import java.util.List;

import com.musicreview.musicreview.model.User;

public interface UserService {

    List<User> get();

    User get(int id);

}
