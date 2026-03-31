I am adding cURL's for testing. Role is taken from JWT token.


SIGNUP

curl --location 'http://localhost:5001/api/auth/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "Sachin",
  "email": "1@gmail.com",
  "password": "123456",
  "role": "admin"
}'


LOGIN

curl --location 'http://localhost:5001/api/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "sachin@gmail.com",
  "password": "123456"
}'



Create Event 

curl --location 'http://localhost:5001/api/events' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5Y2E1ZmJmZWY0NjM3ZDkxMDNjZWQ5ZCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3NDg3MDY3M30.MfQRaKllqdMue9ToKndW7dKh_P8UUb_DzYdIYiZ-gRk' \
--data '{
  "title": "Dhurandar 2",
  "date": "2026-04-03",
  "totalTickets": 1
}'


Get Events List

curl --location 'http://localhost:5001/api/events'



Get Event Details

curl --location 'http://localhost:5001/api/events/69ca6694374656205ba860f2'




Event Ticket Booking

curl --location 'http://localhost:5001/api/eventBooking/69ca6694374656205ba860f2/book' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5Y2E2Mjc4MWNjYjUyYTdmYzhlMTYwMiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzc0ODcxMTgzLCJleHAiOjE3NzQ4NzQ3ODN9.kkBbNt5Fw-fa34Fz0DJh-yBrZBP0oLJaVw5ITdaE_yI' \
--data '{
  "tickets": 1
}'