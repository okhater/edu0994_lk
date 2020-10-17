import React from "react";

export class Settings extends React.Component{
    render(){
        return <div className="row">
            <div className="container my-5">
                <p> Имя: <span> Иван </span> </p>
                <p> Фамилия: <span> Иванов </span> </p>
                <p> Email: <span> ivanov@mail.ru </span> </p>
                <p>ID: <span> 1 </span> </p>
            </div>
        </div>
    }
}