import React from "react";
import styles from '../styles/Home.module.css'

interface propInterface{
    title: string,
    descript: string,
    type? : string
}


export default function Card(props: propInterface){
    const descriptions : string = props.descript;
    const newDescript: JSX.Element[] = descriptions?.split('\n').map(str => <p key={str+"Card"}>{str}</p>);
return( 
    <React.Fragment>
        <span  className={styles.card}>
            <h2>{props.title} &rarr;</h2>
            <div>{newDescript}</div>
        </span>
    </React.Fragment>
    )

}