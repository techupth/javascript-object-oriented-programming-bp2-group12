class EmailNotification {
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

class SMSNotification {
    constructor(notificationId, createdTime, content, phoneNumber) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send() {
        console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
}

let email = new EmailNotification("111", "01.00", "Test send Email", "toonsiwat@gmail.com")
let sms = new SMSNotification("222", "02.00", "Test send SMS", "0840904246")

email.send();
sms.send();
