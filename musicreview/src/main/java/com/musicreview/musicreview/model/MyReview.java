package com.musicreview.musicreview.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "review")

public class MyReview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "MusicID")
    private Integer musicID;

    @Column(name = "UserID")
    private Integer userID;

    public Integer getId() {
        return id;
    }

    public void setId(Integer Id) {
        this.id = Id;
    }

    public Integer getMusicID() {
        return musicID;
    }

    public Integer getUserID() {
        return userID;
    }
}
