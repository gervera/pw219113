const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: ['Manzana','Platano'],
        frutas2: [
            {nombre: 'Manzana', cantidad:11},
            {nombre: 'Uva', cantidad:12},
            {nombre: 'Pera', cantidad:0},
            {nombre: 'Platano', cantidad:16}
        ]
    }
});