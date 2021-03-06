package com.musicreview.musicreview.dao;

import java.util.*;

import com.musicreview.musicreview.model.Music;

public interface MusicDAO {

    List<Music> getAllAlbums();

    Music getAlbumById(int theId);
}
