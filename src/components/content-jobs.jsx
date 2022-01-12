import React, { useEffect, useState } from "react";
import jobLogo from "../assets/icons/logo192.svg"
import locationIcon from "../assets/icons/locationICon.svg"
import alertIcon from "../assets/icons/alertIcon.svg"
import mailIcon from "../assets/icons/email.png"
import calendarIcon from "../assets/icons/calendar.png"
import { useJobsContext } from "../context/jobs_context"
import { Pagination } from "react-bootstrap";

const ContentJobs = (jobs) => {

    // const [ontt, setontt] = useState("")
    // const [jo, setjo] = useState([])

    const { filteredjobList, results, defaultPage } = useJobsContext();



    const [page, setPage] = useState(defaultPage ? defaultPage : (1))
    const [arrPages, setArrpages] = useState([])
    const artperpage = 5
    const range_start = page * artperpage - artperpage
    const range_finish = page * artperpage
    const [range_start_pag, set_range_start_pag] = useState(0)
    const cases_to_show = filteredjobList.slice(range_start, range_finish)


    useEffect(() => {

        const dataSorted = () => {

            let oneARr = []
            let pagesCount = filteredjobList.length / artperpage;

            for (let i = 1; i <= pagesCount + 1; i++) {

                oneARr.push(<Pagination.Item onClick={() => { setPage(i) }} key={i} active={page === i ? "active" : ""}>{i}</Pagination.Item>)

            }

            setArrpages(oneARr)
        }

        dataSorted()

    }, [page, artperpage, filteredjobList,])

    return (

        <div className="contentJobs">


            <div className="display-flex justify-content-between mb-3 flex-wrap">

                <div className="display-flex">
                    <h6 className="ml-4 mt-2 mr-2 mb-2 results-orderby">{results > 0 ? (results + " empleos encontrados.") : (<span>0 resultados.</span>)}</h6>

                    <div className="ml-2 display-flex align-items-center">
                        <span className="span-orderby">ordenar por: </span>
                        <select className="ml-1 select-content-jobs" aria-label="Default select example">
                            <option default>Recientes</option>
                            <option value="2">Antiguos</option>
                        </select>
                    </div>
                </div>

                <div className="jobs-alert display-flex align-items-center">
                    <img className="p-2" src={alertIcon} alt="" />
                    <span className="pr-2">Activar alerta</span>
                </div>

            </div>

            {cases_to_show.length < 1 &&
                <img src={jobLogo} className="rotate linear infinite fadingEffect" alt=""

                    style={
                        {
                            height: 100,
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: 100,
                        }
                    }
                />
            }

            {cases_to_show.length > 0 && cases_to_show.map((job) => (
                <div className="job-container " key={job.title}>
                    <div className="display-flex">
                        <img className="job-logo " src={jobLogo} alt="" />
                        <div className="info-container">
                            <h6 className="job-title pr-3">{job.title}</h6>
                            <h6 className="job-category">{job.category}</h6>
                        </div>
                    </div>

                    <div className="display-flex flex-wrap font-size-14px ">
                        <div className="location-job mt-3 pl-4">
                            <img src={locationIcon} alt="Ubicación" />
                            <p className="">{job.loc}</p>

                        </div>

                        <div className="location-job mt-3 pl-4">
                            <img className="job-desc-icons" src={mailIcon} alt="CV de la vacante" />
                            <p className=""><a className="job-content-mail-href" href={`mailto:${job.email}`}>{job.email}</a></p>

                        </div>

                        <div className="location-job mt-3 pl-4">
                            <img className="job-desc-icons" src={calendarIcon} alt="Fecha de empleo" />
                            <p className="">{new Date(job.date).toLocaleDateString()}</p>

                        </div>
                    </div>

                    <p className="pt-3 pl-4 pr-4 pb-4 job-desc">
                        {job.desc}
                    </p>
                </div>

            ))}

            {cases_to_show.length > 0 ? (
                <Pagination className="pagination-jobs">
                    <Pagination.First onClick={() => { set_range_start_pag(range_start_pag - 7) }} />
                    {arrPages.slice(range_start_pag, range_start_pag + 7)}
                    <Pagination.Last onClick={() => { set_range_start_pag(range_start_pag + 7) }} />
                </Pagination>
            )
            :
            (<></>)
            }

        </div >
    )
}


export default ContentJobs;
