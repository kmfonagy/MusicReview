package com.musicreview.musicreview.controller;

import java.util.List;

import com.musicreview.musicreview.model.*;
import com.musicreview.musicreview.service.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> get() {
        return userService.get();
    }

    @GetMapping("/users/{id}")
    public User get(@PathVariable int id) {
        return userService.get(id);
    }
}
