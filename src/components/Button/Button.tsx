import React from "react";
import style from "./Button.module.scss"

class Botao extends React.Component<React.PropsWithChildren> {
    
    render() {
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
};

export default Botao;