class Notification {
    constructor(notificationId, createdTime, content, receiver) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send() {
        console.log(`Notification has been sent to ${this.receiver}`)
    }
}

class EmailNotification extends Notification {
    constructor(notificationId, createdTime, content, receiver) {
        super(notificationId, createdTime, content, receiver)
    }
}

class SMSNotification extends Notification {
    constructor(notificationId, createdTime, content, receiver) {
        super(notificationId, createdTime, content, receiver)
    }
}

let email = new EmailNotification("AAA", "01.00", "Test send Email", "toonsiwat@gmail.com")
let sms = new SMSNotification("BBB", "02.00", "Test send SMS", "0840904246")

email.send();
sms.send();
