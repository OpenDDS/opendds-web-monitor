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
            this.messages.push(`${d.getHours()}:${this.formatedMinutes(d.getMinutes())}.${d.getSeconds()}: ${message} (${this.type})`);
        }, 2000)
    }

    formatedMinutes(minutes){
        if (minutes < 10) { return '0' + minutes } else { return minutes } 
    }
}