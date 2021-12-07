import Search from "./search"
import TopVar from "./topVar"
import { Outlet } from "react-router-dom";


export default function MainLayouts() {

    return (
        <>
            <TopVar />
            <Search />
            <Outlet />
        </>
    )
}