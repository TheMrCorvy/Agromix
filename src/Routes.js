import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './layout-blueprints';

const LandingPage = lazy(() => import('./LandingPage'));

const Routes = () => {
    return (
        <AnimatePresence>
            <Suspense
                fallback={
                    <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
                        <div className="w-50 mx-auto">Cargando...</div>
                    </div>
                }>
                <Layout>
                    <Switch>
                        <Redirect from="/agromix" to="/" />
                        <Route exact path="/" component={LandingPage}></Route>
                    </Switch>
                </Layout>
            </Suspense>
        </AnimatePresence>
    );
};

export default Routes;
