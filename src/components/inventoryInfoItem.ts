
/**
 * Creates UI info boxes in the container
 * they are styled for the current container
 * UI items are very limited
 */


export class InventoryInfoItem {
    
    container:UIContainerStack | UIContainerStack
    txtItem:UIText
    line:UIText

    txtItemHeight:number = 15   //used to reset visibility with height too
    lineItemHeight:number = 18

    constructor ( container:UIContainerStack | UIContainerStack, text:string ) {

        this.container = container
        this.drawItems()
        this.setText(text)
    }

    private drawItems() {
        ///Draw a tiny level in the inventory
        let lt = new UIText(this.container)
        lt.name = "infoLevel"
        lt.value = 'Level '
        lt.height = this.txtItemHeight //15
        lt.adaptHeight = true
        lt.adaptWidth = true // doesn't seem to do anything
        lt.fontSize = 15
        lt.fontWeight = 'light'
        lt.fontAutoSize = false
        lt.hTextAlign = 'left'
        lt.vTextAlign = 'top'
        lt.paddingLeft = 8
        lt.paddingRight = 0
        lt.paddingBottom = 10
        lt.paddingTop = 8
        lt.textWrapping = false
        lt.lineCount = 2
        lt.lineSpacing = 1
        this.txtItem = lt

        // Draws a separation line at the bottom
        let line = new UIText(this.container)
        line.value = '_________________'
        line.height = this.lineItemHeight //18
        //line.hTextAlign = 'left'
        line.vTextAlign = 'top'
        line.vAlign = 'top'
        line.paddingLeft = 0
        line.paddingRight = 0
        line.paddingBottom = 0
        line.paddingTop = 8
        line.adaptWidth = true // doesn't seem to do anything
        line.fontSize = 8
        line.fontWeight = 'normal'
        line.textWrapping = false
        this.line = line
    }

    public getText(){
        return this.txtItem.value
    }

    public setText(txt:string) {
        this.txtItem.value = txt
    }

    public setVisible(bool:boolean) {
        this.txtItem.visible = bool
        this.txtItem.height = (bool) ? this.txtItemHeight: 0;

        this.line.visible = bool
        this.line.height = (bool) ? this.lineItemHeight: 0;
    }
}