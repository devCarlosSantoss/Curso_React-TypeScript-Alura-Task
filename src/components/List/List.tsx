import React from "react";
import style from  "./List.module.scss"
import { tasks } from "../../data/tasks";
import Item from "./Item/Item";


function List() {

    return (
        <aside className={style.listaTarefas}>
        <h2> Estudos do dia </h2>
        <ul>
          {tasks.map((item, index) => (
            <Item {...item} key={index} />
          ))}
        </ul>
      </aside>
    )
};

export default List;