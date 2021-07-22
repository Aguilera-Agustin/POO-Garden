export const getSoyHs = (height: number):number =>{
    if(height<0.5){
        return 6
    }
    if(height < 1 && height >=0.5){
        return 7;
    }
    return 9;
}

export const getSoyFatherCondition = (data:{year: number, height: number}):boolean =>{
    const {height, year} = data
    return (year>2007 && height>1);
}