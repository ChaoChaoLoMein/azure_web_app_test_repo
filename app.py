from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route("/hello", methods=["POST"])
def hello():
  body = request.get_json(silent=True) or {}
  return jsonify({"message": "Hello from backend", "received": body})
