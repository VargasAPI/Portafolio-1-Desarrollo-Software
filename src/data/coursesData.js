// src/data/coursesData.js
export const coursesData = [
    {
        id: 1,
        codigo: "SC001",
        nombre: "Seminario Costarricense",
        semestre: "II Semestre 2025",
        descripcion: "Análisis integral de la sociedad costarricense, su historia, cultura, política y desarrollo económico desde una perspectiva multidisciplinaria.",
        contenido: "Sin contenido"
    },
    {
        id: 2,
        codigo: "IO4501",
        nombre: "Investigación de Operaciones",
        semestre: "II Semestre 2025",
        descripcion: "Aplicación de métodos analíticos avanzados para la toma de decisiones óptimas en sistemas complejos mediante modelos matemáticos y computacionales.",
        contenido: "Sin contenido"
    },
    {
        id: 3,
        codigo: "AC3201",
        nombre: "Aseguramiento de la Calidad",
        semestre: "II Semestre 2025",
        descripcion: "Metodologías y técnicas para garantizar la calidad en procesos de desarrollo de software, incluyendo testing, validación y verificación.",
        contenido: "Sin contenido"
    },
    {
        id: 4,
        codigo: "DS2101",
        nombre: "Desarrollo de Software",
        semestre: "II Semestre 2025",
        descripcion: "Fundamentos y prácticas del desarrollo de aplicaciones web y móviles utilizando tecnologías modernas, patrones de diseño y metodologías ágiles.",
        proyectos: [
            {
                id: 1,
                nombre: "Lab2-Desarrollo Software",
                tipoEvaluacion: "Laboratorio",
                descripcion: "Crear una web con html y css, aplicando conocimientos breves.",
                fechaEntrega: "16/08/25",
                tecnologias: ["HTML", "CSS"],
                repositorio: "https://github.com/VargasAPI/laboratorio-2--desarolloSoftware",
                sitioWeb: "https://soft-pastelito-3b4509.netlify.app",
                estado: "Completado"
            },
            {
                id: 2,
                nombre: "Lab3-Desarrollo Software",
                tipoEvaluacion: "Laboratorio",
                descripcion: "Aplicar una tabla de registro en una branch diferente del lab2.",
                fechaEntrega: "25/08/25",
                tecnologias: ["HTML", "CSS"],
                repositorio: "https://github.com/VargasAPI/laboratorio-2--desarolloSoftware/tree/lab3-selectores-boxmodel",
                sitioWeb: "soft-pastelito-3b4509.netlify.app",
                estado: "Completado"
            },
            {
                id: 3,
                nombre: "Lab4-Desarrollo Software",
                tipoEvaluacion: "Investigacion",
                descripcion: "Responder a las preguntas asignadas para el material de dicha clase.",
                fechaEntrega: "29/08/25",
                tecnologias: ["TXT"],
                repositorio: "https://github.com/VargasAPI/Laboratorio-4-Desarrollo-software",
                sitioWeb: null,
                estado: "Completado"
            },
            {
                id: 4,
                nombre: "Lab5-Desarrollo Software",
                tipoEvaluacion: "Laboratorio",
                descripcion: "Convertir el laboratorio 3 en un diseño responsive con TRES versiones: móvil, tablet y desktop..",
                fechaEntrega: "7/09/25",
                tecnologias: ["HTML", "CSS"],
                repositorio: "https://github.com/VargasAPI/laboratorio-2--desarolloSoftware/tree/lab5-responsive",
                sitioWeb: "magnificent-syrniki-b873be.netlify.app",
                estado: "Completado"
            },
             {
                id: 5,
                nombre: "Lab6-Desarrollo Software",
                tipoEvaluacion: "Laboratorio",
                descripcion: "Trabajamos con practicas DOM para aprender a usar las herramientas",
                fechaEntrega: "19/09/25",
                tecnologias: ["HTML", "CSS"],
                repositorio: "https://github.com/VargasAPI/portafolio6-Desarrolo-web",
                sitioWeb: null,
                estado: "Completado"
            }
            ,
             {
                id: 6,
                nombre: "Lab7-Desarrollo Software",
                tipoEvaluacion: "Investigacion",
                descripcion: "Trabajamos con JWT y API KEY para aprender a usar las herramientas",
                fechaEntrega: "2/10/25",
                tecnologias: ["API_KEY", "JWT"],
                repositorio: null,
                sitioWeb: null,
                estado: "Completado"
            }
            ,
             {
                id: 5,
                nombre: "Lab8-Desarrollo Software",
                tipoEvaluacion: "Quiz",
                descripcion: "Se realizo un kahoot para repasar los temas vistos en clase",
                fechaEntrega: "8/10/25",
                tecnologias: ["API_KEY", "JWT"],
                sitioWeb: null,
                estado: "Completado"
            }
        ]
    }
];