import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";

const Menu = ()=>{
  return <ul>
    <li><NavLink className="nav-link" to="/profile">Профиль</NavLink></li>
    <li><NavLink className="nav-link" to="/settings">Настройки</NavLink></li>
    <li><NavLink className="nav-link" to="/users">Пользователи</NavLink></li>
  </ul>
}

const Profile = ()=>{
    return <div className="row">
        <div className="col-2">
            <img width="100%" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt=""/>
        </div>
        <div className="col-10">
            <h1>Иван Иванов</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet deserunt facilis maxime, porro praesentium qui quibusdam quod, ratione recusandae sapiente soluta vel. Aliquid fugit labore laudantium minima molestias repellat suscipit!</p>
        </div>
    </div>
}

const Settings = ()=>{
    return <div className="row">
        <div className="container my-5">
            <p> Имя: <span> Иван </span> </p>
            <p> Фамилия: <span> Иванов </span> </p>
            <p> Email: <span> ivanov@mail.ru </span> </p>
            <p>ID: <span> 1 </span> </p>
        </div>
    </div>
}

const Users = ()=>{
    return <table className="table table-striped">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Имя</th>
            <th scope="col">Фамилия</th>
            <th scope="col">email</th>
            <th scope="col">id</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Ivan</td>
            <td>Ivanov</td>
            <td>ivanov@mail.ru</td>
            <td>id=1</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Thornton@mail.ru</td>
            <td>id=2</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>theBird@mail.ru</td>
            <td>id=3</td>
        </tr>
        </tbody>
    </table>
}

function App() {
  return (
      <div className="container-fluid">
          <BrowserRouter>
            <div className="row">
              <div className="col-3">
                  <Menu/>
              </div>
              <div className="col-9">
                  <Route path="/profile" render={()=>{return <Profile/>}}/>
                  <Route path="/settings" render={()=>{return <Settings/>}}/>
                  <Route path="/users" render={()=>{return <Users/>}}/>

              </div>
            </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
