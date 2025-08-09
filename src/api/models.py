from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean
from sqlalchemy.orm import Mapped, mapped_column
from flask_jwt_extended import JWTManager 
from datetime import date

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)  # hashed
    is_agent = db.Column(db.Boolean, default=False)  # <= THIS is the key
    name = db.Column(db.String(100))  
    dob = db.Column(db.Date)     
    security_question = db.Column(db.String(255), nullable=False)
    security_answer = db.Column(db.String(255), nullable=False)
    

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is_agent": self.is_agent,
            "name": self.name,
            "securtity_question":self.security_question,
            "securtity_answer": self.security_answer,
            "user_dob": (
            date.fromisoformat(self.dob).isoformat()
            if isinstance(self.dob, str)
            else self.dob.isoformat()
            ) if self.dob else None,
        }
    

class RenterForm(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    income = db.Column(db.Integer)
    credit_score = db.Column(db.Integer)
    pets = db.Column(db.Boolean)
    move_in_date = db.Column(db.Date)
    email: Mapped[str] = mapped_column(nullable=False) 
    name: Mapped[str] 
    zip_code:Mapped[int]
    budget:Mapped[int]
    bedrooms:Mapped[int]
    criminal_record:Mapped[bool]
    parking:Mapped[str]
    phone_number = db.Column(db.String(20), nullable=False) # 

    user = db.relationship('User', backref='renter_forms')

    def serialize(self):
        return{
            "id": self.id,
            "user_id": self.user_id, 
            "name": self.user.name,                      
            "user_dob": self.user.dob.isoformat() if self.user.dob else None,  
            "income": self.income,
            "credit_score": self.credit_score,
            "pets": self.pets,
            "user_dob":
                         ( date.fromisoformat(self.user.dob).isoformat()
                          if isinstance(self.user.dob, str)
                        else self.user.dob.isoformat())
                          if self.user.dob else None,
            "email" : self.email,
            "zip_code" : self.zip_code,
            "budget": self.budget,
            "bedrooms" : self.bedrooms,
            "criminal_record": self.criminal_record,
            "parking" : self.parking,
            "phone_number" : self.phone_number
        }

    