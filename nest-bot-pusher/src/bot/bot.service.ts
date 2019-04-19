import { Component } from '@nestjs/common';
import axios from 'axios';

@Component()
export class BotService {

    private baseURL: string = 'https://api.dialogflow.com/v1/query?v=20150910';
    private token: string = '9b0f2f50d4114ca4a8fd13339ed71dec';

    sendDialogue(info) {

        const data = {
            query: info.message,
            lang: 'en',
            sessionId: '123456789!@#$%',
        };

        axios.post(`${this.baseURL}`, data, { headers: { Authorization: `Bearer ${this.token}` } })
            .then(response => {
                this.postToPusher(response.data.result.fulfillment.speech, data.query);
            });
    }

    postToPusher(speech, query) {
        const Pusher = require('pusher');

        const pusher = new Pusher({
            appId: '764980',
            key: '2e06e7bb52b962927892',
            secret: '67fd310ca23a09ee01b9',
            cluster: 'eu',
            encrypted: true,
        });

        // const pusher =  new Pusher('2e06e7bb52b962927892', {
        //     cluster: 'eu',
        //     forceTLS: true
        //   });

        const response = {
            query,
            speech,
        };

        pusher.trigger('bot', 'bot-response', response);
    }

}