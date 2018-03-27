export class GraphElement {
    constructor(id, xPos, yPos, type, messages) {
        this.id = id;
        this.xPos = xPos;
        this.yPos = yPos;
        this.type = type;
        this.messages = messages || [];
        this.update('Test sample');
    }

    update(message) {
        setInterval(() => {
            const d = new Date();
            this.messages.push(`
                ${this.formatedTime(d.getHours())}:${this.formatedTime(d.getMinutes())}.${this.formatedTime(d.getSeconds())}: 
                ${message} 
                (${this.type})
            `);
        }, 2000)
    }

    formatedTime(time){
        if (time < 10) { return '0' + time } else { return time } 
    }
}