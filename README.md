# 🍜 Find Yokohama's Best Ramen API - FYBRA - 🍜
This was created during my time as a student at Code Chrysalis

Find Yokohama's Best Ramen API(FYBRA) is the best way to find some of the top rated ramen in Yokohama.
With FYBRA, you can access a whole bunch of information which surely will increase your appetite!

## What you can do with FYBRA
FYBRA allows you to do the following 4 interactions with the database.

### CREATE (POST) 🍜 ✍🏻
By default FYBRA contains information of some of the top ranked shop. But you can also add your favourite shop info to the database.

### READ (GET) 🍜 🔖
If you are hungry as and not really interested in editing the list, simply use FYBRA as a way to find the best ramen in Yokohama. Trust us, you won't regret.

### UPDATE (PUT) 🍜 🤖
Sometimes people make mistake. Some shop has a ridiculously long name and you might mistype it. FYBRA got your back. By specifying the shop id, you can always edit the info of each shop.

### DELETE (DELETE) 🍜 ✞
Things won't last forever. That applies to ramen too. If your favourite shop is gone, please delete the shop information on FYBRA. We are so sorry for your loss.

## How to use FYBRA?
To get the data out of FYBRA, first thing you have to do is send a request to a specific endpoint.\
Keep this in mind, for PUT and DELETE request, you always to have to provide shop id!
||Request Type|Endpoint|
|------------|-----------|--------|
|Post shop info|POST|/api/ramen|
|Get all shop info|GET|/api/ramen|
|Get shop info with a specific id|GET|/api/ramen/id|
|Put shop info with a specific id|PUT|/api/ramen/id|
|Delete shop info with a specific id|DELETE|/api/ramen/id|

Some example blow might come in handy when you make a request from your front-end page.\  
- POST request\
For POST request please provide shop info as JASON format. You can pass info by setting it as a value of body property.
```javascript
let response = await fetch(`http://localhost:4000/api/ramen`, {
    method: "POST", 
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: please_put_JASON_here
  });
```
- GET request
```javascript
let response = await fetch(`http://localhost:4000/api/ramen/${shop_id}`, {
    method: "GET", 
    mode: 'cors',
  });
```
- PUT request\
For PUT request please provide shop info as JASON format. You can pass info by setting it as a value of body property.
```javascript
let response = await fetch(`http://localhost:4000/api/ramen/${shop_id}`, {
    method: "PUT", 
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: please_put_JASON_here
  });
```
- DELETE request
```javascript
let response = await fetch(`http://localhost:4000/api/ramen/${shop_id}`, {
    method: "DELETE", 
    mode: 'cors',
  });
```

## Database structure
Database has 5 columns in total. These are what you'll see as a response when you make a request.
|id|shop_name_jp|shop_name_en|shop_location|payment_method|
|--|------------|------------|-------------|--------------|