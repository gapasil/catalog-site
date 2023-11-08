import React from 'react'
import style from "./question.module.css"
import { Link } from 'react-router-dom'
import back from "../../images/back.png"

export const QuestionPage = () => {
  return (
    <div className={style.container}>
        <div className={style.back}>
          <Link to={"/"}>
            <img src={back} alt='back'/>
          </Link>
        </div>
        <div className={style.blockVideo}>
          <iframe width="789" height="427" src="https://www.youtube.com/embed/YFS-rtSQLAM" title="CG bot. Tutorial." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  )
}
