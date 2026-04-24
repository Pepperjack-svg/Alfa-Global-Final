"""
Shared MongoDB connection pool.

This module is intentionally minimal — it holds ONE AsyncIOMotorClient
shared across every route module. It must be imported AFTER server.py
has called load_dotenv(), otherwise MONGO_URL will not be in os.environ.
"""

import os
from motor.motor_asyncio import AsyncIOMotorClient

# Single client == single connection pool for the whole process.
client: AsyncIOMotorClient = AsyncIOMotorClient(os.environ["MONGO_URL"])
db = client[os.environ.get("DB_NAME", "alfaglobal")]


def close_connection() -> None:
    """Drain and close the connection pool on graceful shutdown."""
    client.close()
