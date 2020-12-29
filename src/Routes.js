import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './layout-blueprints';
import Skeleton from 'react-loading-skeleton';
import { Row } from 'reactstrap';

const LandingPage = lazy(() => import('./LandingPage'));

const Routes = () => {
    return (
        <AnimatePresence>
            <Suspense
                fallback={
                    <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
                        <Row>
                            <div className="mx-auto col-lg-12">Cargando...</div>
                            <div className="mx-auto col-lg-12">
                                <Skeleton className="mx-auto" count={1} />
                            </div>
                        </Row>
                    </div>
                }>
                <Layout>
                    <Switch>
                        <Redirect from="/agromix" to="/" />
                        <Route path="/" component={LandingPage} />
                    </Switch>
                </Layout>
            </Suspense>
        </AnimatePresence>
    );
};

export default Routes;
