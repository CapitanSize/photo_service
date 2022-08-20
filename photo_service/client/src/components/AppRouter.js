import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../routes/routes";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((r) =>
            <Route path={r.path} element={r.element} key={r.path}/>
            )}
        </Routes>
    );
};

export default AppRouter;