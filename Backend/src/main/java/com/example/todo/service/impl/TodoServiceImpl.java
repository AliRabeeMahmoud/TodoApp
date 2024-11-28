package com.example.todo.service.impl;

import com.example.todo.model.Todo;
import com.example.todo.repository.TodoRepository;
import com.example.todo.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;




@RequiredArgsConstructor
@Service
public class TodoServiceImpl implements TodoService {

    private final TodoRepository todoRepository;

    @Override
    public Todo save(Todo todo) {

        return todoRepository.save(todo);
    }

    @Override
    public Todo update(Todo todo) {
        Todo oldTodo = todoRepository.findById(todo.getId()).orElse(null);
        oldTodo.setTitle(todo.getTitle());
        oldTodo.setDone(todo.getDone());
        todoRepository.save(todo);
        return oldTodo;
    }

    @Override
    public List<Todo> findAll() {
        return todoRepository.findAll();
    }

    @Override
    public Todo findById(Long id) {

        return todoRepository.findById(id).orElse(null);
    }


    @Override
    public String delete(Long id) {

        todoRepository.deleteById(id);
        return "Deleted";
    }
}
