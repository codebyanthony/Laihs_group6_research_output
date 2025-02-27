from flask import Flask, request, jsonify, render_template
import openai

app = Flask(__name__)

# Replace with your actual OpenAI API key
openai.api_key = "YOUR_OPENAI_API_KEY"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message")
    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    try:
        # Call the OpenAI API (using text-davinci-003 for this example)
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=f"You are an IT troubleshooting assistant. A user says: {user_message}\nProvide a helpful and detailed answer.",
            max_tokens=150,
            temperature=0.7,
            n=1,
            stop=None,
        )
        answer = response.choices[0].text.strip()
        return jsonify({"response": answer})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    # Run the Flask app (default port 5000)
    app.run(debug=True)
