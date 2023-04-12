// import { getjobCart } from "../utilities/fakedb";

// export const getJobDataFromLocalStorage = async () =>{
//     const jobsData = await fetch('data.json')
//     const jobs = await jobsData.json()
//     const storedCart = getjobCart()
//     let cartArr = []
//     for(const id in storedCart){
//         const foundJob = jobs.find(job => job.id === id)
//         if(foundJob){
//             cartArr.push(foundJob)
//         }
//     }
//     return {cartArr,jobs}

// }