import React, { useEffect, useState } from 'react'
import style from "./findPage.module.css"
import Input from "../../components/input/Input"
import logo from "../../images/LOGO tg 5.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Buffer} from 'buffer';
import copy from "../../images/copy.png"
import home from "../../images/back home.png"
import question from "../../images/info-button.png"
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';


export const FindPage = () => {
    const [ arrImg, setArrImg ] = useState([])
    const [ preview, setPreview ] = useState([
        [],[],[],[],[],[],[],[],[],[]
    ])
    const [ currentPage, setCurrPage ] = useState(1)
    const [ fetching, setFetching ] = useState(true)
    const [ viewTarget, setViewTarget ] = useState()
    const [ inputValue, setInputValue ] = useState("")

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const fetchAdd = () =>{
        let username = 'admin';
        let password = 'secret';

        let headers = new Headers();

        headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));

        if(fetching && inputValue)
        {
            fetch(`${process.env.REACT_APP_SERVER}dddru?filter={'tags':'${inputValue.toLowerCase()}'}&pagesize=60&page=${currentPage}`, {
                method:'GET',
                headers: headers,
            })
            .then((res) => {
                if(res.status === 400)
                {
                    return 400
                }
                setCurrPage((prev) => prev + 1)
                return res.json()
            })
            .then((value) =>{
                if(value === 400)
                {
                    setPreview(400)
                    setArrImg([])
                    return
                }
                setArrImg([...arrImg, ...value])
            })
            .finally(()=>setFetching(false))
        }
    }

    const fetchFind = () =>{
        let username = 'admin';
        let password = 'secret';

        let headers = new Headers();

        headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));

        if(inputValue)
        {
            setPreview([[],[],[],[],[],[],[],[],[],[]])
            fetch(`${process.env.REACT_APP_SERVER}dddru?filter={'tags':'${inputValue.toLowerCase()}'}&pagesize=80`, {
                method:'GET',
                headers: headers,
            })
            .then((res) => {
                if(res.status === 400)
                {
                    return 400
                }
                setCurrPage(1)
                return res.json()
            })
            .then((value) => {
                if(value === 400)
                {
                    setPreview(400)
                    setArrImg([])
                    return
                }
                setArrImg(value)
            })
            .finally(()=>setFetching(false))
        } else {
            setPreview([[],[],[],[],[],[],[],[],[],[]])
        }
    }

    useEffect(()=>fetchFind(),[inputValue])
    useEffect(()=>fetchAdd(),[fetching])

    useEffect(()=>{
        if(!inputValue)
        {
            setPreview([[],[],[],[],[],[],[],[],[],[]])
            return
        }
        if(arrImg.length > 0 && preview !== 400)
        {
            document.addEventListener("scroll", scrollHandler)

            let arrimg = [...arrImg]
            let arr = [...preview]
    
            for(let i = 0; i < arrImg.length / 6; i++)
            {
                arr[i] = arrimg.splice(0,6)
            }
            setPreview(arr)
    
            return function () {
                document.addEventListener("scroll", scrollHandler)
            }
        } else {
            setPreview(400)
        }
    },[arrImg])

    const scrollHandler = (e) =>{
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100)
        {
            setFetching(true)
        }
    }
    
    const removeView = () => {
        setViewTarget(false)
    }

    function copyBuffer() {
        navigator.clipboard.writeText(viewTarget._id)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Error in copying text: ', err);
        });
    }

    return (
        <div className={style.container}>
            {viewTarget?
                <div className={style.containercarusell}>
                    <button className={style.invise__close} onClick={()=>removeView()}>
                    </button>
                    <Carousel 
                        className={style.caruselcontainer} 
                        showThumbs={false} 
                        showIndicators={false}
                    >
                        {viewTarget.images.map((value) => {
                            return(
                                <div className={style.caruselBlock}>
                                    <img src={value.url}/>
                                </div>
                            )
                        })}
                    </Carousel>
                    <div style={{width: "100%", zIndex: "100", display: "flex", justifyContent: "center", paddingTop:"10px"}}>
                        <p style={{paddingRight:"10px", display: "flex", alignItems: "center"}}>{viewTarget._id}</p>
                        <button onClick={copyBuffer} className={style.buttonCopy}>
                            <img src={copy}/>
                        </button>
                    </div>
                </div>
                :
                <></>
            }
            <div className={style.block__header}>
                <a href={process.env.REACT_APP_TELEGRAM} style={{
                    height: "80%", 
                    display: "flex",
                    justifyContent: "flex-start"
                }}><img src={logo} alt='logo' className={style.logo}/></a>
                <div className={style.block__input} style={{height: "80%"}}>
                    <Input setState={(value) => setInputValue(value)}/>
                    <a onClick={scrollToTop} className={style.scrollTop}><img src={home}/></a>
                </div>
                <div className={style.block__question} style={{
                    height: "80%",
                    display: "flex",
                    justifyContent: "flex-end"
                }}>
                    <Link to={"/question"} className={style.block__question__link}>
                        <img src={question} alt='question'/>
                    </Link>
                </div>
            </div>
            {preview === 400?
                <div style={{paddingTop:"200px"}}>
                    <p>You searched: {inputValue}<br />
I don't have 3D model with this tag. Please try widening your search criteria!<br />
Please complete any of the following: original model name, its unique ID, its tag, or its category:</p>
                </div>
                :
                <div className={style.container__images}>
                    {preview.map((value)=>{
                        if(value.length !== 6 && value.length !== 1)
                        {
                            return(
                                <></>
                            )
                        }
                        if(value.length === 1)
                        {
                            return(
                                <div className={style.line__block__image}>
                                {
                                    value.map((image, index) => {
                                        return(
                                            <div 
                                                className={style.block__images} 
                                                onClick={()=>setViewTarget(image)}
                                                style={index === 5?
                                                    {
                                                        paddingRight: "0px",
                                                        justifyContent: "flex-end"
                                                    }
                                                    :
                                                    index === 0?
                                                    {
                                                        justifyContent: "flex-start"
                                                    }
                                                    :
                                                    {}
                                                }
                                            >
                                                <img src={image.images?.[0].url} alt='imageTovar'/>
                                            </div>  
                                        )
                                    })
                                }
                                </div>
                            )
                        }
                        return(
                            <div className={style.line__block__image}>
                                {
                                    value.map((image, index) => {
                                        return(
                                            <div 
                                                className={style.block__images} 
                                                onClick={()=>setViewTarget(image)}
                                                style={index === 5?
                                                    {
                                                        paddingRight: "0px",
                                                        justifyContent: "flex-end"
                                                    }
                                                    :
                                                    index === 0?
                                                    {
                                                        justifyContent: "flex-start"
                                                    }
                                                    :
                                                    {}
                                                }
                                            >
                                                <img src={image.images?.[0].url} alt='imageTovar'/>
                                            </div>  
                                        )
                                    })
                                }
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}
