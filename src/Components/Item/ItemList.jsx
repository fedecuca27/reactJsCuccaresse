
const productos = [
    {id:1 , nombre: "Casco", colorTalle: "blue" , marca: "Axxis" , modelo: "Roc" , codigo: 1401 , precio:25000 , retiro: "sucursal " , imagen: "axxisRocBlue.jpg" },
    {id:2 , nombre: "Bateria", colorTalle: "Gel" , marca: "Yuasa" , modelo: "Yt7a" , codigo: 1290 , precio:7500 ,  retiro: "sucursal " , imagen: "bateriaYt7a.jpg" },
    {id:3 , nombre: "Candado", colorTalle: "amarillo" , marca: "Xena" , modelo: "alarm 110" , codigo:1503 ,  retiro: "sucursal " , precio:4350 , imagen: "candadoXena.jpg" },
    {id:4 , nombre: "Aceite", colorTalle: "1 litro" , marca: "Castrol" , modelo: "Power 1" , codigo:1104 , retiro: "sucursal " , precio:1450 , imagen: "castrolPower.jpg" },
    {id:5 , nombre: "Aceite", colorTalle: "1 litro" , marca: "Motul" , modelo: "5100" , codigo:1107 , retiro: "sucursal " , precio:1850 , imagen: "motul5100.jpg" },
    {id:6 , nombre: "Zapata de freno", colorTalle: "Std" , marca: "Frasle" , modelo: "807" , codigo:1812 , retiro: "sucursal " , precio:1200 , imagen: "frasle807.jpg" },
    {id:7 , nombre: "Linga de seguridad", colorTalle: "XL" , marca: "Pmsecurity" , modelo: "m1.2" , codigo:1704 , retiro: "sucursal " , precio:2750 , imagen: "pmSecurity.jpg" },
    {id:8 , nombre: "Kit transmision Honda Titan", colorTalle: "Zincado" , marca:"Tech" , modelo:"Titan New" , codigo:1606 , retiro: "sucursal " , precio:3860 , imagen: "transTech.jpg" },
];

export const ItemList = new Promise ( ( resolve, reject) => {
    let condition = true

    if (condition) {
        setTimeout(()=>{
            resolve(productos)
        }, 3000)
    }
     else {
        reject("400 Not Found")
     }
    }
)
    