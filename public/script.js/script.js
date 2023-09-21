document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.example.com/products")
    .then((response) => response.json())
    .then((data) => {

      const primerProducto = data[0];
      const imagenProducto1 = document.querySelector('.productoImage1');
      imagenProducto1.src = primerProducto.image;
      imagenProducto1.alt = `Imagen de ${primerProducto.name}`;

      const segundoProducto = data[1];
      const imagenProducto2 = document.querySelector('.productoImage2');
      imagenProducto2.src = segundoProducto.image;
      imagenProducto2.alt = `Imagen de ${segundoProducto.name}`;

      const tercerProducto = data[2];
      const imagenProducto3 = document.querySelector('.productoImage3');
      imagenProducto3.src = tercerProducto.image;
      imagenProducto3.alt = `Imagen de ${tercerProducto.name}`;

      const cuartoProducto = data[3];
      const imagenProducto4 = document.querySelector('.productoImage4');
      imagenProducto4.src = cuartoProducto.image;
      imagenProducto4.alt = `Imagen de ${cuartoProducto.name}`;

      const quintoProducto = data[4];
      const imagenProducto5 = document.querySelector('.productoImage5');
      imagenProducto5.src = quintoProducto.image;
      imagenProducto5.alt = `Imagen de ${quintoProducto.name}`;

      const sextoProducto = data[5];
      const imagenProducto6 = document.querySelector('.productoImage6');
      imagenProducto6.src = sextoProducto.image;
      imagenProducto6.alt = `Imagen de ${sextoProducto.name}`;

      console.log(data);
    })
    .catch((error) => {
      console.error("Error al cargar datos desde la API:", error);
    });
});
