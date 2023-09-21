import React from 'react';
import ItemDetail from './ItemDetail';

const products = [
  {
    id: 1,
    name: 'Limpiador Facial Suave',
    description: 'Un limpiador facial suave está diseñado para eliminar la suciedad, el maquillaje y las impurezas de la piel sin resecarla. Ideal para todo tipo de piel, deja la piel fresca y limpia.',
    price: 20.000,
    image: 'images/limpiador.jpg', 
  },
  {
    id: 2,
    name: 'Tónico Facial',
    description: 'El tónico facial ayuda a equilibrar el pH de la piel después de la limpieza. También puede hidratar, calmar y preparar la piel para los siguientes pasos de la rutina de cuidado de la piel.',
    price: 25.000,
    image: 'images/tonico.jpg', 
  },
  {
    id: 3,
    name: 'Suero de Vitamina C',
    description: 'Un suero de vitamina C es conocido por sus propiedades antioxidantes. Ayuda a reducir la apariencia de manchas oscuras, promueve la luminosidad y protege la piel contra los radicales libres.',
    price: 55.000,
    image: 'images/suero.jpg', 
  },
  {
    id: 4,
    name: 'Ácido Hialurónico',
    description: 'El ácido hialurónico es un humectante que retiene la humedad en la piel, ayudando a mantenerla hidratada y suave. Puede reducir la apariencia de líneas finas y arrugas.',
    price: 60.000,
    image: 'images/acido.jpg', 
  },
  {
    id: 5,
    name: 'Crema Hidratante',
    description: 'Una crema hidratante es esencial para mantener la piel suave y flexible. Hay opciones para piel seca, grasa y mixta, cada una formulada para abordar las necesidades específicas de la piel.',
    price: 80.000,
    image: 'images/crema.jpg', 
  },
  {
    id: 6,
    name: 'Mascarilla Exfoliante',
    description: 'Una mascarilla exfoliante ayuda a eliminar las células muertas de la piel y a mejorar la textura de la piel. Puede contener ingredientes como ácidos AHA o BHA para una exfoliación suave.',
    price: 35.000,
    image: 'images/mascarilla.jpg', 
  },
];

export default products;
