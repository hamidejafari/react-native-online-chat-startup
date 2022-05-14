import feathers from '@feathersjs/client';
import io from 'socket.io-client';
import socketio from '@feathersjs/socketio-client';
import authentication from '@feathersjs/authentication-client';
const options = {transports: ['websocket'], upgrade: false};
const socket = io('http://animoshaver.ir:5050', options);
// const socket = io('http://localhost:3030', options);
import AsyncStorage from '@react-native-community/async-storage';

const app = feathers();
app.configure(socketio(socket, {timeout: 2000})).configure(
  authentication({
    storage: AsyncStorage,
  }),
);

export default app;
