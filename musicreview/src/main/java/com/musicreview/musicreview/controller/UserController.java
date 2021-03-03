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
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService theUserService) {
        userService = theUserService;
    }

    @RequestMapping(value = "/getAllUsers", method = RequestMethod.GET)
    public ResponseEntity<List<User>> getAll() {
        return new ResponseEntity<List<User>>(userService.getAllUsers(), HttpStatus.OK);
    }

    @RequestMapping(value = "/getUserById/{userId}", method = RequestMethod.GET)
    public ResponseEntity<User> getById(@PathVariable Integer userId) {
        return new ResponseEntity<User>(userService.getUserById(userId), HttpStatus.OK);
    }

    @RequestMapping(value = "/getByUsername/{userName}", method = RequestMethod.GET)
    public ResponseEntity<User> getByUsername(@PathVariable String userName) {
        return new ResponseEntity<User>(userService.getUserByUsername(userName), HttpStatus.OK);
    }

    @RequestMapping(value = "/newUser", method = RequestMethod.POST)
    public User addUser(@RequestBody User theUser) {
        return (userService.saveUser(theUser));
    }

    @RequestMapping(value = "/deleteUser/{userId}", method = RequestMethod.DELETE)
    public String deleteUser(@PathVariable Integer userId) {
        User tempUser = userService.getUserById(userId);
        if (tempUser == null) {
            throw new RuntimeException("User not found");
        }
        userService.deleteUser(userId);
        return "delete user id " + userId;
    }
}
