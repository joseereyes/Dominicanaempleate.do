import { createContext, useContext, useEffect, useState } from "react";
import db from "../firebase/firebase"

const JobsContext = createContext();

const useJobsContext = () => {
    return useContext(JobsContext)
}

const JobsContextComponent = ({ children }) => {

    const [jobsList, setJobsList] = useState([])
    const [filteredjobList, setFilteredJobList] = useState([])
    const [results, setResults] = useState(0)
    const [filterObject, setFilterObjec] = useState({ type: null, value: null, startPage: null })
    const [defaultPage, setDefaultPage] = useState(null)
    const [todaysJob, setTodaysJob] = useState([])
    const [jobId, setJobId] = useState("")
    const [jobObject, setJobObject] = useState(null)

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    useEffect(() => {

        const fetchData = async () => {

            db.child('Jobs').orderByKey().on('value', data => {
                let createJobsArr = []

                data.forEach((item) => {

                    let datata = item.val()
                    datata.key = item.key
                    createJobsArr.push(datata)
                })

                setJobsList(createJobsArr)

                const todaysjob = createJobsArr.filter(item => (new Date(item.dateReg).toLocaleDateString().includes(new Date().toLocaleDateString())))
                setTodaysJob(todaysjob.length)
            })

            filterObject.value && setDefaultPage(1)
        };
        fetchData();
    }, [filterObject.value])

    useEffect(() => {

        if (filterObject.value) {

            const data_By_No = jobsList.filter(item => (removeAccents(item.title.toLowerCase()).includes(removeAccents(filterObject.value.toLowerCase()))))
            setResults(data_By_No.length)
            setFilteredJobList(data_By_No)
        } else {
            setFilteredJobList(jobsList)
            setResults(jobsList.length)
        }

    }, [filterObject, jobsList])

    useEffect(() => {

        const getById = () => {

            if (jobId) {
                db.child("Jobs").orderByKey().equalTo(jobId).on("value", data => {
                    setJobObject(Object.values(data.val())[0])
                })
            }

        }
        getById()

    }, [jobId])

    return (
        <JobsContext.Provider value={

            {
                setFilterObjec,
                results,
                filteredjobList,
                defaultPage,
                todaysJob,
                setJobId,
                jobObject
            }
        } >
            {children}

        </JobsContext.Provider>
    )
}

export { JobsContextComponent, useJobsContext };
