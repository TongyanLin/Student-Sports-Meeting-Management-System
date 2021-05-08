package com.reins.bookstore.service;

import com.reins.bookstore.entity.UserAuth;


public interface UserService {

    UserAuth checkUser(String username, String password);
}
