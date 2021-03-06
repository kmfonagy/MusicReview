package com.musicreview.musicreview.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.musicreview.musicreview.model.Music;

@Repository
public class MusicDAOImplementation implements MusicDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Music> getAllAlbums() {
        Session currSession = entityManager.unwrap(Session.class);
        Query<Music> query = currSession.createQuery("from Music", Music.class);
        List<Music> list = query.getResultList();
        return list;
    }

    @Override
    public Music getAlbumById(int theId) {
        Music music = entityManager.find(Music.class, theId);
        return music;
    }
}
