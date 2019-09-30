
# what is this 
# this reads a file of entities parses all the walls to this sample output:
# level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, new Vector3(26.5, 1.5030281017900293, 29.5), new Quaternion(0, 0, 0, 1), _colorNames.BLUE))

# how to use
# put it in the same folder of the file you want to parse 
# AND/OR change the name of the fileToRead file to include the path
# prepare the file to be parsed with these important things:
#       - separate all wall entities with a double space between them (not needed for normal entities)
#       - this file assumes that wall entities have the string "wall" in their name ..that they are called "redwall" for example

# when ready run in your console and copy the output
#       python positionExtractor.py



# CHANGE THIS
fileToRead = "./game_level5.ts"

################  WALL FUNCTIONS
def find_between( s, first, last ):
    try:
        start = s.index( first ) + len( first )
        end = s.index( last, start )
        return s[start:end]
    except ValueError:
        return ""

def isWall(ent):
    return ent.find("wall")

def getColor(ent):
    name = find_between(ent, "const ", " = new Entity")
    color = name[0:name.index("wall")]
    #print "name: " + name
    #print "color: " + color
    return color

def getNeonColor(ent):
    ent.lower() # avoids neonWall type of things
    name = find_between(ent, "neonwall", " = new Entity")
    name = name[1:]
    secondChar = ""
    color = ""
    # second character can be a space " " or "-" or "_"
    if(name.find("_") != -1 ): 
        secondChar = "_"
        color = name[0: name.index(secondChar)]
    elif(name.find("-") != -1 ): 
        secondChar = "-"
        color = name[0: name.index(secondChar)]
    elif(name.find(" ") != -1 ): 
        secondChar = " "
        color = name[0: name.index(secondChar)]
    else:
        color = name
    return color

def getPosition(ent):  
    position = find_between(ent,"position: ", ",\n")
    #print "position: " + position
    return position

def getRotation(ent):
    rotation = find_between(ent, "rotation: ", ",\n")
    #print "rotation: " + rotation
    return rotation

def getNewWallString(col, pos, rot, model):
    name = find_between(ent, "const ", " = new Entity")
    str = 'level.levelWalls.push(new Wall(level,"Wall " + level.levelWalls.length, ' + pos + ', ' + rot +', _colorNames.'+  col.upper() +')) ' #+name #+ model
    #str = name + " - " + col.upper() + " - " + model
    return str

def getModel(ent):
    model = find_between(ent, "new GLTFShape('", ".glb") 
    if (model != ""):
        model = "  // model: " + model + ".glb"
    #model != "" ? model + ".glb" : model
    #print model  
    return model  

##############################



##########  STARTS FROM HERE
with open(fileToRead, 'r') as myfile:
  data = myfile.read()
    
#print data  
entList = data.split("\n\n")
print "found " + str(len(entList)) + " objects"
#print entList[1]


wallStrings = ""

# parse all of them
for ent in entList:
    #discard if it doesn't have the "engine.addEntity" string
    if ( isWall(ent) != -1 ):
        #col = getColor(ent)        #for simple color layers called like "redwall"
        col = getNeonColor(ent)     #for neon color walls names like "neonwall-blue_1" or "neonwall-blue"
        pos = getPosition(ent)
        rot = getRotation(ent)
        mod = getModel(ent)
        str = getNewWallString(col, pos, rot, mod)
        wallStrings += str + "\n"
    #else:
        #it's not a wall... but can be     

#### Done parsing print to console
print wallStrings


