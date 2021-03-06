package com.musicreview.musicreview.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.musicreview.musicreview.dao.MusicDAO;
import com.musicreview.musicreview.model.Music;

@Service
public class MusicServiceImplementation implements MusicService {

    @Autowired
    private MusicDAO musicDAO;

    @Override
    @Transactional
    public List<Music> getAllAlbums() {
        return musicDAO.getAllAlbums();
    }

    @Override
    @Transactional
    public Music getAlbumById(int theId) {
        return musicDAO.getAlbumById(theId);
    }
}
