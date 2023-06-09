package com.musicreview.musicreview.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "title")
    private String title;

    @Column(name = "rating")
    private int rating;

    @Column(name = "descript")
    private String description;

    @Column(name = "created_on")
    private String created_on;

    @Column(name = "musicID")
    private Integer musicID;

    @Column(name = "userID")
    private Integer userID;

    @Override
    public String toString() {
        return "User ID = " + id + " " + "Song Title = " + title + " " + "Rating = " + rating + " " + "Descript = "
                + description + " " + "Created on = " + created_on;
    }

    public Integer getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCreated_On() {
        return created_on;
    }

    public void setCreated_On(String created_on) {
        this.created_on = created_on;
    }

    public Integer getUserID() {
        return userID;
    }

    public Integer getMusicID() {
        return musicID;
    }
}