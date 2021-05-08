package com.reins.bookstore.dao;

import com.reins.bookstore.entity.Book;

import java.util.List;

public interface BookDao {
    Book findOne(Integer id);

    List<Book> getBooks();
}
