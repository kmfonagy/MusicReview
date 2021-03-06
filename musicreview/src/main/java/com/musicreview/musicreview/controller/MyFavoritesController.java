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
public class MyFavoritesController {

    private MyFavoritesService favoritesService;

    @Autowired
    public MyFavoritesController(MyFavoritesService theFavoritesService) {
        favoritesService = theFavoritesService;
    }

    @RequestMapping(value = "/getFavoriteByUserId/{favId}", method = RequestMethod.GET)
    public ResponseEntity<List<MyFavorites>> getByUserId(@PathVariable Integer favId) {
        return new ResponseEntity<List<MyFavorites>>(favoritesService.getByUserID(favId), HttpStatus.OK);
    }

    @RequestMapping(value = "/newFavorite", method = RequestMethod.POST)
    public MyFavorites addFavorite(@RequestBody MyFavorites theFavorite) {
        return (favoritesService.saveFavorite(theFavorite));
    }

    @RequestMapping(value = "/deleteFavorite/{favId}", method = RequestMethod.DELETE)
    public String deleteUser(@PathVariable Integer favId) {
        MyFavorites tempFav = favoritesService.getById(favId);
        if (tempFav == null) {
            throw new RuntimeException("Favorite not found");
        }
        favoritesService.deleteFavorite(favId);
        return "delete favorite id " + favId;
    }
}
