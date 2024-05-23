import React from "react";
import CardNorma from "./CardNorma";

function Normas() {
  return (
    <>
      <div className="grid max-sm:grid max-sm:justify-center space-x-4 mx-20 max-sm:mx-10 max-sm:grid-cols-1  grid-cols-4 w-auto">
        <CardNorma
          norma="Norma ACI 318-14"
          enlace="https://drive.google.com/uc?export=download&id=1T-wYVkZtQ2xprFC1eRqxprocpMl9f9My"
          img="https://i.imgur.com/5Muxndx.jpeg"
          description="Este Comentario introductorio discute algunas de las consideraciones del Comité 318 en la redacción de los requisitos contenidos en “Requisitos de Reglamento para concreto estructural (ACI 318-14)” el cual en adelante se llamará el Reglamento o el Reglamento del 2014."
        />
        <CardNorma
          norma="Norma ASCE SEI 41-13"
          enlace="https://drive.google.com/uc?export=download&id=1o1l-SJRfaGSw-qbvA7B1p_sih1uxeJyN"
          img="https://i.imgur.com/5wc3vqq.jpeg"
          description="ATC 14 (1987) y FEMA 273 (1997) eran ambos documentosseñal. Cada una representada principales puntos de inflexiónen la forma en la profesión se dirigió a la evaluación de losriesgos sísmicos que plantean los edificios existentes."
        />
        <CardNorma
          norma="Norma ASCE SEI 41-17"
          enlace="https://drive.google.com/uc?export=download&id=1kaIHcog258Y6mUDK9ztihY66lCj00SeN"
          img="https://i.imgur.com/D9Bhf8O.jpeg"
          description="Seismic Evaluation and Retrofit of Existing Buildings, Standard ASCE/SEI 41-17, describes deficiency-based and systematic procedures that use performance-based principles to evaluate and retrofit existing buildings to withstand the effects of earthquakes."
        />
        <CardNorma
          norma="Norma e-0.10"
          enlace="https://drive.google.com/uc?export=download&id=1CthL257cJ7TvYlXuKH0GlZIIXnIZ5W74"
          img="data:image/jpeg;base64,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"
          description="Este capítulo establece el agrupamiento de las maderas para uso estructural, en tres clases denominadas A, B y C y fija los requisitos y procedimientos que se deberá seguir para la incorporación de especies a los grupos establecidos."
        />
        <CardNorma
          norma="Norma e-0.20"
          enlace="https://drive.google.com/uc?export=download&id=1kENVHQSwwKdAUaTqk9rBjQ79vT_sV3i7"
          img="https://image.slidesharecdn.com/norma-e-020-130323160730-phpapp02/85/norma-e020-1-320.jpg?cb=1665729996"
          description="Las edificaciones y todas sus partes deberán ser capaces de resistir las cargas que se les imponga como consecuencia de su uso previsto. Estas actuarán en las combinaciones prescritas y no deben causar esfuerzos ni deformaciones que excedan los señalado."
        />
        <CardNorma 
        norma="Norma e-0.30 (2018)"
        enlace="https://drive.google.com/uc?export=download&id=15piUUfQaUY04wTtO2u_P2d4-leCd-moz"
        img="data:image/png;base64,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"
        description="Esta Norma establece las condiciones mínimas para el Diseño Sismorresistente de las edifi caciones."
        />
        <CardNorma 
        norma="Norma e-0.31"
        enlace="https://drive.google.com/uc?export=download&id=19Tg6QWjFD8r5NM9dwSpSoZL_dt6AO23d"
        img="data:image/png;base64,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"
        description="La presente Norma Técnica establece los requisitos mínimos para el diseño y construcción de edificaciones con cualquier tipo de sistema de aislamiento sísmico." 
        />
        <CardNorma 
        norma="Norma e-0.40" 
        enlace="https://drive.google.com/uc?export=download&id=1OWVnXMSS5Pk2F64goQw6treQWMWtwtv0"
        img="https://image.slidesharecdn.com/normae-211204005454/85/norma-e040-vidrio-1-320.jpg?cb=1668245245"
        description="Establecer las Normas de aplicación del Vidrio utilizado en la construcción, a fin de proporcionar el mayor grado de seguridad para el usuario, o terceras personas que indirectamente puedan ser afectadas por fallas del material o factores externos."
        />
        <CardNorma 
        norma="Norma e-0.50" 
        enlace="https://drive.google.com/uc?export=download&id=1TUpmVTxcdtPe3AJI2FWjQZkmRDQVZGly"
        img="data:image/jpeg;base64,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"
        description="El objeto de esta Norma es establecer los requisitos mínimos para la ejecución de Estudios de Mecánica de Suelos (EMS), con fi nes de cimentación de edifi caciones y otras obras indicadas en esta Norma."
        />
        <CardNorma 
        norma="Norma e-0.60"
        enlace="https://drive.google.com/uc?export=download&id=1WLDOC4wA1d5hAoQTuTDgQ6Tv3hA1pRV6"
        img="https://image.slidesharecdn.com/normae-221129005030-ebbb53c8/85/norma-e060-concreto-armadopdf-1-320.jpg?cb=1669683382"
        description="Esta Norma fija los requisitos y exigencias mínimas para el análisis, el diseño, los materiales, la construcción, el control de calidad y la supervisión de estructuras de concreto armado, preesforzado y simple." 
        />
        <CardNorma 
        norma="Norma e-0.70"
        enlace="https://drive.google.com/uc?export=download&id=17zyewq-SN5R2I18Wn0WHdrkGFbgH3hCm"
        img="https://image.slidesharecdn.com/normae-221129005129-a9a6e0a7/85/norma-e070-albailerapdf-1-320.jpg?cb=1669683405"
        description="Esta Norma establece los requisitos y las exigencias mínimas para el análisis, el diseño, los materiales, la construcción, el control de calidad y la inspección de las edificaciones de albañilería estructuradas principalmente por muros confinados y por muros armados." 
        />
        <CardNorma 
        norma="Norma e-0.80"
        enlace="https://drive.google.com/uc?export=download&id=1-mYzHqH2JVZb_MGp0Fps6ZXm2BWqwPbe"
        img="https://image.slidesharecdn.com/normae-221129005147-df7f5641/85/norma-e080-diseo-y-construccin-con-tierra-reforzadapdf-1-320.jpg?cb=1669683418"
        description="La norma es de alcance nacional y su aplicación es obligatoria para la elaboración de materiales de construcción para edifi caciones de tierra reforzada (adobe reforzado y tapial reforzado)." 
        />
        <CardNorma 
        norma="Norma e-0.90"
        enlace="https://drive.google.com/uc?export=download&id=1C5Si0-a0XDaknZsdIZQhI-2aUjAPht36"
        img="https://image.slidesharecdn.com/normae-211204005314/85/norma-e090-estructuras-metlicas-1-320.jpg?cb=1667429798"
        description="Esta Norma de diseño, fabricación y montaje de estructuras metálicas para edificaciones acepta los criterios del método de Factores de Carga y Resistencia (LRFD) y el método por Esfuerzos Permisibles (ASD)." 
        />
        <CardNorma 
        norma="Norma e-0.100"
        enlace="https://drive.google.com/uc?export=download&id=1oKpJ2PtTpn-Jq2f4Cgw7FdQOb5hKRwLd"
        img="https://image.slidesharecdn.com/normae-211204005326/85/norma-e100-bamb-1-320.jpg?cb=1668358132"
        description="Establecer los lineamientos técnicos que se deben seguir para el diseño y construcción de edificaciones sismorresistentes con bambú: Guadua angustifolia y otras especies de características físico mecánicas similares." 
        />
      </div>
    </>
  );
}

export default Normas;