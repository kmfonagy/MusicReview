package com.musicreview.musicreview.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.musicreview.musicreview.dao.MyFavoritesDAO;
import com.musicreview.musicreview.model.MyFavorites;

@Service
public class MyFavoritesServiceImplementation implements MyFavoritesService {

    @Autowired
    private MyFavoritesDAO favoritesDAO;

    @Override
    @Transactional
    public List<MyFavorites> getByUserID(int theId) {
        return favoritesDAO.getByUserID(theId);
    }

    @Override
    @Transactional
    public MyFavorites getById(int theId) {
        return favoritesDAO.getById(theId);
    }

    @Override
    @Transactional
    public MyFavorites saveFavorite(MyFavorites theFavorite) {
        return favoritesDAO.saveFavorite(theFavorite);
    }

    @Override
    @Transactional
    public int deleteFavorite(int theId) {
        favoritesDAO.deleteFavorite(theId);
        return theId;
    }
}
