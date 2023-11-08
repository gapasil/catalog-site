export const animImg = (cInter, arrImgPrev, arrImage, setArrImgPrev, setArrImg) => {
    let newArr = [[],[],[],[]]
    let index = 0

    for(let i = 0; i < arrImgPrev.length; i++)
    {
        for(let j = 0; j < arrImgPrev[i].length; j++)
        {
            if(arrImage.length - 13 + index >= 0)
            {
                index++
                newArr[i][j] = arrImage[arrImage.length - 14 + index]
                setArrImg(arrImage)
            } else {
                index++
                newArr[i][j] = false
            }
        }
    }
    
    setTimeout(() => {
        clearInterval(cInter)
    }, 7500);

    arrImage.pop()
    setArrImgPrev(newArr)
}