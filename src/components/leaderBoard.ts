
export class LeaderBoard {

    canvas:UICanvas
    container:UIContainerStack | UIContainerRect;

    constructor() {
        
        log("leaderboard here")
        //let textureSrc1 = "images/leaderboard_bg.jpg"
        //let textureSrc2 = "images/leaderboard_glitch.png"
        //let textureSrc3 = "images/leaderboard_blackBg.png"
        let imgTexture = new Texture( "images/leaderboard_white.png")
        let closeButtonTexture = new Texture( "images/leaderboard_button_close.png" )
        //let textureSrc3 = "images/leaderboard_giphtest.gif" //not supported

        this.canvas = new UICanvas();
      

        // trick to center the UI
        this.container = new UIContainerRect(this.canvas);
        this.container.positionX = 0 //-50;
        this.container.positionY = 50
        this.container.width = "100%"
        this.container.height = "100%"
        this.container.color =  Color4.Black()
        this.container.opacity = 0.95

        // add the levelboard overall background
        const bg = new UIImage(this.container, imgTexture)
        bg.sourceLeft = 0
        bg.sourceTop = 0
        bg.sourceWidth = 1000
        bg.sourceHeight = 530
        bg.width = 800; //'80%'//1000
        bg.height = bg.sourceHeight*0.8; //bg.sourceHeight * (bg.width/bg.sourceWidth) // a way of doing "auto"    // 500//'auto'//500
        bg.vAlign = 'center'
        bg.hAlign = 'center'
        //bg.positionX = 'center'
        //bg.positionY = 'center'
        

        // display the close button
         // Add a close button near the top right
        const closeBtn = new UIImage( this.container, closeButtonTexture)
        closeBtn.sourceWidth = 500;
        closeBtn.sourceHeight = 500;
        closeBtn.width = 35;
        closeBtn.height = 35;
        closeBtn.hAlign = "right"
        closeBtn.vAlign = "top"
        closeBtn.positionX = -30; //if hAlign is set - offset based on that, relative to parent
        closeBtn.positionY = -95; //if vAlign is set - offset based on that, relative to parent - taking Top-left corner
        closeBtn.onClick = new OnClick((): void => {
            this.container.visible = false;
          });


    }


}