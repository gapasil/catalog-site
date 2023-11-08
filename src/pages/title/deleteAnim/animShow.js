export const animShow = (setArrChar,setHeadAnim) =>{
    setArrChar((arr) => {
        for(let i = 0; i < arr.length; i++)
        {
            for(let j = 0; j < arr[i].length; j++)
            {
                if(!arr[i][j])
                {
                    if(arr[2][4] === true) setHeadAnim(true)
                    arr[i][j] = true
                    return arr
                }
            }
        }
        // for(let i = 0; i < arr.length; i++)
        // {
        //     for(let j = 0; j < arr[i].length; j++)
        //     {
        //         if(i === 2 && j === 0 && arr[i][j] === true)
        //         {
        //             text.shift()
        //             arr[i][j] = text.shift()
        //             return arr 
        //         }
        //         if(i === 1 && j === 0 && arr[i][j] === true)
        //         {
        //             text.shift()
        //             arr[i][j] = text.shift()
        //             return arr 
        //         }
        //         if(arr[i][j] === true)
        //         {
        //        
        return arr
    })
}