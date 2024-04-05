from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

from pymilvus import connections

MILVUS_COLLECTION_ENDPOINT = "https://in03-0677cdab95e6b4d.api.gcp-us-west1.zillizcloud.com"
API_KEY = "f4f595d8aa2d873c337b6b6ffe493762214dc2ce17781f050f95d113d8b32d3a22caf58c21bce6d9ad2c834b062627ad9a0dff75"

connections.connect("default", host=MILVUS_COLLECTION_ENDPOINT, api_key=API_KEY)

# Create and use a Milvus collection:

# You'll need to define a schema for your collection, 
# create the collection, and then you can add and search vectors. 
# Check the Milvus documentation for more details on how to do this.
