import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// import components
import { NavigationBar } from './components/NavigationBar';
import Post from './components/Post';
import AddPost from './components/AddPost';
import PostList from './components/PostList';
import EditPost from './components/EditPost';
import { LogIn } from './components/LogIn';
import { SignUp } from './components/SignUp';


const axios = require('axios').default;


const App = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        sendGetRequest();
    }, []);

    const sendGetRequest = async () => {
        try {
            axios.get('http://localhost:3001/posts').then(resp => setPosts(resp.data))
        } catch (error) {
            console.log(error);
        }
    };

    const addPost = async (post) => {
        try {
            axios.post('http://localhost:3001/posts', { "title": post.title, "content": post.content }).then(() => sendGetRequest())
        } catch (error) {
            console.log(error);
        }
    }

    const deletePost = async (id) => {
        console.log(id);
        try {
            axios.delete(`http://localhost:3001/posts/${id}`).then(() => sendGetRequest())
        } catch (error) {
        }
    }

    const updatePost = async (post) => {
        console.log(post._id)
        try {
            axios.put(`http://localhost:3001/posts/${post._id}`, { "title": post.title, "content": post.content }).then(() => sendGetRequest())
        } catch (error) {

        }
    }

    return (
        <div>
            <Router>
                <NavigationBar />
                {/* <h2>Hello { localStorage.getItem('user')}</h2> */}
                <Switch>
                    <Route exact path='/'>
                        <PostList posts={posts} deletePost={deletePost} />
                    </Route>
                    <Route path='/post/:id'>
                        <Post posts={posts} />
                    </Route>
                    <Route path='/new'>
                        <AddPost addPost={addPost} post={{ title: '', content: '' }} />
                    </Route>
                    <Route path='/signin'>
                        <LogIn />
                    </Route>
                    <Route path='/signup'>
                        <SignUp />
                    </Route>
                    <Route path='/edit' >
                        <EditPost posts={posts} updatePost={updatePost} />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
