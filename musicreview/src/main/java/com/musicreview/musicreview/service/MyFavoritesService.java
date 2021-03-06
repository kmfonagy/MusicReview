package com.musicreview.musicreview.service;

import java.util.List;

import com.musicreview.musicreview.model.MyFavorites;

public interface MyFavoritesService {

    List<MyFavorites> getByUserID(int theId);

    MyFavorites getById(int theId);

    MyFavorites saveFavorite(MyFavorites theFavorite);

    int deleteFavorite(int theId);

}
