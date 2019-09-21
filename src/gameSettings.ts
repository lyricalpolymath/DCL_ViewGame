
enum ColorEnum {
    hex:String,
    active:boolean = false
}

export abstract class Settings {

    static glassTransparency:number = 0.3

    static inventory = {
        opacity: 0.9,
        width: "75px",
        buttonAtlas: "images/ViewGame_Inventory.png"

    }

    static colors = {
        transparency: 0.3,
        RED:    new Color4(1,0,0, 0.4  ),
        GREEN:  new Color4(0,1,0,  0.4 ),
        BLUE:   new Color4(0,0,1,  0.4 )
    }

}