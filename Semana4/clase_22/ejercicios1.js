// /***Ejercicio 1
//  * Crear un arreglo de objetos, donde cada objeto represente a una pelicula con los siguientes campos:
//  * 
//  */

//  let series = [
    
//       {
//         titulo:"How i met your mother",
//         descripcion:"En el año 2030, el arquitecto Ted Mosby (Josh Radnor) decide contarles a sus dos hijos la historia de cómo conoció a su madre. Por lo tanto, inicia una narración de recuerdos recopilados desde el 2005, año en el que dos de sus mejores amigos, Marshall Eriksen (Jason Segel) y Lily Aldrin (Alyson Hannigan), deciden casarse tras nueve años de noviazgo. Esa decisión hace que Ted, soltero empedernido, al igual que su otro mejor amigo Barney Stinson (Neil Patrick Harris), decida encontrar al amor de su vida desesperadamente. De una manera curiosa, aparece en ese instante la reportera canadiense Robin Scherbatsky (Cobie Smulders), que se convertirá en una nueva amiga del grupo y parte importante en la vida de Ted. A partir de este hecho, inicia la búsqueda implacable de una esposa que se convierta en madre de sus hijos.",
//         anio:2005,
//         finalizada:true,
//         personajes:["Ted Mosby","Marshal Eriksen","Lily Aldrin","Robin Scherbatsky","Barney Stinson"],
//       },
//       {
//           titulo:"Game of thrones",
//           descripcion:"La primera temporada comienza quince años después de la guerra civil conocida como la «rebelión de Robert», con la cual Robert Baratheon expulsó del Trono de Hierro a los Targaryen y se proclamó gobernante de Poniente. Tiempo después, y tras la repentina muerte de la Mano del Rey, Jon Arryn, Robert invita a su amigo Eddard «Ned» Stark —Lord de Invernalia— a asumir el oficio vacante. Este último acepta y, tan pronto llega a Desembarco del Rey —la capital de Poniente y sede del Trono de Hierro—, va descubriendo la verdad detrás de una serie de intrigas y conspiraciones que involucran a otras familias nobiliarias y que están relacionadas con la tragedia de Arryn. Sin embargo, cuando Robert muere también repentinamente, los Lannister reclaman el poder y ejecutan a Stark para evitar la difusión de sus investigaciones. Estos acontecimientos desatan una guerra entre los reinos de Poniente que se extiende hasta el final de la serie, y a la cual eventualmente se suma Daenerys, la única superviviente de la casa Targaryen, que en el exilio reúne un vasto ejército y cría a tres dragones para reclamar el poder despojado a su familia tiempo atrás. Simultáneamente, más allá de los territorios de Poniente limitados por un muro de hielo que es vigilado por la Guardia de la Noche, otra amenaza se cierne sobre los siete reinos ante la llegada de criaturas sobrenaturales conocidas como «caminantes blancos» y guiadas por el denominado Rey de la Noche",
//           anio:2011,
//           finalizada:true,
//           personajes:["Tyrion Lannister","Jhon Snow","Daenerys Targaryen","..."],
//       },
//       {
//         titulo:"Silicon Valley",
//         descripcion:"Richard es un tímido ingeniero en sistema que vive con sus tres únicos amigos, que crean un importante algoritmo que supondrá una batalla con intereses y falsas amistades. Todo ello unido a que una chica se cruza por primera vez en la vida de Richard.",
//         anio:2014,
//         finalizada:true,
//         personajes:["Richard Hendricks","Erlich Bachman","Nelson Big Head","Bertram Gilfoyle","Dinesh Chugtai","..."],
//       }
// ]
//  for(let i=0;i<series.length;i++){
//      console.log(`La serie '${series[i].titulo}' es del año ${series[i].anio}  los personajes son ${series[i].personajes}`)
//  } 
//   console.log(series)

//   console.table(series)
//   let loggued =false;

//   //Si es verdadero no lo muestra
//   //si es falso me muestra un mensaje de error
//   console.assert(loggued,"No esta logueado")
let tealcanza=[]
let arrJuegos =[
    {
        nombre:"Halo",
        precio:35
    },
    {
        nombre:"Outer Wilds",
        precio:24
    },
    {
        nombre:"Civilization V",
        precio:90
    },
    {
        nombre:"Stardew Valley",
        precio:30
    },
    {
        nombre:"The Witcher 3",
        precio:40
    },
    {
        nombre:"Portal",
        precio:5
    },
]
let presupuesto =+prompt("Ingresa tu presupuesto")
for(let i=1;i<arrJuegos.length;i++){
      if (presupuesto >= arrJuegos[i].precio){
          tealcanza.push(arrJuegos[i])
      }
    }
console.table(tealcanza) 



