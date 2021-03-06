package com.musicreview.musicreview.service;

import java.util.List;

import com.musicreview.musicreview.model.Music;

public interface MusicService {

    List<Music> getAllAlbums();

    Music getAlbumById(int theId);
}
