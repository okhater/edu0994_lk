import React from "react";

export const Users = ()=>{
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