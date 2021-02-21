package com.musicreview.musicreview.model;

import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "music")
public class Music {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;

    @Column
    private String title;

    @Column
    private Date released_Date;

    @Column
    private String duration;

    @Column
    private int rating;

    @Column
    private String genre;

    @Column
    private String artist;

    @Column
    private String albumArt;

    @Override
    public String toString() {
        return "Song id = " + id + " " + "Title = " + title + " " + "Released Date = " + released_Date + " "
                + "Duration = " + duration + " " + "Rating = " + rating + " " + "Genre = " + genre + " " + "Artist = "
                + artist + " " + "albumArt = " + albumArt;
    }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getRelease_Date() {
        return released_Date;
    }

    public void setRelease_Date(Date release_Date) {
        this.released_Date = release_Date;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getAlbumArt() {
        return artist;
    }

    public void setAlbumArt(String albumArt) {
        this.albumArt = albumArt;
    }

}
