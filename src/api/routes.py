"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User , RenterForm
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask import request, jsonify
from werkzeug.security import generate_password_hash , check_password_hash
from flask_jwt_extended import create_access_token , jwt_required, get_jwt_identity
from .models import db, User
from datetime import datetime

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200



#SignupEndpoint

@api.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    hashed = generate_password_hash(data['password'])

    dob = datetime.strptime(data['dob'], "%Y-%m-%d").date()

    user = User(
        email=data['email'],
        password=hashed,
        is_agent=data.get('is_agent', False),
        name=data.get("name"),
        dob= dob  

    )

    db.session.add(user)
    db.session.commit()

    return jsonify({"msg" : "User created"}), 201


# login EndPoint

@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()

    if not user or not check_password_hash(user.password, data['password']):
        return jsonify({"msg": " NOPE!,Invalid Password"}), 401 
    
    token = create_access_token(identity=str(user.id)) 

    return jsonify({
        "token": token,
        "user": user.serialize()
    }), 200 



# will let you see all the users that have signed up  :) 
@api.route('/users', methods=['GET'])
def get_all_users():
    users = User.query.all()

    if not users:
        return jsonify({
            "msg": "No users found ",
            "total": 0,
            "users": []
        }), 200

    return jsonify({
        "msg": "User list retrieved ",
        "total": len(users),
        "users": [user.serialize() for user in users]
    }), 200




#made this to test renter or agent routes :) 
# idealy this should Save renters forms <Cool>    


#Post Renters form   

@api.route('/renter/form', methods=['POST'])
@jwt_required()
def renter_form():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    if user.is_agent:
        return jsonify({"msg": "Sorry :( Agents cannot submit renter forms"}), 403
    data = request.get_json()
    
    try:

        move_in = datetime.strptime(data.get("move_in_date"), "%Y-%m-%d").date()

        form = RenterForm(
             user_id=current_user_id,
            income=data.get("income"),
            credit_score=data.get("credit_score"),
            pets=data.get("pets"),
            move_in_date=move_in,
            email=data.get("email"),
            user_name=data.get("user_name"),
            zip_code=data.get("zip_code"),
            budget=data.get("budget"),
            bedrooms=data.get("bedrooms"),
            criminal_record=data.get("criminal_record"),
            parking=data.get("parking"),
            phone_number=data.get("phone_number")
        )

        db.session.add(form)
        db.session.commit()

        return jsonify({"msg": "Congratulations your Form submitted!" , "form": form.serialize()}), 201
    except Exception as e:
        print("Error:",e)
        return jsonify({"msg": "welp somthings not right"}) , 500 




#this takes care of of a GET Request to gatere forms using JWT token to identify 
# the form to the user 

@api.route('/renter/forms', methods=['GET'])
@jwt_required()
def get_renter_forms():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    if user.is_agent:
        forms = RenterForm.query.all()
    else:
        forms = RenterForm.query.filter_by(user_id=current_user_id).all()

    serialized = [form.serialize() for form in forms]
    return jsonify(serialized), 200



@api.route("/renter_form/<int:id>", methods=["PUT"])
def edit_renter_forms(id :int) -> tuple[str,int]:
    renter_form = db.session.scalars(
        db.select(renter_form).filter_by(id=id)
    ).one_or_none()
    if renter_form is None:
        return jsonify(msg=f"no renter_form found"), 400
    for key, value in request.json.items():

        setattr(
            renter_form, key, value
         )
    db.session.merge(renter_form)
    db.session.commit()
    db.session.refresh(renter_form)
    
    return jsonify(renter_form.serialize()), 200

@api.route("/User/<int:id>", methods=["PUT"])
def edit_user(id : int ) -> tuple[str,int]:
    user= db.session.scalars(
        db.select(user).filter_by(id=id)
    ).one_or_none()
    if user is None:
        return jsonify(msf=f"no user found"), 400
    for key, value in request.json.item():
        setattr(
            user, key, value
        )
    db.session.merge(user)
    db.session.commit()
    db.session.refresh(user)

    return jsonify(user.serilize(include_rel=True)), 200
    

@api.route("/User/<int:id>", methods=["DELETE"])
def delete_user(id : int ) -> tuple[str,int]:
    user= db.session.get(user,id)
    db.session.delete(user)
    db.session.commit()

    return "", 200

@api.route("/renter_form/<int:id>", methods=["DELETE"])
def delete_profile(id : int) -> tuple[str,int]:
    renter_form= db.session.get(renter_form,id)
    db.session.delete(renter_form)
    db.session.commit()

    return "", 200







@api.route('/agent/dashboard', methods=['GET'])
@jwt_required()
def get_agent_dashboard():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    if not user.is_agent:
        return jsonify({"msg": "Not Allowed user is not an agent"}), 403

    forms = RenterForm.query.all()

    serialized = []
    for form in forms:
        renter = User.query.get(form.user_id)  # 🔥 THIS LINE
        serialized.append({
            **form.serialize(),
            "user_name": renter.name if renter else "Unknown",
            "email": renter.email if renter else "Unknown"  # 🔥 AND THIS LINE
        })

    return jsonify({"forms": serialized, "agent": user.serialize()}), 200
