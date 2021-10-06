import "bootstrap/dist/css/bootstrap.css";

import './global.css';
import "./css/TopVar.css"
import "./css/search.css"
import "./css/aside.css"
import "./css/contentJobs.css"
import { JobsContextComponent } from "./context/jobs_context";

import TopVar from "./components/topVar";
import Content from './components/content';

function App() {

    return (
        <div className="app">
            <JobsContextComponent>
                <TopVar />
                <Content />
            </JobsContextComponent>
        </div>
    );
}

export default App;