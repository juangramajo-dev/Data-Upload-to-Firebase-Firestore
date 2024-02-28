const admin = require("firebase-admin");
const serviceAccount = require("./key_service_account.json"); // Importa el archivo JSON que contiene los datos de la cuenta de Firebase.

const data = require("./json/data.json"); // Importa el archivo JSON que contiene los datos a subir a Firestore.
const collectionKey = "alumnos"; // Define el nombre de la colección en Firestore donde se almacenarán los documentos.

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount), // Inicializa la aplicación de Firebase con las credenciales proporcionadas en el archivo JSON.
});
const firestore = admin.firestore(); // Obtiene una instancia de Firestore.
const settings = { timestampsInSnapshots: true }; // Define la configuración de Firestore.
firestore.settings(settings); // Aplica la configuración definida a Firestore.

if (Array.isArray(data)) {
  // Comprueba si los datos son un arreglo.
  data.forEach((doc) => {
    // Itera sobre cada objeto del arreglo de datos.
    const docKey = doc.id; // Obtiene el ID de cada objeto.
    firestore
      .collection(collectionKey) // Accede a la colección en Firestore.
      .doc(docKey) // Crea una referencia al documento con el ID obtenido.
      .set(doc) // Guarda el objeto en Firestore utilizando su ID como clave.
      .then((res) => {
        // Maneja la promesa de éxito de la operación de escritura.
        console.log("Documento " + docKey + " escrito exitosamente!"); // Muestra un mensaje de éxito en la consola.
      })
      .catch((error) => {
        // Maneja cualquier error que ocurra durante la escritura.
        console.error("Error al escribir el documento: ", error); // Muestra un mensaje de error en la consola.
      });
  });
}
