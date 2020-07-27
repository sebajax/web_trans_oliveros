// Node Modules imports
import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';

// COMPONENT imports
import HeaderComp from '../components/HeaderComp';
import FooterComp from '../components/FooterComp';
import TitleComp from '../components/TitleComp';
import NuestrosClientesComp from '../components/NuestrosClientesComp';
import NuestroServicioComp from '../components/NuestroServicioComp'
import SectionComp from '../components/SectionComp';
import ContactComp from '../components/ContactComp';

// Images imports
import LogoImg from '../resources/images/logo.png';
import CarreteraImg from '../resources/images/carretera.jpg';
import MisionImg from '../resources/images/mision.jpg';

const Home = () => {

    const getQuinesSomos = () => {
        return (
            <Fragment>
                <p>
                    Transportes Oliveros cuenta con más de 22 años de experiencia en el rubro de transporte de carga liviana, brindando apoyo principalmente a líneas aéreas y servicios asociados al Aeropuerto de Santiago.
                </p>
                <p>
                    En nuestra empresa siempre ha primado el compromiso con la calidad en el servicio prestado, lo que nos permite entregar a nuestros clientes, la excelencia y un servicio que se ajuste a cada una de sus necesidades.
                </p>
                <p>
                    Contamos con un equipo de trabajo con amplia experiencia en el rubro de transporte terrestre (dentro y fuera de la región metropolitana) y una flota de vehículos de diferentes capacidades lo que nos permite bridar un servicio personalizado y a su vez eficaz.
                </p>
            </Fragment>
        );
    }

    const getMision = () => {
        return (
            <Fragment>
                <p>
                    Nuestra misión es proporcionar a nuestros clientes un servicio de transporte personalizado acorde a sus requerimientos de forma oportuna, de excelencia y calidad.
                </p>
            </Fragment>
        );
    }

    return (
        <Fragment>

            <section id="top">
                <HeaderComp />
            </section>

            <Container className="text-center">
                <img src={LogoImg} alt="Transportes Oliveros" width="70%" />
            </Container>
            
            <section id="nuestro_servicio">
                <TitleComp title="Nuestro Servicio" />
                <NuestroServicioComp />
            </section>
            
            <section id="quienes_somos">
                <TitleComp title="Quienes somos" />
                <SectionComp 
                    title="quienes_somos"
                    img={CarreteraImg}
                    body={getQuinesSomos()}
                />
            </section>

            <section id="mision">
                <TitleComp title="Misión" />
                <SectionComp 
                    title="mision"
                    img={MisionImg}
                    body={getMision()}
                />
            </section>

            <section className="py-5" id="nuestros_clientes">
                <TitleComp title="Nuestros clientes" />
                <NuestrosClientesComp />
            </section>
           
            <section id="contactenos">
                <TitleComp title="Contáctenos" />
                <ContactComp />
            </section>

            <FooterComp />

        </Fragment>
    );
}

export default Home;