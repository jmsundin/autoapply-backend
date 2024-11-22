## To start with auto refresh
`nodemon`

## ngrok must be running so users can hit this if this is running locally
Signup in ngrok.com
`choco install ngrok`
`ngrok config add-authtoken <your api key>`
`ngrok http --url=sharing-jackal-stunning.ngrok-free.app 8080`
8080 should be the port this node is running on