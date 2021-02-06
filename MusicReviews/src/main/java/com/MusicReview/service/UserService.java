package com.MusicReview.service;

import java.util.List;

import com.MusicReview.model.User;

public interface UserService {

    List<User> get();

    User get(int id);

}
