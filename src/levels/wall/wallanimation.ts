



export class WallAnimation extends Entity
{
    glitchArray:GLTFShape[] = [null,new GLTFShape("models/glitch1.glb"),new GLTFShape("models/glitch2.glb"),new GLTFShape("models/glitch3.glb"),new GLTFShape("models/glitch4.glb"),new GLTFShape("models/glitch5.glb"),new GLTFShape("models/glitch6.glb"),new GLTFShape("models/glitch7.glb"),new GLTFShape("models/glitch8.glb"),new GLTFShape("models/glitch9.glb"),new GLTFShape("models/glitch10.glb"),new GLTFShape("models/glitch11.glb"),new GLTFShape("models/glitch12.glb")]

    glitchArrayEntity:Entity[] = [null]

    constructor()
    {
        super()

        for(var i = 1; i < this.glitchArray.length; i++)
        {
            var temp = new Entity()
            temp.addComponentOrReplace(this.glitchArray[i])
            temp.addComponentOrReplace(new Transform({
                position: Vector3.Zero(),
                rotation: new Quaternion(0,0,0,1),
                scale: i < 2 ? Vector3.One() : Vector3.Zero()
            }))
            temp.setParent(this)
            this.glitchArrayEntity.push(temp)
        }

        this.addComponentOrReplace(new Transform({
            position: Vector3.Zero(),
            rotation: new Quaternion(0,0,0,1),
            scale: Vector3.One()
        }))
    }
}