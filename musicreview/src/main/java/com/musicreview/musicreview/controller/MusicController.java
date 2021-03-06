package com.musicreview.musicreview.controller;

import java.util.List;

import com.musicreview.musicreview.model.*;
import com.musicreview.musicreview.service.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api")
public class MusicController {

    private MusicService musicService;

    @Autowired
    public MusicController(MusicService theMusicService) {
        musicService = theMusicService;
    }

    @RequestMapping(value = "/getAllAlbums", method = RequestMethod.GET)
    public ResponseEntity<List<Music>> getAll() {
        return new ResponseEntity<List<Music>>(musicService.getAllAlbums(), HttpStatus.OK);
    }

    @RequestMapping(value = "/getAlbumById/{albumId}", method = RequestMethod.GET)
    public ResponseEntity<Music> getById(@PathVariable Integer albumId) {
        return new ResponseEntity<Music>(musicService.getAlbumById(albumId), HttpStatus.OK);
    }
}
