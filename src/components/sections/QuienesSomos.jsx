import React from 'react';
import { Col, Row } from 'reactstrap';

export default function QuienesSomos() {
    return (
        <div className="container-fluid pt-5 px-5" id="quienes-somos">
            <Row>
                <Col lg="6">
                    <div className="p-0 p-lg-5 mb-5">
                        <img
                            src={require('../../assets/imagenes/folleto.jpeg')}
                            alt="alt"
                            className="img-rised rounded img-fluid"
                        />
                    </div>
                </Col>
                <Col lg="6">
                    <div className="p-0 p-lg-5">
                        <h2 className="h2">Acerca de Nosotros</h2>
                        <p>
                            Somos un Grupo de Profesionales con amplio conocimiento en el mercado
                            agroveterinario Argentino y con una trayectoria de más de 30 años.
                        </p>
                        <p>
                            LABORATORIO AGROMIX ARGENTINA se dedica a la búsqueda constante del
                            desarrollo de formulaciones para las carencias de Vitaminas y Minerales,
                            para mejorar la producción ganadera lechera y de carne de bovinos,
                            ovinos, caprinos y porcinos.
                        </p>
                        <p>
                            Hemos desarrollado una importante línea de Antiparasitarios,
                            Antibioticos, Calcificantes, Engordadores y Vitamínicos que han
                            demostrado su gran capacidad terapéutica y nutricional con calidad y
                            distinción que nos caracteriza.
                        </p>
                        <p>
                            LABORATORIO AGROMIX ARGENTINA da soluciones mediante sus productos
                            generando rendimientos que permitan aumentar su competitividad al
                            productor agropecuario mejorando los animales con altas exigencias
                            nutricionales en sistemas extensivos de producción.
                        </p>
                        <h3 className="h3">Por Qué Comprarnos?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                            aliquam, tempora eligendi maiores fugiat, praesentium quibusdam totam
                            culpa expedita, quae inventore itaque pariatur est ad maxime consectetur
                            commodi laborum illum?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum
                            illo, tempora ab commodi error nostrum aperiam nihil molestias earum
                            neque rem in similique perferendis accusantium fugit soluta sint
                            reiciendis.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
