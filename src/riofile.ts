// Shapes
const doorShape = new GLTFShape("models/doors.glb")
const buildingShape = new GLTFShape("models/building.gltf")
const terminalShape = new GLTFShape("models/terminal_1.glb")
const buildingScreensShape = new GLTFShape("models/building_screens.gltf")
const cylinderShape = new GLTFShape("models/cylinders.glb")
const sign1Shape = new GLTFShape("models/sign1/sign.gltf")
const sign2Shape = new GLTFShape("models/sign2/sign.gltf")
const logoShape = new GLTFShape("models/logo.gltf")



// Clips
// Fade in clips
const clipCylindersIn = new AnimationState("FadeIn", {looping:false})
const clipSignIn = new AnimationState("FadeIn", {looping:false})
// Fade out clips
const clipCylindersOut = new AnimationState("FadeOut", {looping:false})
const clipSignOut = new AnimationState("FadeOut", {looping:false})
// Door clips
const clipDoorsOpenF = new AnimationState("DoorsOpen", {looping:false})
const clipDoorsOpenB = new AnimationState("DoorsOpen", {looping:false})
const clipDoorsCloseF = new AnimationState("DoorsClose", {looping:false})
const clipDoorsCloseB = new AnimationState("DoorsClose", {looping:false})

// wall's neon lights clip
const clipAnimate = new AnimationState("Animation", {looping:true})

// Animators
const signAnimator = new Animator()
const doorFAnimator = new Animator()
const doorBAnimator = new Animator()
const ledAnimator = new Animator()
const wallNeonLightAnimator = new Animator()

// Attach clips to animators
signAnimator.addClip(clipSignIn)
signAnimator.addClip(clipSignOut)
doorFAnimator.addClip(clipDoorsOpenF)
doorBAnimator.addClip(clipDoorsOpenB)
doorFAnimator.addClip(clipDoorsCloseF)
doorBAnimator.addClip(clipDoorsCloseB)
ledAnimator.addClip(clipCylindersIn)
ledAnimator.addClip(clipCylindersOut)
wallNeonLightAnimator.addClip(clipAnimate)

///////////////// GLOBAL SCENE ENTITY FOR ROTATION; set all entities to have this as the parent
const scene = new Entity()
scene.addComponent(new Transform(
	{
		position: new Vector3(0, 0, 0), 
		rotation: Quaternion.Euler(0, 0, 0),  //// CHANGE THE SECOND PAREMETER TO ROTATE THE ENTIRE SCENE
		scale: new Vector3(1, 1, 1) }))
engine.addEntity(scene)
/////////////////////////////

// Signs' parent to group everything together
const sign_parent = new Entity()
sign_parent.addComponent(
	new Transform({
		position: new Vector3(8,0,8)
	})
)
sign_parent.setParent(scene)
engine.addEntity(sign_parent)


// Static building
const building = new Entity()
building.addComponent(buildingShape)
building.addComponent(
	new Transform({
		position: new Vector3(8,0,8),
		scale: new Vector3(1,1,1)
	})
)
building.setParent(scene)
engine.addEntity(building)

const terminal1 = new Entity()
terminal1.addComponent(terminalShape)
terminal1.addComponent(
	new Transform({
		position: new Vector3(5,0.590571,8),
		rotation: Quaternion.Euler(0,90,0),
		scale: new Vector3(1,1,1)
	})
)
terminal1.setParent(scene)
engine.addEntity(terminal1)

const smallScrens = new Entity()
smallScrens.addComponent(buildingScreensShape)
smallScrens.addComponent(
	new Transform({
		position: new Vector3(8,0,8),
		scale: new Vector3(1,1,1)
	})
)
smallScrens.setParent(scene)
engine.addEntity(smallScrens)

// Front door
const doorF = new Entity()
doorF.addComponent(doorShape)
doorF.addComponent(
	new Transform({
		position: new Vector3(8,1.63632,8-3.7962),
		rotation: Quaternion.Euler(0,0,0),
		scale: new Vector3(1,1,1),
	})
)
doorF.setParent(scene)
engine.addEntity(doorF)
doorF.addComponent(doorFAnimator)

// Back door
const doorB = new Entity()
doorB.addComponent(doorShape)
doorB.addComponent(
	new Transform({
		position: new Vector3(8,1.63632,8+3.7962),
		rotation: Quaternion.Euler(0,180,0),
		scale: new Vector3(1,1,1),
	})
)
doorB.setParent(scene)
engine.addEntity(doorB)
doorB.addComponent(doorBAnimator)

// LED cylinders going up and down
const cylinders = new Entity()
cylinders.addComponent(cylinderShape)
cylinders.addComponent(
	new Transform({
		position: new Vector3(0,4.25,0),
		rotation: Quaternion.Euler(0,0,0),
		scale: new Vector3(0.98,0.98,0.98),
	})
)
engine.addEntity(cylinders)
cylinders.addComponent(ledAnimator)
cylinders.setParent(sign_parent)

// Floating Logo
const logo = new Entity()
logo.addComponent(logoShape)
logo.addComponent(
	new Transform({
		position: new Vector3(8,19,8),
		rotation: Quaternion.Euler(0,0,0),
		scale: new Vector3(1,1,1),
	})
)
logo.setParent(scene)
engine.addEntity(logo)

// Screens
const sign = new Entity()
sign.addComponent(sign1Shape)
sign.addComponent(
	new Transform({
		position: new Vector3(0,9.85,0),
		rotation: Quaternion.Euler(0,180,0),
		scale: new Vector3(5.3,5.3,5.3),
	})
)
sign.addComponent(signAnimator)
sign.setParent(sign_parent)
engine.addEntity(sign)

class SignSystem {
	started = false
	rotate_timer = 0.0
	fade_out_timer = 1.0
	fading_out = 0
	last_cube_angle = 0.0
	cube_angle = 0.0
	rotating = false
	doorFopen = false
	doorBopen = false
	shape_index = 0
	// put your sign shapes here (all 4 sides are on each shape)
	// they will be swapped out each time after fading out
	shapes = [
		sign1Shape,
		sign2Shape
	]
	start_animations() {
		this.started = true
		clipAnimate.play()
	}
	update(dt) {
		if (this.started) {
			logo.getComponent(Transform).rotate(Vector3.Up(), -15*dt)
			if (this.fading_out == 1) {
				if (this.fade_out_timer > 0.0) {
					this.fade_out_timer -= dt
				} else {
					this.fading_out = 2
					// stop last animations
					clipSignOut.stop()
					if (this.shapes.length > 1) {
						// replace sign component with next in list
						log('swap '+this.shape_index, this.shapes[this.shape_index])
						sign.removeComponent(this.shapes[this.shape_index])
						this.shape_index = (this.shape_index + 1) % this.shapes.length
					}
					this.fade_out_timer = 0.01
				}
			}
			else if (this.fading_out == 2) {
				if (this.fade_out_timer > 0.0) {
					this.fade_out_timer -= dt
				} else {
					sign.addComponent(this.shapes[this.shape_index])
					// reset and play the next
					clipCylindersOut.stop()
					this.fading_out = 0
					clipSignIn.reset()
					clipCylindersIn.reset()
					clipSignIn.play()
					clipCylindersIn.play()
					smallScrens.getComponent(Transform).rotate(Vector3.Up(), 90)
				}
			}
			if (this.fading_out == 0) {
					
				if (this.rotate_timer > 0.0) {
					this.rotate_timer -= dt
				} else {
					this.rotating = !this.rotating
					if (this.rotating) {
						this.last_cube_angle = this.cube_angle
						this.rotate_timer = 2.0
						this.fade_out_timer = 2.0
						this.fading_out = 1
						// stop last animations
						clipSignIn.stop()
						clipCylindersIn.stop()
						clipSignOut.reset()
						clipCylindersOut.reset()
						// reset and play the next
						clipSignOut.play()
						clipCylindersOut.play()
					}
					else {
						this.rotate_timer = 180/30.0
					}
				}
			}
			if (this.rotating) {
				// rotate cube
				this.cube_angle = Math.min(this.last_cube_angle+90, (this.cube_angle + dt * 0.5 * 90.0))
				var transform = sign_parent.getComponent(Transform)
				transform.rotation.setEuler(0,this.cube_angle,0)
			}
		}
		const pos = Camera.instance.position
		// back door logic
		if (pos.z < 16 && pos.z > 9 && pos.x < 11 && pos.x > 5) {
			if (!this.doorBopen) {
				// open back door
				this.doorBopen = true
				clipDoorsCloseB.stop()
				clipDoorsCloseB.reset()
				clipDoorsOpenB.play()
				clipDoorsOpenB.reset()
			}
		} else if (this.doorBopen) {
			// close back door
			this.doorBopen = false
			clipDoorsOpenB.stop()
			clipDoorsOpenB.reset()
			clipDoorsCloseB.play()
			clipDoorsCloseB.reset()
		}
		// front door logic
		if (pos.z > 0 && pos.z < 7 && pos.x < 11 && pos.x > 5) {
			if (!this.doorFopen) {
				// open back door
				this.doorFopen = true
				clipDoorsCloseF.stop()
				clipDoorsCloseF.reset()
				clipDoorsOpenF.play()
				clipDoorsOpenF.reset()
			}
		} else if (this.doorFopen) {
			// close back door
			this.doorFopen = false
			clipDoorsOpenF.stop()
			clipDoorsOpenF.reset()
			clipDoorsCloseF.play()
			clipDoorsCloseF.reset()
		}
	}
}
const signSystem = new SignSystem()
engine.addSystem(signSystem)
setTimeout(function() {
	signSystem.start_animations()
}, 1000)