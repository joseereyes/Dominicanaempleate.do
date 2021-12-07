
import { useNavigate, useParams } from "react-router"
import { useJobsContext } from "../../context/jobs_context";
import jobLogo from "../../assets/icons/logo192.svg"
import mailIcon from "../../assets/icons/email.png"
import calendarIcon from "../../assets/icons/calendar.png"
import locationIcon from "../../assets/icons/locationICon.svg"
import { Helmet } from "react-helmet";
const reactStringReplace = require('react-string-replace')




export default function JobContent() {

    const { jobId } = useParams();
    const { setJobId, jobObject } = useJobsContext()
    setJobId(jobId)

    const navigate = useNavigate()

    return (


        jobObject && (

            <>
                <Helmet>
                    <title>Empleo de {jobObject.category}</title>
                    <meta name="description" content={`${jobObject.category + " " + jobObject.desc}`} />
                </Helmet>

                <div className="container mt-3 d-flex justify-content-center content-job-view">
                    <div className="one-job-container">
                        <div className="display-flex">
                            <img className="job-logo " src={jobLogo} alt="" />
                            <div className="info-container">

                                <h1 className="job-title pr-3"
                                >
                                    {jobObject.title}

                                </h1>

                                <h1 className="job-category">{jobObject.category}</h1>
                            </div>
                        </div>

                        <div className="display-flex flex-wrap font-size-14px ">
                            <div className="location-job mt-3 pl-4">
                                <img src={locationIcon} alt="Ubicación" />
                                <p className="">{jobObject.loc}</p>

                            </div>

                            <div className="location-job mt-3 pl-4">
                                <img className="job-desc-icons" src={mailIcon} alt="CV de la vacante" />
                                <p className=""><a className="job-content-mail-href" href={`mailto:${jobObject.email}`}>{jobObject.email}</a></p>

                            </div>

                            <div className="location-job mt-3 pl-4">
                                <img className="job-desc-icons" src={calendarIcon} alt="Fecha de empleo" />
                                <p className="">{new Date(jobObject.date).toLocaleDateString()}</p>

                            </div>
                        </div>

                        <p className="pt-3 pl-4 pr-4 pb-4 job-desc">

                            {

                                reactStringReplace(jobObject.content, '<br />', (match, i) => (
                                    <span>{<br />}*</span>
                                ))
                            }
                            <span
                                className="view-more-job-desc"
                                onClick={() => navigate("/", { replace: true })}
                            >
                                <br />
                                <br />
                                Volver
                            </span>
                        </p>
                    </div>
                </div>

            </>


        )


    )
}