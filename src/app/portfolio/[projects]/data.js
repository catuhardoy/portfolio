import vm from '/public/vitalitymg.jpeg'
import vg from  '/public/723d0af616b1fe7d5c7e56a3532be3cd.jpg'
import todo from '/public/todos.jpeg'

export const items = {
    projects:[
        {id:2,
            title:'Vitality Medical Group',
            description:'Diseñamos y desarrollamos una aplicación web medica que incluye: autenticación con Auth0, búsquedas, filtrados combinados, ordenamientos, baneo de usuarios, envío de emails, pago de servicios con api de Mercado Pago, dashboards de paciente, administrador y médico',
            image:vm,
            url:'https://www.youtube.com/watch?v=Bpji8kSCtjw&t=3s&ab_channel=EmanuelMarquez'
           },
           {
            id:3,
            title:'ToDoApp',
            description:'Aplicacion CRUD para la organizacion de tareas utilizando Next JS y Mongo DB',
            image: todo,
            url:"https://youtu.be/C-JbZGDKxvs" 
        },
        {
            id:1,
            title:'Videogames',
            description:'Desarrollo de una aplicación web de videojuegos utilizando todos los lenguajes de programación aprendidos durante el Bootcamp de Henry. La aplicación incluye filtros combinados, búsqueda, autenticación y ordenamientos.',
            image: vg,
            url:'https://github.com/catuhardoy/PI-Videogames',
        },
        
    
    //    {
    //     id:2,
    //     title:'Videogames',
    //     description:'Desarrollo de una aplicación web de videojuegos utilizando todos los lenguajes de programación aprendidos durante el Bootcamp de Henry. La aplicación incluye filtros combinados, búsqueda, autenticación y ordenamientos.',
    //     image: vg,
    //     url:'https://www.linkedin.com/in/catalina-hardoy-8a3a48119/',
    //    }
    ]
}