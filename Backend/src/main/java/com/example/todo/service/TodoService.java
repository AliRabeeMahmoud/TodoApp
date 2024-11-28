package com.example.todo.service;


import com.example.todo.model.Todo;

import java.util.List;

public interface TodoService {

    Todo save(Todo todoDto);
    Todo update(Todo todoDto);

    List<Todo> findAll();

    Todo findById(Long id);


    String  delete(Long id);

}
