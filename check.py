import json

if __name__ == "__main__":
    file_path = "src/assets/countries.json"
    with open(file_path, "r") as f:
        content = f.read()
        countries = json.loads(content)
    print(len(countries))
