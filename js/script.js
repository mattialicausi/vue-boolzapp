'use strict';

 let contacts = [ {
        name: 'Michele',
        avatar: '_1',
        id: 1,
        image: '../img/avatar_1.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            }, 
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            } 
        ],
    }, 
    {
        name: 'Fabio',
        avatar: '_2',
        id: 2,
        image: '../img/avatar_2.jpg',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            }, 
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: '_3',
        id: 3,
        image: '../img/avatar_3.jpg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            }, 
            {

                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: '_4',
        id: 4,
        image: '../img/avatar_4.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            }, 
            {

                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: '_5',
        id: 5,
        image: '../img/avatar_5.jpg',
        visible: true,
        messages: [
        {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent'
        }, 
        {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received'
        }
        ],
    },
    {
        name: 'Claudia',
        avatar: '_6',
        id: 6,
        image: '../img/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            }, 
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            } 
        ],
    }, 
    {
        name: 'Federico',
        avatar: '_7',
        id: 7,
        image: '../img/avatar_7.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            }, 
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: '_8',
        id: 8,
        image: '../img/avatar_8.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            }, 
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            }, 
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            } 
        ],
    } 
    ];

//creo app
const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            currentChat : 0,
            newmessage: '',
            searchTerm: '',
            listaUtenti : contacts
        }
    },
    computed: {
        filteredContacts(){
            return this.listaUtenti.filter((item)=>{
                const name= item.name.toLowerCase();
                return name.includes(this.searchTerm.toLowerCase());
            })
        } 
    },

    methods: {
        getChat(id){
            this.currentChat = this.listaUtenti.findIndex((value)=>{
                return id === value.id
            })
        },
        sendMessage(){
            if(!this.newmessage) return;
            const d = new Date();
            let newdate = d.toDateString();
            const newSentMessage = {
                date: newdate,
                message: this.newmessage,
                status: 'sent'
            }
            this.listaUtenti[this.currentChat].messages.push(newSentMessage);
            this.newmessage = '';
            setTimeout(()=>{
                const d = new Date();
            let newdate = d.toDateString();
            const newSentMessage = {
                date: newdate,
                message: 'Ok',
                status: 'received'
            }
            this.listaUtenti[this.currentChat].messages.push(newSentMessage);
            }, 1000);
        },
        getLastmessage(item){
            const msg= item.value.filter((valore)=>{
                return valore.status === 'reveived';
            })
            //console.log(msg);
            return msg[msg.length - 1];
        }

        
    },
    mounted(){
        //aggiungo mounted
    }
});
app.mount('#app');
