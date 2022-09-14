import React from "react";
import styles from '../styles/Home.module.css'

interface propInterface{
    title: string | null,
    descript: string | null,
    type? : string | null
}


export default function Card(props: propInterface){
return( 
    <React.Fragment>
        <span className={styles.card}>
            <h2>{props.title} &rarr;</h2>
            <p>{props.descript}</p>
        </span>
    </React.Fragment>
    )

}