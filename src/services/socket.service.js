import io from 'socket.io-client'

const baseUrl = (process.env.NODE_ENV === 'production')? '' : '//localhost:3030'
export const socketService = createSocketService();

// socketService.setup()

function createSocketService() {
  var socket = null;
  const socketService = {
    setup() {
      socket = io(baseUrl)
    },
    on(eventName, cb) {
      socket.on(eventName, cb)
    },
    emit(eventName, data) {
      socket.emit(eventName, data)
    },
  }
  return socketService
}


// export const socketService = createSocketService();
