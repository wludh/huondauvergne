# JSON Web Token Generator (Ruby)
# -------------------------------
#
# http://jwt.io
# https://github.com/progrium/ruby-jwt
#
# See http://jwt.io for a JWT debugger

require 'time'
require 'jwt'

# Replace these with your details
CONSUMER_KEY = '000eb92310d74a1bbf28c723482bf548'
CONSUMER_SECRET = '890e32f0-e4de-479a-98de-0b5b5390e449'

# Only change this if you're sure you know what you're doing. 86400 = 1 day
CONSUMER_TTL = 86400

# Generate JWT string
def generate_token(user_id)
  payload = {
    'consumerKey' => CONSUMER_KEY,
    'userId' => user_id,
    'issuedAt' => Time.now.utc.iso8601,
    'ttl' => CONSUMER_TTL
  }
  JWT.encode(payload, CONSUMER_SECRET)
end

# Initiate token generation and other debugging stuff ... prints to console
user_id = 1
token = generate_token(user_id)
puts "\n+++"
puts token
puts JWT.decode(token, CONSUMER_SECRET, false)
puts "+++\n"
JWT.decode(token, CONSUMER_SECRET, true)