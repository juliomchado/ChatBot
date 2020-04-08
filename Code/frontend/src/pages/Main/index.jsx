import React, { useEffect, useState } from "react";

import api from "../../service/api";

export default (Main) => {
  const [email, setEmail] = useState(null);
  const [wpp, setWpp] = useState(null);

  useEffect(() => {
    try {
      api
        .get("/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data.email);
          setEmail(response.data.email);
          setWpp(response.data.whatsapp);
        });
    } catch (error) {
      alert("algo erro");
    }

    console.log("CARREGOU");
  }, []);

  return (
    <section>
      <h1>Bem Vindo, {email}</h1>
      <h2>Seu Whatsapp: {wpp}</h2>
    </section>
  );
};
