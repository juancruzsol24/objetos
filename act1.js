document.write("1) De acuerdo a la teoría y paradigma de la POO define el concepto de clase, objeto y métodos. Mencionar dos ejemplos de cada uno.")
document.write('<br>')
document.write(" Clase: Es una plantilla, es un molde que permite construir objetos Representa ideas del mundo real, en forma genérica Dentro de un sistema")
document.write('<br>')
document.write("un objeto es una agrupacion de datos y lenguajes combinados en una sola unidad ")
document.write('<br>')
document.write("un metodo es bloque de código que contiene una serie de instrucciones")
/*actividad numero 2-a*/
class articulo {
    constructor(codigo, nombreProducto, precio, descripcion, caracteristicasPuntuales, limiteDeStock) {
        this._codigo = codigo,
            this._nombreProducto = nombreProducto,
            this._precio = precio,
            this._descripcion = descripcion,
            this._carecteristicasPuntuales = caracteristicasPuntuales,
            this._limiteDeStock = limiteDeStock
    }
    mostrarInfo() {
        return `<br>codigo: ${this._codigo} <br>- nombre: ${this._nombreProducto}<br>- descripcion: ${this._descripcion}<br>- caracterizticas: ${this._carecteristicasPuntuales}<br>
        stock: ${this._limiteDeStock}<br>`
    }
}
let articulo1 = new articulo(1213,
    "shampoo",
    "$8000",
    "shampoo anticaspa",
    "base de crema de cacaguates",
    "15"
)
let articulo2 = new articulo(1511,
    "ketchup",
    "$3000",
    "adereso de tomate",
    "contiene tomate",
    "25"
)
let articulo3 = new articulo(1817,
    "harina",
    "$1200",
    "harina de trigo 0000 no leudante",
    "es de trigo ",
    "10"
)
document.write(articulo1.mostrarInfo())
document.write(articulo2.mostrarInfo())
document.write(articulo3.mostrarInfo())