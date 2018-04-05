export class Path {
    constructor(topicX, topicY, nodeX, nodeY) {
        this.topicX = topicX;
        this.topicY = topicY;
        this.nodeX = nodeX;
        this.nodeY = nodeY;

        topicX < nodeX ? this.xPos = topicX : this.xPos = nodeX;
        topicY < nodeY ? this.yPos = topicY : this.yPos = nodeY;
        this.height = Math.abs(topicY - nodeY);
        this.width = Math.abs(topicX - nodeX);
    }
}