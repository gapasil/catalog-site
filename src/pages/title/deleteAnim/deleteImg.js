export const deleteImg = (cInter, arrImgPrev, setArrImgPrev) => {
    let newArr = [...arrImgPrev]
    for(let i = 0; i < arrImgPrev.length; i++)
    {
        for(let j = 0; j < arrImgPrev[i].length; j++)
        {
            if(arrImgPrev[i][j])
            {
                newArr[i][j] = false
                setArrImgPrev(newArr)
                return null 
            }
        }
    }
    setTimeout(() => {
        clearInterval(cInter)
    }, 2000);
    return null
} 
