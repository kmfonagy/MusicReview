package com.musicreview.musicreview.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.musicreview.musicreview.model.MyFavorites;

@Repository
public class MyFavoritesDAOImplementation implements MyFavoritesDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<MyFavorites> getByUserID(int theId) {
        Session currSession = entityManager.unwrap(Session.class);
        Query<MyFavorites> query = currSession.createQuery("from MyFavorites f where f.userID=:userid",
                MyFavorites.class);
        query.setParameter("userid", theId);
        List<MyFavorites> list = query.getResultList();
        return list;
    }

    @Override
    public MyFavorites getById(int theId) {
        MyFavorites fav = entityManager.find(MyFavorites.class, theId);
        return fav;
    }

    @Override
    public MyFavorites saveFavorite(MyFavorites theFavorite) {
        MyFavorites dbFavorite = entityManager.merge(theFavorite);
        theFavorite.setId(dbFavorite.getId());
        return theFavorite;
    }

    @Override
    public void deleteFavorite(int theId) {
        Session currSession = entityManager.unwrap(Session.class);
        MyFavorites favorite = currSession.get(MyFavorites.class, theId);
        currSession.delete(favorite);
    }
}
