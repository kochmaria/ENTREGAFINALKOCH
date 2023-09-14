

const products = [
    {id: "1", name: "Apple AirPods Pro", price: 500, category: "Inalambricos", Image: "/imagenes/airpod.jpeg", description: "Dos micrófonos con tecnología beamforming. Dos micrófonos con tecnología beamforming. Acelerómetro con detección de movimiento. Acelerómetro con detección de voz.", stock: "20 unidades disponibles"},
    {id: "2", name: "HeadPhones Bluetooth Marshal", price: 700, category: "Inalambricos", Image: "../imagenes/marshall.jpeg", description: " Amplifican el audio mientras cancelan ruido exterior. Lleve el gran escenario en su bolsillo con 20 horas totales de reproducción inalámbrica y el resistente estuche de carga portátil." , stock: "30 unidades disponibles"},
    {id: "3", name: "Headphones Bluetooth JBL", price: 400, category: "Inalambricos", Image: "../imagenes/jbl.png" , description: "Transmite sonido de gran calidad desde tu móvil de forma inalámbrica, sin ataduras de cables. Para una diversión más duradera, disfruta de 40 horas de audio inalámbrico y recarga en tan solo 2 horas con el cable USB-C. Con una carga rápida de 5 minutos podrás volver a disfrutar de 2 horas más de música.", stock: "10 unidades disponibles"},
    {id: "4", name: "Auriculares Marshal Minor III Black ", price: 600, category: "Inalambricos", Image: "../imagenes/227528-800-800.webp", description: "Tiempo de reproducción: 5 horas en auriculares y 25 horas totales en estuche | Carga inalámbrica | Recarga ecológica | Carga rápida: 15 minutos de carga brindan 1 ½ hora de reproducción inalámbrica | Tiempo de carga: 1 ½ hora para recargar los auriculares y 2 horas para recargar el estuche.", stock: "30 unidades disponibles" },
    ///gamers
    {id: "5", name: "Headphones NogaStromer ", price: 350, category: "Gamers", Image: "../imagenes/nogastromer.jpeg" , description: "AURICULARES GAMER CON MICRÓFONO. Tus juegos, tu música y tus chats en Alta Definición. Sonido de Alta Definición: Bajos reforzados, Control de Volumen, Cable reforzado de 2,2 metros, Acolchado suave y cómodo, Incluye Micrófono flexible", stock: "10 unidades disponibles"},
    {id: "6", name: "Headphones gamer Redragon", price: 200, category: "Gamers", Image: "../imagenes/Auricular-Gamer-Redragon-Zeus-H510-Rgb_41187_1.jpeg", description: "Los auriculares Redragon Scylla cuentan con una unidad de diafragma de 40 mm, una impedancia de 16 Ω y una respuesta en frecuencia de 20 Hz a 20000 Hz, lo que garantiza un sonido potente y de alta calidad.", stock : "50 unidades disponibles"},
    {id: "7", name: "Razer Barracuda X", price: 500, category: "Gamers", Image: "../imagenes/barracuda.webp" , description: "Los Razer Barracuda X son unos auriculares gaming inalámbricos ideales para casi cualquier equipo gracias al transmisor USB-C. Puedes conectarlos a tu PC, Android, PlayStation o Nintendo Switch y obtener un sonido inalámbrico de forma instantánea. Lo mejor: la calidad del audio es bastante alta y el micrófono capta las voces con mucha claridad. Compatible con: Pc/MAC, Playstation 5/4, Nintendo Switch, Xbox (con cable). Conectividad: Inalámbrica 2.4 GHZ o por cable. Respuesta de frecuencia: 20-20kHz. Impedancia: 32 ohms.", stock: "25 unidades disponibles"},
    {id: "8", name: "Headphones Stromberg Smith", price: 500, category: "Gamers", Image: "../imagenes/smith.jpeg", description: "Los Auriculares Gamer Smith de Stromberg te permiten vivir cada juego como una experiencia única y envolvente. Gracias a su diseño compuesto por almohadillas cómodas y versátiles que proveen aislación para ruidos exteriores, solo escucharás los sonidos de los juegos y las conversaciones con tus amigos." , stock: "15 unidades disponibles"},
    ///runners
    {id: "9", name: "Auriculares Runner JBL", price: 270, category: "Runners", Image: "../imagenes/jblrunner.webp", description: "Los JBL Endurance RUNBT ofrecen 6 horas de reproducción y un micrófono y mando integrados para un control manos libres del sonido y las llamadas. Los botones magnéticos mantienen tus Endurance RUNBT sujetos en el cuello cuando no los estés usando. ¡Disfruta de tu entrenamiento!", stock: "50 unidades disponibles" },
    {id: "10", name: "Sennheiser Sport True Wireless", price: 600, category: "Runners", Image: "/imagenes/wirerunner.jpeg", description: "Resistencia a salpicaduras, polvo y sudor. No necesitas detenerte cuando las condiciones se ponen pesadas: el diseño elegante y resistente cuenta con la clasificación IP54, por lo que resiste sudor, lluvia o entrenamientos en la playa. Estos auriculares te aguantarán el paso durante tu rutina diaria, ya que brindan 9 horas de reproducción y hasta 18 horas en movimiento si se carga en el estuche, es decir, un total de 27 horas.", stock: "40 unidades disponibles" },
    {id: "11", name: "HUAWEI FreeBuds Pro 2", price: 300, category: "Runners" , Image: "/imagenes/huaweii.jpg", description: "Los FreeBuds Pro 2 incorporan 55 mAh por auricular, con un estuche de carga de 580 mAh. Los datos oficiales de la compañía prometen unas 4 horas de reproducción con una carga con la cancelación de ruido activada, pudiendo multiplicar entre cuatro y cinco veces esa duración gracias al estuche de carga", stock: "10 unidades disponibles"},
    {id: "12", name: "Energy Sistem Earphones Sport 2 True Wireless", price: 150, category: "Runners", Image: "/imagenes/energy.avif", description: "Olvídate de los cables y practica tu deporte favorito con estos auriculares Energy Sistem True Wireless diseñados para deportistas. Sujeción y confort. Resistente a salpicaduras y 20 h de autonomía total. Carga del charging case con conector tipo USB-C.", stock: "60 unidades disponibles" },
]




// getProduct
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        const product = products.find((p) => p.id === id);
  
        
        if (product) {
          resolve(product);
        } else {
          reject("No existe el producto");
        }
      }, 1000);
    });
  };
  



// getProducts() -> devuelve todos los productos
// getProducts("Inalambricos") -> devuelve todos los productos de la categoría phones
// getProducts("Runners") -> devuelve todos los productos de la categoría tablets
// getProducts("Gamers") -> devuelve todos los productos de la categoría notebooks
export const getProducts = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
         const productsFiltered = category
          ? products.filter((product) => product.category === category)
          : products;
  
         resolve(productsFiltered);
        }, 1000);
    });
  };