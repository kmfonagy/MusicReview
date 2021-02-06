package com.MusicReview.dao;

import java.util.List;

import com.MusicReview.model.User;

public interface UserDAO {

    List<User> get();

    User get(int id);
}
