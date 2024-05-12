"""
build some knowledge graphs for financial information using whyhow's rule-based retrieval + their concept graph pipelines for SEC prospectus + financial documents

1. build a knowledge graph for a company's financial information
2. allow for immediate feedback from the user to correct any mistakes in the knowledge graph
3. allow for the user to add more information to the knowledge graph
4. chat interface
5. InvestComply settings


"""

# Bring up comparison for the investment propsectus in order to comply with the regulations
# Utilizes vector similarity search in order to retrieve most similar document chunks, and creates a smart way to organize the answers in a way that is actionable.

# Path: backend/main.py

from whyhow import WhyHow
client = WhyHow()


