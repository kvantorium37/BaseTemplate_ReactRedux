import { useEffect, useState } from "react";
import { Journal } from "./pages/Journal/Journal";
import { Keys } from "./pages/Keys/Keys";

import { NotFound } from "./pages/NotFound/NotFound";
import { Users } from "./pages/Users/Users";

const getNavigationItem = (label = "", path = "", component = NotFound, subItems = [], href = path) =>
    ({ label, path, href, component, subItems })


const staticNavigationData = [
    getNavigationItem("Состояние ключей", "/", <Keys />),
    getNavigationItem("Журнал", "/journal", <Journal />),
    getNavigationItem("Добавление карты", "/users", <Users />),
]

export const useNavigationData = () => {
    const [navigationData, setNavData] = useState([])

    useEffect(() => {
        createNavigationData()
    }, [])

    const createNavigationData = () => {
        setNavData(staticNavigationData)
    }

    return navigationData
}