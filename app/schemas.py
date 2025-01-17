from pydantic import BaseModel, Field, validator
from datetime import datetime
from enum import Enum
from typing import Optional

class ProgressEnum(str, Enum):
    not_started_yet = "not_started_yet"
    in_progress = "in_progress"
    done = "done"

class TaskBase(BaseModel):
    title: str
    description: Optional[str] = None
    due_date: datetime
    assigned_to: str
    progress: ProgressEnum = ProgressEnum.not_started_yet

class TaskCreate(TaskBase):
    pass

class Task(TaskBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True
