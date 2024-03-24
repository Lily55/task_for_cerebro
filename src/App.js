import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import $ from 'jquery';

export default function App() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
}

function Header() {
    return (
      <div className='title'><h1>Posts</h1></div>
    )
}

function Content() {
  const defaultValue = [];
  const [posts, setPosts] = useState(defaultValue);

  const getPosts = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then((response) => response.json());

    setPosts(response);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const [users, setUsers] = useState(defaultValue);

  const getUsers = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((response) => response.json());

    setUsers(response);
  }

  useEffect(() => {
    getUsers();
  }, []);

  function checkUser( userId ){
    var user = null;
      user = users.find((user) => {return (user.id === userId)})
      return user.username
  }

  return(
    <div>
      {
        posts.map((post) => (
          <div className='vertical-container'>
            <tr>User: {checkUser(post.userId)}</tr>
            <tr>Title: {post.title}</tr>
            <tr>Body: {post.body}</tr>
          </div>
        ))
      }
    </div>
  )
}