package com.musicreview.musicreview.dao;

import java.util.List;

import com.musicreview.musicreview.model.MyFavorites;

public interface MyFavoritesDAO {

    List<MyFavorites> getByUserID(int theId);

    MyFavorites getById(int theId);

    MyFavorites saveFavorite(MyFavorites theFavorite);

    void deleteFavorite(int theId);
}
