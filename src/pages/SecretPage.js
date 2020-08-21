import React from 'react'
import styles from './Sceret.css'

function SecretPage(routerProps) {

    const id = routerProps.match.params.id;

    return (
        <div className={styles.red}>
            <h1>Hello to Secret {id}</h1>
        </div>
    )
}

export default SecretPage;
