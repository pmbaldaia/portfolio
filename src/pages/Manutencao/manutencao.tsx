import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { InstagramLogo, FacebookLogo } from "@phosphor-icons/react";

const PaginaManutencao = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="maintenance-page d-flex justify-content-center align-items-center vh-100 bg-black text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            {loading ? (
              <div className="loading-spinner">
                <Spinner animation="border" variant="primary" />
                <p>Carregando...</p>
              </div>
            ) : (
              <div className="maintenance-content">
                <Spinner animation="grow" variant="primary" />
                <h1>Estamos a preparar algo incrível!</h1>
                <p>
                  Estamos a trabalhar arduamente para trazer novidades
                  emocionantes para si.
                </p>
                <p>
                  Enquanto isso, você pode nos encontrar nas redes sociais:{" "}
                  <span>
                    <a
                      href="https://instagram.com/pmbaldaia19"
                      className="text-white"
                    >
                      <InstagramLogo size={22} /> Instagram
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://pt-pt.facebook.com/pedro.baldaia.02"
                      className="text-white"
                    >
                      <FacebookLogo size={22} /> Facebook
                    </a>
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaManutencao;
