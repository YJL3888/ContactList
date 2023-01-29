package com.jasonLiu.MyStudentSystem.service;

import com.jasonLiu.MyStudentSystem.model.Student;

import java.util.List;


public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
