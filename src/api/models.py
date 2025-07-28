from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean
from sqlalchemy.orm import Mapped, mapped_column
from flask_jwt_extended import JWTManager 

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)  # hashed
    is_agent = db.Column(db.Boolean, default=False)  # <= THIS is the key
    name = db.Column(db.String(100))  
    dob = db.Column(db.Date)        



    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is_agent": self.is_agent,
            "name": self.name,
            "dob": self.dob.isoformat() if self.dob else None
        }
    

class RenterForm(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    income = db.Column(db.Integer)
    credit_score = db.Column(db.Integer)
    pets = db.Column(db.Boolean)
    move_in_date = db.Column(db.Date)

    user = db.relationship('User', backref='renter_forms')

    def serialize(self):
        return{
            "id": self.id,
            "user_id": self.user_id, 
            "user_name": self.user.name,                      
            "user_dob": self.user.dob.isoformat() if self.user.dob else None,  
            "income": self.income,
            "credit_score": self.credit_score,
            "pets": self.pets,
            "move_in_date": self.move_in_date.isoformat() if self.move_in_date else None
        }

    