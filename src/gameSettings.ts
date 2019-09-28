


export enum _colorNames {
    RED    = "RED",
    GREEN  = "GREEN",
    BLUE   = "BLUE",
    YELLOW = "YELLOW",
    PURPLE = "PURPLE",
    CYAN   = "CYAN",
    WHITE  = "WHITE",
    NONE   = "NONE"
} 

/**
 * where to put all the settings of the game so that we can tweak parameters in one unique place
 */
export abstract class Settings {

    static inventory = {
        opacity: 0.9,
        width: "75px",
        buttonAtlas: "images/ViewGame_Inventory.png"
    }

    static colorNames = _colorNames;
    
    static colors = {
        transparency: 0.3,               
        RED:    new Color4(1,0,0, 0.4 ),
        GREEN:  new Color4(0,1,0, 0.4 ),
        BLUE:   new Color4(0,0,1, 0.6 ), // blue needs to be less transparent
        YELLOW: new Color4(1,1,0, 0.7 ),
        PURPLE: new Color4(1,0,1, 0.4 ),
        CYAN:   new Color4(0,1,1, 0.4 ),
        WHITE:  new Color4(1,1,1, 0.9 )
    }

    static urls = {
        inventory: "https://g5oplgqi2h.execute-api.us-east-1.amazonaws.com/live/inventory"
    }
    /*
    static color = {
        RED:    { name:"RED",    color4: new Color4(1,0,0, 0.4 )}, 
        GREEN:  { name:"RED",    color4: new Color4(0,1,0, 0.4 )}, 
        BLUE:   { name:"RED",    color4: new Color4(0,0,1, 0.6 )}, 
        YELLOW: { name:"RED",    color4: new Color4(1,1,0, 0.7 )}, 
        PURPLE: { name:"RED",    color4: new Color4(1,0,1, 0.4 )}, 
        CYAN:   { name:"RED",    color4: new Color4(0,1,1, 0.4 )}, 
        WHITE:  { name:"RED",    color4: new Color4(1,1,1, 0.9 )},
    }
    */
}


