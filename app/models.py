from sqlalchemy import Column, Integer, String, Text, DateTime, Enum
from sqlalchemy.ext.declarative import declarative_base
import enum
from datetime import datetime, timezone, timedelta

Base = declarative_base()

# Converted UTC to indian standard time
IST = timezone(timedelta(hours=5, minutes=30))

class ProgressEnum(enum.Enum):
    not_started_yet = "not_started_yet"
    in_progress = "in_progress"
    done = "done"

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text, nullable=True)
    due_date = Column(DateTime, nullable=False)
    assigned_to = Column(String, nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.now(IST))
    progress = Column(Enum(ProgressEnum), default=ProgressEnum.not_started_yet)
