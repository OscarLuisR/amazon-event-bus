const eventBus = new Vue();

Vue.component('producto-detalle', {
    template: '#producto-detalle-templata',
    data() {
        return {
            premium: false,
            modeloSeleccionado: 0,
            indiceGaleria:0,            
            product: {
                name: 'Echo Dot (3rd Gen) - Smart speaker with Alexa',
                models: [
                    {
                        id: 1,
                        name: 'Charcoal',
                        color: '#38393e',
                        images: [
                            'https://images-na.ssl-images-amazon.com/images/I/619HkSq0-mL._SL1000_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/I/61cSwIDSVbL._SL1000_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/I/61XRabsikKL._SL1000_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/I/61aMHiQ984L._SL1000_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/I/61fLi7StjWL._SL1000_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/I/61nk5XeIqbL._SL1000_.jpg',
                        ],
                        quantity: 100,
                        details: [
                            'Our most popular smart speaker - Now with a fabric design and improved speaker for richer and louder sound.',
                            'Voice control your music - Stream songs from Amazon Music, Apple Music, Spotify, Sirius XM, and others. You can also listen to audiobooks from Audible.',
                            'Bigger, better sound - Pair with a second Echo Dot (3rd gen) for rich, stereo sound. Fill your home with music with compatible Echo devices in different rooms.',
                            'Ready to help - Ask Alexa to play music, answer questions, read the news, check the weather, set alarms, control compatible smart home devices, and more. Echo Dot is designed around your privacy. You can press the microphone off button to disconnect the microphones.',
                            'Connect with others - Call almost anyone hands-free. Instantly drop in on other rooms in your home or make an announcement to every room with a compatible Echo device.',
                            'Use another speaker - Connect to your own speakers over Bluetooth or with a 3.5 mm audio cable.',
                        ],
                    },
                    {
                        id: 2,
                        name: 'Heather Gray',
                        color: '#696969',
                        images: [
                            'https://images-na.ssl-images-amazon.com/images/I/61lYMRN%2BCPL._SL1000_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/I/61cSwIDSVbL._SL1000_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/I/61XRabsikKL._SL1000_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/I/61aMHiQ984L._SL1000_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/I/61fLi7StjWL._SL1000_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/I/61nk5XeIqbL._SL1000_.jpg',
                        ],
                        quantity: 10,
                        details: [
                            'Our most popular smart speaker - Now with a fabric design and improved speaker for richer and louder sound.',
                            'Voice control your music - Stream songs from Amazon Music, Apple Music, Spotify, Sirius XM, and others. You can also listen to audiobooks from Audible.',
                            'Bigger, better sound - Pair with a second Echo Dot (3rd gen) for rich, stereo sound. Fill your home with music with compatible Echo devices in different rooms.',
                            'Ready to help - Ask Alexa to play music, answer questions, read the news, check the weather, set alarms, control compatible smart home devices, and more. Echo Dot is designed around your privacy. You can press the microphone off button to disconnect the microphones.',
                            'Connect with others - Call almost anyone hands-free. Instantly drop in on other rooms in your home or make an announcement to every room with a compatible Echo device.',
                            'Use another speaker - Connect to your own speakers over Bluetooth or with a 3.5 mm audio cable.',
                            'Alexa has skills - With tens of thousands of skills and counting, Alexa is always getting smarter and adding new skills like tracking fitness, playing games, and more.',
                            'Voice control your smart home - Turn on lights, adjust thermostats, lock doors, and more with compatible connected devices',
                        ],
                    },
                    {
                        id: 3,
                        name: 'Sandstone',
                        color: '#b3b3b3',
                        images: [
                            'https://images-na.ssl-images-amazon.com/images/I/619JBC0vjGL._SL1000_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/I/61cSwIDSVbL._SL1000_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/I/61XRabsikKL._SL1000_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/I/61aMHiQ984L._SL1000_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/I/61fLi7StjWL._SL1000_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/I/61nk5XeIqbL._SL1000_.jpg',
                        ],
                        quantity: 0,
                        details: [
                            'Bigger, better sound - Pair with a second Echo Dot (3rd gen) for rich, stereo sound. Fill your home with music with compatible Echo devices in different rooms.',
                            'Ready to help - Ask Alexa to play music, answer questions, read the news, check the weather, set alarms, control compatible smart home devices, and more. Echo Dot is designed around your privacy. You can press the microphone off button to disconnect the microphones.',
                            'Connect with others - Call almost anyone hands-free. Instantly drop in on other rooms in your home or make an announcement to every room with a compatible Echo device.',
                            'Use another speaker - Connect to your own speakers over Bluetooth or with a 3.5 mm audio cable.',
                            'Alexa has skills - With tens of thousands of skills and counting, Alexa is always getting smarter and adding new skills like tracking fitness, playing games, and more.',
                            'Voice control your smart home - Turn on lights, adjust thermostats, lock doors, and more with compatible connected devices',
                        ],
                    },
                ]
            },
        };
    },
    methods: {
        seleccionarModelo (index, indexGaleria) {
            this.modeloSeleccionado = index;
            this.indiceGaleria = indexGaleria;
        },
    
        imagenGaleria (index) {
            this.indiceGaleria = index;
        },
    
        addToCart() {
            eventBus.$emit('add-to-cart', this.product.models[this.modeloSeleccionado]);
        }
    },
    computed: {
        envio() {
            if (this.premium) {
                return 'Gratis';
            }else {
                return '2.99$';
            }
        },
        imagenSeleccionada() {
            return this.product.models[this.modeloSeleccionado].images[this.indiceGaleria];
        },
        
        imagenModeloSeleccionado() {
            return this.product.models[this.modeloSeleccionado].images;
        },
        
        mensajeStock() {
            return (this.product.models[this.modeloSeleccionado].quantity <= 0 ? 'Sin Existencia': (this.product.models[this.modeloSeleccionado].quantity > 0 && this.product.models[this.modeloSeleccionado].quantity < 50 ? 'Por Agotarse' : 'En Stock'));
        },
        
        nombreModelo() {
            return this.product.models[this.modeloSeleccionado].name;
        },
        
        informacionModelo() {
            return this.product.models[this.modeloSeleccionado].details;
        },
        
        claseStock() {
            return 'stock ' + (this.product.models[this.modeloSeleccionado].quantity <= 0 ? 'out-of-stock': (this.product.models[this.modeloSeleccionado].quantity > 0 && this.product.models[this.modeloSeleccionado].quantity < 50 ? 'low-stock' : 'in-stock'));
        },
        
        habilitaBoton() {
            return (this.product.models[this.modeloSeleccionado].quantity <= 0 ? true : false);
        },
        
        claseBoton() {
            return (this.product.models[this.modeloSeleccionado].quantity > 0 ? 'add-to-cart' : 'button-disable');
        }
    },
    create(){
        this.indiceGaleria = 0;
    },
    mounted() {
        eventBus.$on('set-premium', premium => {
            this.premium = premium;
        });
    },
    destroyed() {
        eventBus.$off('set-premium');
    },
});

const app = new Vue({
    el: '#app',
    data (){
        return {
            premium: true,
            cart: []
        }
    },
    methods: {
        updateCart(producto) {
            this.cart.push(producto);
            console.log(this.cart)
        }
    },
    computed: {
        cmpCartAmount() {
            return this.cart.length;
        }
    },
    mounted() {
        eventBus.$on('add-to-cart', producto => {
            this.updateCart(producto);
        });

        eventBus.$emit('set-premium', this.premium);
    },
    destroyed() {
        eventBus.$off('add-to-cart');
    },
});

Vue.config.devtools = true;