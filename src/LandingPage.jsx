import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import hero8 from './assets/imagenes/wallpaper.jpeg';

import { Button, UncontrolledTooltip, Badge } from 'reactstrap';

import IconsFontawesome from './example-components/Icons/IconsFontawesome';
import IconsPe7 from './example-components/Icons/IconsPe7';

import Buttons from './example-pages/Buttons';
import Dropdowns from './example-pages/Dropdowns';
import NavigationMenus from './example-pages/NavigationMenus';
import ProgressBars from './example-pages/ProgressBars';
import Pagination from './example-pages/Pagination';
import Scrollable from './example-pages/Scrollable';
import Badges from './example-pages/Badges';
import Icons from './example-pages/Icons';
import UtilitiesHelpers from './example-pages/UtilitiesHelpers';
import Cards3 from './example-pages/Cards3';
import ListGroups from './example-pages/ListGroups';
import Modals from './example-pages/Modals';
import Notifications from './example-pages/Notifications';
import Carousels from './example-pages/Carousels';
import Popovers from './example-pages/Popovers';
import Tooltips from './example-pages/Tooltips';
import Tabs from './example-pages/Tabs';
import RegularTables1 from './example-pages/RegularTables1';
import RegularTables4 from './example-pages/RegularTables4';
import FormsLayout from './example-pages/FormsLayout';
import FormsControls from './example-pages/FormsControls';
import Maps from './example-pages/Maps';

const LandingPage = () => {
    return (
        <Fragment>
            <div className="rm-padding-wrapper">
                <div className="hero-wrapper bg-composed-wrapper min-vh-100 bg-premium-dark pt-5">
                    <div className="flex-grow-1 w-100 d-flex align-items-center">
                        <div
                            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-6"
                            style={{ backgroundImage: 'url(' + hero8 + ')' }}
                        />
                        <div className="bg-composed-wrapper--bg bg-vicious-stance opacity-5" />
                        <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-lg-8 px-0 mx-auto d-flex align-items-center">
                                        <div className="text-center">
                                            <div className="px-4 px-sm-0 text-white mt-5">
                                                <h1 className="display-2 mb-5 font-weight-bold">
                                                    Agromix Buenos Aires
                                                </h1>
                                                <p className="font-size-xl text-white mb-3">
                                                    A pesar de todo seguimos apostando a nuestro
                                                    país. Más de 30 años junto al campo!!
                                                </p>
                                                <div className="pt-5">
                                                    <Button
                                                        onClick={() =>
                                                            document
                                                                .getElementById('quienes-somos')
                                                                .scrollIntoView({
                                                                    block: 'start',
                                                                    behavior: 'smooth'
                                                                })
                                                        }
                                                        color="link"
                                                        className="mt-5 btn-link-first">
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icon={['fas', 'chevron-down']}
                                                                size="4x"
                                                            />
                                                        </span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-5 px-5">
                    <div className="row">
                        <div className="col-xl-6 bg-premium-dark">
                            <div className="p-0 p-lg-5">
                                <IconsFontawesome />
                            </div>
                        </div>
                        <div className="col-xl-6 bg-midnight-bloom">
                            <div className="p-0 p-lg-5">
                                <IconsPe7 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5 bg-secondary my-5">
                    <div className="container">
                        <div className="px-0 col-lg-8 col-md-10 col-sm-12 mx-auto text-center">
                            <h1 className="display-3 mb-4 font-weight-bold">
                                Bamburgh UI Kit is available for multiple frameworks
                            </h1>
                            <p className="font-size-lg text-black-50">
                                Bamburgh is also available with integrations for the following
                                frontend/backend frameworks:
                            </p>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="mt-4 text-center d-flex flex-row flex-wrap justify-content-center">
                            <div>
                                <a
                                    className="card card-box card-box-hover-rise px-2 pt-2 pb-3 m-3"
                                    href="https://uifort.com/template/bamburgh-react-ui-kit-reactstrap-free"
                                    title="Click to visit the presentation page for Bamburgh React version">
                                    <b>Bamburgh for React</b>
                                    <img
                                        src="https://demo.uifort.com/github-static-assets/framework-logo/react-framework-logo.png"
                                        alt="Bamburgh React UI Kit with Reactstrap Free"
                                    />
                                    <span className="text-black-50 details-helper">
                                        Click for details
                                    </span>
                                </a>
                            </div>
                            <div>
                                <a
                                    className="card card-box card-box-hover-rise px-2 pt-2 pb-3 m-3"
                                    href="https://uifort.com/template/bamburgh-react-ui-kit-reactstrap-free"
                                    title="Click to visit the presentation page for Bamburgh Angular version">
                                    <b>Bamburgh for Angular</b>
                                    <img
                                        src="https://demo.uifort.com/github-static-assets/framework-logo/angular-framework-logo.png"
                                        alt="Bamburgh React UI Kit with Reactstrap Free"
                                    />
                                    <span className="text-black-50 details-helper">
                                        Click for details
                                    </span>
                                </a>
                            </div>
                            <div>
                                <div className="card card-box px-2 pt-2 pb-3 m-3 opacity-6">
                                    <b>Bamburgh for Vue.js</b>
                                    <img
                                        src="https://demo.uifort.com/github-static-assets/framework-logo/vue-framework-logo.png"
                                        alt="Bamburgh for Vue.js"
                                    />
                                    <i className="details-helper text-black-50">
                                        Not yet available
                                    </i>
                                </div>
                            </div>
                            <div>
                                <div className="card card-box px-2 pt-2 pb-3 m-3 opacity-6">
                                    <b>Bamburgh for HTML5/jQuery</b>
                                    <img
                                        src="https://demo.uifort.com/github-static-assets/framework-logo/html-framework-logo.png"
                                        alt="Bamburgh for HTML5/jQuery"
                                    />
                                    <i className="details-helper text-black-50">
                                        Not yet available
                                    </i>
                                </div>
                            </div>
                            <div>
                                <div className="card card-box px-2 pt-2 pb-3 m-3 opacity-6">
                                    <b>Bamburgh for Laravel</b>
                                    <img
                                        src="https://demo.uifort.com/github-static-assets/framework-logo/laravel-framework-logo.png"
                                        alt="Bamburgh for Laravel"
                                    />
                                    <i className="details-helper text-black-50">
                                        Not yet available
                                    </i>
                                </div>
                            </div>
                            <div>
                                <div className="card card-box px-2 pt-2 pb-3 m-3 opacity-6">
                                    <b>Bamburgh for Node.js</b>
                                    <img
                                        src="https://demo.uifort.com/github-static-assets/framework-logo/nodejs-framework-logo.png"
                                        alt="Bamburgh for Node.js"
                                    />
                                    <i className="details-helper text-black-50">
                                        Not yet available
                                    </i>
                                </div>
                            </div>
                            <div>
                                <div className="card card-box px-2 pt-2 pb-3 m-3 opacity-6">
                                    <b>Bamburgh for ASP.NET</b>
                                    <img
                                        src="https://demo.uifort.com/github-static-assets/framework-logo/asp-framework-logo.png"
                                        alt="Bamburgh for ASP.NET"
                                    />
                                    <i className="details-helper text-black-50">
                                        Not yet available
                                    </i>
                                </div>
                            </div>
                            <div>
                                <div className="card card-box px-2 pt-2 pb-3 m-3 opacity-6">
                                    <b>Bamburgh for Nuxt.js</b>
                                    <img
                                        src="https://demo.uifort.com/github-static-assets/framework-logo/nuxtjs-framework-logo.png"
                                        alt="Bamburgh for Nuxt.js"
                                    />
                                    <i className="details-helper text-black-50">
                                        Not yet available
                                    </i>
                                </div>
                            </div>
                            <div>
                                <div className="card card-box px-2 pt-2 pb-3 m-3 opacity-6">
                                    <b>Bamburgh for Next.js</b>
                                    <img
                                        src="https://demo.uifort.com/github-static-assets/framework-logo/nextjs-framework-logo.png"
                                        alt="Bamburgh for Next.js"
                                    />
                                    <i className="details-helper text-black-50">
                                        Not yet available
                                    </i>
                                </div>
                            </div>
                            <div>
                                <div className="card card-box px-2 pt-2 pb-3 m-3 opacity-6">
                                    <b>Bamburgh for React Native</b>
                                    <img
                                        src="https://demo.uifort.com/github-static-assets/framework-logo/react-native-framework-logo.png"
                                        alt="Bamburgh for React Native"
                                    />
                                    <i className="details-helper text-black-50">
                                        Not yet available
                                    </i>
                                </div>
                            </div>
                            <div>
                                <div className="card card-box px-2 pt-2 pb-3 m-3 opacity-6">
                                    <b>Bamburgh for Flutter</b>
                                    <img
                                        src="https://demo.uifort.com/github-static-assets/framework-logo/flutter-framework-logo.png"
                                        alt="Bamburgh for Flutter"
                                    />
                                    <i className="details-helper text-black-50">
                                        Not yet available
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="px-5">
                        {/* <div className="mb-5">
                            <Buttons />
                        </div> */}
                        <div className="mb-5">
                            <Dropdowns />
                        </div>
                        <div className="mb-5">
                            <NavigationMenus />
                        </div>
                        <div className="mb-5">
                            <ProgressBars />
                        </div>
                        {/* <div className="mb-5">
                            <Pagination />
                        </div> */}
                        <div className="mb-5">
                            <Scrollable />
                        </div>
                        <div className="mb-5">
                            <Badges />
                        </div>
                        <div className="mb-5">
                            <Icons />
                        </div>
                        <div className="mb-5">
                            <UtilitiesHelpers />
                        </div>
                        {/* <div className="mb-5">
                            <Cards3 />
                        </div> */}
                        {/* <div className="mb-5">
                            <ListGroups />
                        </div> */}
                        <div className="mb-5">
                            <Modals />
                        </div>
                        <div className="mb-5">
                            <Notifications />
                        </div>
                        <div className="mb-5">
                            <Carousels />
                        </div>
                        <div className="mb-5">
                            <Popovers />
                        </div>
                        <div className="mb-5">
                            <Tooltips />
                        </div>
                        <div className="mb-5">
                            <Tabs />
                        </div>
                        {/* <div className="mb-5">
                            <RegularTables1 />
                        </div>
                        <div className="mb-5">
                            <RegularTables4 />
                        </div> */}
                        {/* <div className="mb-5">
                            <FormsLayout />
                        </div> */}
                        {/* <div className="mb-5">
                            <FormsControls />
                        </div> */}
                        <div className="mb-5">
                            <Maps />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LandingPage;
