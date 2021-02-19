package com.musicreview.musicreview.model;
import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name ="reviews")
public class Review {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;

    @Column
    private String title;

    @Column
    private int rating;

    @Column
    private String description;
    
    @Column
    private Date created_On;

    @Override
    public String toString() {
        return "User ID = " + id + " " + "Song Title = " + title + " " +  "Rating = " + rating + " " + "Description = " + description + " " + "Created on = " + created_On;
    }

    public Integer getId() {
        return id;        
    }
    
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title){
        this.title = title;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating){
        this.rating = rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return created_On;
    }
    
    public void setDate(Date created_On) {
        this.created_On = created_On;
    }
    
}