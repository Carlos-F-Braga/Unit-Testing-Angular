import { MessageService } from "./message.service"

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService; //chama o serviço antes de cada it teste
  })

  it('should have no messages to start', () => {
    expect(service.messages.length).toBe(0);
  })

  it('should add a message when add is called', () => {
    service.add('message1');

    expect(service.messages.length).toBe(1);
  })

  it('should have the message name after adding a message', () => {
    let value = 'message1';

    service.add(value);

    expect(service.messages[0]).toEqual(value);
  })

  it('should remove all messages when clear is called', () => {
    service.add('message1');

    service.clear();

    expect(service.messages.length).toBe(0);
  })
})
