extends KinematicBody2D

# CONSTANT DECLARATIONS

const SPEED = 200
const SIGHT_REACH = 200

# INTERNALS

var movement = Vector2()
var targets_pull = []

onready var sight = get_node("Sight")
onready var sprite = get_node("Sprite")

# GAME HOOKS

func _ready():
	sprite.modulate = Color(0.5, 0.03, 0.2, 1)
	pass

func _physics_process(delta):
	var new_movement = Vector2()
	var target = get_current_target()
	
	if Input.is_action_pressed("ui_up"):
		new_movement.y -= 1
		sprite.rotation_degrees = 0
		sight.rotation_degrees = 0
	if Input.is_action_pressed("ui_down"):
		new_movement.y += 1
		sprite.rotation_degrees = 180
		sight.rotation_degrees = 180
	if Input.is_action_pressed("ui_left"):
		new_movement.x -= 1
		sprite.rotation_degrees = 270
		sight.rotation_degrees = 270
	if Input.is_action_pressed("ui_right"):
		new_movement.x += 1
		sprite.rotation_degrees = 90
		sight.rotation_degrees = 90

	movement = move_and_slide(new_movement.normalized() * SPEED)
	print(target)

# HELPER METHODS

func get_current_target():
	return targets_pull.front()

# SIGNALS HOOKS

func _on_Sight_body_entered(body):
	if body != self:
		targets_pull.append(body)

func _on_Sight_body_exited(body):
	targets_pull.erase(body)
