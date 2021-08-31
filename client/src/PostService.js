import axios from 'axios'

const url = 'api/';

class PostService{

    
    static insertCourse(text){
        //console.log(text.email)
        return axios.post(url+'/insert-course',{
            text
        })
    }

    static getCriteriaList(){
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url+'get-criteria')
                const data = res.data
                resolve(data);
            }catch(err){
                reject(err);
            }
        })
    }


    //get Student
    static getCourse(){
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url+'get-course')
                const data = res.data
                resolve(data);
            }catch(err){
                reject(err);
            }
        })
    }
    //get Student
    static getUniversity(){
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url+'get-university')
                const data = res.data
                resolve(data);
            }catch(err){
                reject(err);
            }
        })
    }
    //get Student
    static getDetailCourse(course){
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url+'get-detail/'+course)
                const data = res.data
                resolve(data);
            }catch(err){
                reject(err);
            }
        })
    }

}

export default PostService;