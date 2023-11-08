import React, { useEffect, useState } from 'react'
import {Header} from "../../components/header/Header"
import styles  from "./title.module.css"

import { animImg } from './animImg'
import { animShow } from './animShow'
import { deleteImg } from './deleteImg'
import { images } from '../../images/imagesArray'

export const Title = () => {
    const [ arrImage, setArrImg ] = useState(images())
    const [ arrImgPrev, setArrImgPrev ] = useState([
        [true,true,true,true],
          [true,true,true],
             [true,true],
        [true,true,true,true]
    ])
    const [ headAnim, setHeadAnim ] = useState(false)
    const [ deleteTime, setDeleteTime ] = useState(false)
    const [ arrChar, setArrChar ] = useState([
        // [true,true,true,true,true,true,true,true,true],
        // [true,true,true],
        // [true,true,true,true,true,true]
        [false,false,false,false,false,false,false,false,false],
        [false,false,false],
        [false,false,false,false,false,false]
    ])
    
    useEffect(()=>{
        if(arrImage.length > 1)
        {   
            let interval1, interval2
            interval2 = setInterval(()=>{
                animImg(interval2,arrImgPrev,arrImage,setArrImgPrev,setArrImg)
            },150)
            if(deleteTime)
            {
                interval1 = setInterval(()=>{
                    ///deleteImg(interval1, arrImgPrev, setArrImgPrev)
                    animShow(setArrChar, setHeadAnim)
                },150)
            }
            return () => {
                clearInterval(interval1)
                clearInterval(interval2)
            };
        }
    },[arrImage, deleteTime])

    useEffect(()=>{
        setTimeout(()=>{
            setDeleteTime(true)
        },7200)
    },[])
    ///invise
    return (
        <div className={styles.container}>
            <div className={headAnim? styles.headContainer : styles.headContainer}>
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
                    <div className={styles.blockText__title}>
                        <div className={styles.blockText__title__char}>
                            <p className={arrChar[0][0]? styles.charShow : styles.charInvise}>T</p>
                            <p className={arrChar[0][1]? styles.charShow : styles.charInvise}>H</p>
                            <p className={arrChar[0][2]? styles.charShow : styles.charInvise}>E</p>
                            <p className={arrChar[0][3]? styles.charShow : styles.charInvise}>&nbsp;</p>
                            <p className={arrChar[0][4]? styles.charShow : styles.charInvise}>C</p>
                            <p className={arrChar[0][5]? styles.charShow : styles.charInvise}>O</p>
                            <p className={arrChar[0][6]? styles.charShow : styles.charInvise}>V</p>
                            <p className={arrChar[0][7]? styles.charShow : styles.charInvise}>I</p>
                            <p className={arrChar[0][8]? styles.charShow : styles.charInvise}>D</p>
                        </div>
                    </div>
                    <div className={styles.blockText1}>
                        <div className={styles.blockText__title__char}>
                            <p className={arrChar[1][0]? styles.charShow : styles.charInvise}>A</p>
                            <p className={arrChar[1][1]? styles.charShow : styles.charInvise}>R</p>
                            <p className={arrChar[1][2]? styles.charShow : styles.charInvise}>T</p>
                        </div>
                    </div>
                    <div className={styles.blockText__title}>
                        <div className={styles.blockText__title__char}>
                            <p className={arrChar[2][0]? styles.charShow : styles.charInvise}>M</p>
                            <p className={arrChar[2][1]? styles.charShow : styles.charInvise}>U</p>
                            <p className={arrChar[2][2]? styles.charShow : styles.charInvise}>S</p>
                            <p className={arrChar[2][3]? styles.charShow : styles.charInvise}>E</p>
                            <p className={arrChar[2][4]? styles.charShow : styles.charInvise}>U</p>
                            <p className={arrChar[2][5]? styles.charShow : styles.charInvise}>M</p>
                        </div>
                    </div>
                    {/* {arrChar.map(( value, index ) => {

                        return(
                            <div className={index === 1?styles.blockText1 : styles.blockText__title}>
                                <div className={styles.blockText__title__char}>
                                    {value.map((char) => {
                                        if(char === " " || !char)
                                        {
                                            return
                                        }
                                        return(
                                            <p className={index === 0 && char === "E"?styles.E : ""}>{char}</p>
                                        )
                                    })}
                                </div>

                            </div>
                        )
                    })} */}
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
