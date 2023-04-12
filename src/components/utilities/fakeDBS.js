export const jobsApply= id =>{
    let storeData= getDataFromLS();
    const inData=storeData.find((storeDataID)=> storeDataID===id);
    if(!inData){
        storeData.push(id);
    }
    localStorage.setItem('apply-job', JSON.stringify(storeData))

}

export const getDataFromLS =()=>{
    let storeData= JSON.parse(localStorage.getItem('apply-job'))
    if(storeData){
        storeData=storeData
    }
    else{
        storeData=[];
    }
    return storeData;
}