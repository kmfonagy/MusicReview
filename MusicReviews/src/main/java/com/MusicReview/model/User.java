package com.MusicReview.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;

    @Column
    private String username;

    @Column
    private String password;

    @Override
    public String toString() {
        return "User ID = " + id + " " + "Username = " + username + " " + "Password = " + password;
    }
    public Integer getId() {return id; }

    public String getName() {
        return username;
    }

    public void setName(String name) {
        this.username = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
