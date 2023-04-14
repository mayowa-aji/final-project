from flask import Flask, request, make_response, json, jsonify, abort
from flask_migrate import Migrate

from flask_restful import Api, Resource
from werkzeug.exceptions import NotFound

from models import db, Product, Customer, Order, OrderProduct

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///newsletters.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)


class Products(Resource):
    def get(self):
      product_list = [product.to_dict() for product in Product.query.all() ]
      response = make_response(
          product_list,
          200
        )
      return response

    def post(self):
        request_json = request.get_json()

        new_product = Product(
          product_name=request_json['product_name'],
          category=request_json['category'],
          price=request_json['price'],
          description=request_json['description'],
          directions=request_json["directions"],
          image_url=request_json['image_url']
        )
        db.session.add(new_product)
        db.session.commit()

        response_dict = new_product.to_dict()

        response = make_response(
            response_dict,
            201,
        )
        return response
api.add_resource(Products, '/products')

class ProductByID(Resource):
    def get(self,product_id):
        product = Product.query.get(product_id)
        if not product:
            abort(404, 'The product you were looking for was not found')
        product_dict = product.to_dict()
        response = make_response(
            product_dict,
            200
        )
        return response

    def patch(self, product_id):
        product = Product.query.get(product_id)

        if not product:
            abort(404, 'The product you were trying to update was not found')

        request_json = request.get_json()
        product.product_name = request_json.get('product_name', product.product_name)
        product.category = request_json.get('category', product.category)
        product.price = request_json.get('price', product.price)
        product.description = request_json.get('description', product.description)
        product.image_url = request_json.get('image_url', product.image_url)

        db.session.add(product)
        db.session.commit()

        response = make_response(
            product.to_dict(),
             200
        )
        return response

    def delete(self, product_id):
        product = Product.query.get(product_id)

        if not product:
          abort(404, 'The product you were trying to update was not found')

        db.session.delete(product)
        db.session.commit()

        response = make_response('', 204)

        return response

api.add_resource(ProductByID, '/products/<int:product_id>/')


class Customers(Resource):
    def get(self):
        customer_list = [customer.to_dict() for customer in Customer.query.all()]

        response = make_response(
            customer_list,
            200
        )
        return response

    def post(self):

        request_json = request.get_json()


        new_customer =  Customer(
          first_name=request_json['first_name'],
          last_name=request_json['last_name'],
          email=request_json['email'],
          address=request_json['address'],
          city=request_json['city'],
          state=request_json['state'],
          zip_code=request_json['zip_code'],
          phone_number=request_json['phone_number']
          )


        db.session.add(new_customer)
        db.session.commit()

        response = make_response(
            new_customer.to_dict(),
            201
          )
        return response
api.add_resource(Customers, '/customers')

class CustomerByID(Resource):
    def get(self,customer_id):
        customer = Customer.query.get(customer_id)
        if not customer:
            abort(404, 'The customer you were looking for was not found')
        customer_dict = customer.to_dict()
        response = make_response(
            customer_dict,
            200
        )
        return response

    def patch(self, customer_id):
        customer = Customer.query.get(customer_id)

        if not customer:
            abort(404, 'The product you were trying to update was not found')

        request_json = request.get_json()
        for key in request_json:
            setattr(customer,key,request_json[key])

        db.session.add(customer)
        db.session.commit()

        response = make_response(
            customer.to_dict(),
             200
        )
        return response

    def delete(self, customer_id):
        customer = Customer.query.get(customer_id)

        if not customer:
          abort(404, 'The product you were trying to update was not found')

        db.session.delete(customer)
        db.session.commit()

        response = make_response('', 204)

        return response

api.add_resource(CustomerByID, '/customers/<int:customer_id>')


class Orders(Resource):
    def get(self):
        order_list = [order.to_dict() for order in Customer.query.all()]

        response = make_response(
            order_list,
            200
        )
        return response

    def post(self):
        request_json = request.get_json()
        customer_id = request_json['customer_id']
        customer = Customer.query.get(customer_id)
        if not customer:
          abort(404, 'The customer you were trying to update was not found')
        order = Order(
        customer_id=customer_id,
        # order_date=request_json['order_date'],
        total_price=request_json['total_price'],
        status=request_json['status'],

      )
        for item_data in request_json['order_products']:
          product_id = item_data['product_id']
          product = Product.query.get(product_id)
          if not product:
              abort(404, 'The product you were trying to update was not found')
          order_item = OrderProduct(
          product_id=product_id,
          quantity=item_data['quantity'],
          unit_price=product.price
          )
          order.order_products.append(order_item)
          db.session.add(order)
          db.session.commit()
          return make_response(jsonify(order.to_dict()), 201)


    # def patch(self, order_id):
    #     print("feafeaf")
    #     order = Order.query.get(order_id)
    #     if not order:
    #         abort(404, 'The order you were trying to update was not found')

    #     request_json = request.get_json()
    #     order.customer_id = request_json.get('customer_id', order.customer_id)
    #     order.order_date = request_json.get('order_date', order.order_date)
    #     order.total_price = request_json.get('total_price', order.total_price)
    #     order.status = request_json.get('status', order.status)

    #     order.order_items = []
    #     for item_data in  request_json['order_items']:
    #       product_id = item_data['product_id']
    #       product = Product.query.get(product_id)
    #       if not product:
    #          abort(404, 'The product you were trying to update was not found')

    #     order_item = OrderProduct(
    #     product_id=product_id,
    #     quantity=item_data['quantity'],
    #     price=product.price
    #     )
    #     order.order_items.append(order_item)
    #     db.session.commit()
    #     return make_response(jsonify(order.to_dict()),200)

api.add_resource(Orders, '/orders')


class OrderByID(Resource):
    def get(self,order_id):
        order = Order.query.get(order_id)
        if not order:
            abort(404, 'The product you were looking for was not found')
        order_dict = order.to_dict()
        response = make_response(
            order_dict,
            200
        )
        return response

    def patch(self, order_id):
        request_json = request.get_json()
        order_id = request_json['order_id']
        order = Order.query.get(order_id)

        if not order:
            abort(404, 'The product you were trying to update was not found')

        order.status = "Cancelled"


        db.session.add(order)
        db.session.commit()

        response = make_response(
            order.to_dict(),
             200
        )
        return response

    def delete(self, order_id):
        order = Order.query.get(order_id)

        if not order:
          abort(404, 'The product you were trying to update was not found')

        db.session.delete(order)
        db.session.commit()

        response = make_response('', 204)

        return response

api.add_resource(OrderByID, '/orders/<int:order_id>')

class OrderByCustomerID(Resource):
    def get(self,customer_id):
        orders = []

        for order in Order.query.filter(Order.customer_id == customer_id).all():
          orders.append(order.to_dict())

          if len(orders) > 0:
            return make_response(jsonify(orders),200)

          else:
            abort(404, 'The product you were looking for was not found')


api.add_resource(OrderByCustomerID, '/orders/bycustomer/<int:customer_id>')

class Login(Resource):
    def post(self):
      email = request.json.get('email')
      print(email)
      password = request.json.get('password')
      print(password)

      customer = Customer.query.filter(Customer.email==email).first()
      print(customer)
      if not customer or not customer.verify_password(password):
        return make_response(jsonify(None), 401)

    # Login successful, return customer data
      return make_response(jsonify(customer.to_dict()),200)

api.add_resource(Login, '/login')

class Register(Resource):
   def post(self):
      try:
        request_json = request.get_json()


        new_customer =  Customer(
          first_name=request_json['first_name'],
          last_name=request_json['last_name'],
          email=request_json['email'],
          password=request_json["password"]
          )
        db.session.add(new_customer)
        db.session.commit()
        return make_response("Register Successful", 200)
      except (PermissionError):
         return make_response("Registration Failed",401)

api.add_resource(Register, '/register')





if __name__ == '__main__':
    app.run(debug=True)


