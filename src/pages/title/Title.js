import React, { useEffect, useState } from 'react'
import {Header} from "../../components/header/Header"
import styles  from "./title.module.css"

export const Title = () => {
    const [ arrImgPrev, setArrImgPrev ] = useState()

    return (
        <div className={styles.container}>
            <div className={styles.container__blockHeader}>
                <Header/>
            </div>
            <div className={styles.content}>
                <div className={styles.text__title} style={
                    {
                        width: window.innerWidth, 
                        height: window.innerHeight,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: "center",
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        marginLeft: `-${window.innerWidth / 2}px`,
                        marginTop: `-${window.innerHeight / 2}px`,
                        paddingTop: '50px'
                    }
                }>
                </div>
                <div className={styles.container__images}>
                    {arrImgPrev.map((value) => {
                        return(
                            <div className={styles.blocks__image}>
                                {value.map((image) => {
                                    if(!image)
                                    {
                                        return(
                                            <div className={styles.image__block}></div>
                                        )
                                    }
                                    if(image === true)
                                    return(
                                        <div className={styles.image__block}>
                                            <div className={styles.image__title__unl}></div>
                                        </div>
                                    )
                                    return(
                                        <div className={styles.image__block}>
                                            <img src={image} className={styles.image__title}/>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
