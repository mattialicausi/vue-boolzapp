'use strict';



 let contacts = [ {
        name: 'Michele',
        avatar: '_1',
        id: 1,
        image: './img/avatar_1.jpg',
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
        image: './img/avatar_2.jpg',
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
        image: './img/avatar_3.jpg',
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
        image: './img/avatar_4.jpg',
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
        image: './img/avatar_5.jpg',
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
        image: './img/avatar_6.jpg',
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
        image: './img/avatar_7.jpg',
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
        image: './img/avatar_8.jpg',
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
            showEmoji: false,
            staScrivendo: false,
            userOnline: false,
            showInfoChat: false,
            splashPage: false,
            showinfoMsg: {
                index: null,
                show: false
            },
            icons:[
                '&#128512;',
                '&#128513;',
                '&#128514;',
                '&#128515;',
                '&#128516;',
                '&#128517;',
                '&#128518;',
                '&#128519;',
                '&#128521;',
                '&#128522;',
                '&#128523;',
                '&#128524;',
                '&#128525;',
                '&#128526;',
                '&#128528;',
                '&#128529;',
                '&#128530;',
                '&#128536;',
                '&#128545;',
                '&#128548;',
                '&#128561;',
                '&#129315;',
                '&#129299;',
                '&#129319;',
                '&#129321;',
                '&#129325;',
                '&#129488;',
                '&#9996;',
                '&#9995;',
                '&#10024;',
                '&#10062;',
                '&#128064;',
                '&#128077;',
                '&#128079;',
                '&#128152;',
                '&#128149;',
                '&#128156;',
                '&#128158;',
                '&#128584;',
                '&#129310;',
                '&#129505;',
                '&#127802;',
                '&#127801;',
                '&#9749;'
              ],
            emptyInput: false,
            listaRisposteRandom: [
                'Va bene',
                'Per ora non posso rispondere',
                'Ti chiamo più tardi',
                'Ok',
                'Mi farebbe piacere',
                'Sto lavorando',
                'Sto uscendo',
                'Sto guidando'
            ],

            listaUtenti : contacts
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
            const options = {'weekday': 'long', 'month': '2-digit', 'day': '2-digit'};
            const date = new Date().toLocaleString('it-IT', options);

            const newSentMessage = {
                date: date,
                message: this.newmessage,
                status: 'sent'
            }
            this.listaUtenti[this.currentChat].messages.push(newSentMessage);
            this.newmessage = '';
            this.$nextTick(()=>{
                const el= this.$refs.msg[this.$refs.msg.length - 1];
                el.scrollIntoView();
            });

            setTimeout(()=>{
            const newRandom =Math.floor(Math.random() * 8);
            const newMessage = this.listaRisposteRandom[newRandom];

            const today = new Date();
            const date = + today.getDate() +'-'+(today.getMonth()+1) +'-' + today.getFullYear();
            const time = today.getHours() + ":" + today.getMinutes();
            const dateTime = date+' '+time;

            const newSentMessage = {
                date: dateTime,
                message: newMessage,
                status: 'received'
            }
            this.listaUtenti[this.currentChat].messages.push(newSentMessage);
            this.$nextTick(()=>{
                const el= this.$refs.msg[this.$refs.msg.length - 1];
                el.scrollIntoView();

            })
            setTimeout(this.showstaScrivendo());
            setTimeout(this.hideLastAcces());
            }, 1000);
            
            clearInterval(this.showstaScrivendo(), 3000);
            clearInterval(this.hideLastAcces(), 6000);

        },

        getLastmessage(item){
            const msg= item.value.filter((valore)=>{
                return valore.status === 'reveived';
            })
            return msg[msg.length - 1];
        },

        filteredContacts(){
            return this.listaUtenti.filter((item)=>{
                const name= item.name.toLowerCase();
                return name.includes(this.searchTerm.toLowerCase());
            })
        },

        showInfo(i){
            if(i === this.showinfoMsg.index && this.showinfoMsg.show){
                this.showinfoMsg.index = null;
                this.showinfoMsg.show = false;
            }else{
                this.showinfoMsg.index = i;
                this.showinfoMsg.show = true;
            }
        },

        removeMsg(i){
            this.listaUtenti[this.currentChat].messages.splice(i, 1);
            console.log(i)
        },

        openEmoji(){
            this.showEmoji = !this.showEmoji
        },

        addEmoji(i){
            this.newmessage += this.icons[i];
        },

       showstaScrivendo(){
                this.staScrivendo = !this.staScrivendo;
                //console.log('scrive');
        },

        hideLastAcces(){
            this.userOnline = !this.userOnline;

        },

        showinfochat(){
            this.showInfoChat = !this.showInfoChat
        },

        deleteAllMsg(i){
            this.listaUtenti[this.currentChat].messages.splice(i);
            this.showInfoChat = !this.showInfoChat
        },

        deleteChat(i){
            this.listaUtenti.splice(i, 1); 
            this.showInfoChat = !this.showInfoChat

        },

        removeSplashpage(){
            this.splashPage = !this.splashPage
            
        },  
        
    },
    mounted(){
        setTimeout(this.removeSplashpage());
        //clearInterval(this.removeSplashpage(), 6000)
    },

});
app.mount('#app');
