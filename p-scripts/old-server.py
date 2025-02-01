from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import subprocess

app = FastAPI()


class QueryModel(BaseModel):
    query: str


@app.post("/run-script")
def run_script(data: QueryModel):
    try:
        result = subprocess.run(
            ["python3", "OpenAiWrapper", data.query],  # передаём параметр в скрипт
            capture_output=True, text=True, check=True
        )
        return {"output": result.stdout}
    except subprocess.CalledProcessError as e:
        raise HTTPException(status_code=500, detail=str(e))

# Необходим запуск сервера: uvicorn server:app --reload
