const express = require("express");
const request = require("request");
const app = express()
app.use(express.json())
const port = 3000
app.get('/d', (req, res)=>{
	console.log("OUT")
	request(
		'http://numbersapi.com/42',
		(err, response, body) => {
			if (err) return res.status(300).send({message: err})

			return res.send(body)
		}
	)
})
app.get('/s', (req, res)=>{
	console.log("OUT")
	request(
		'http://numbersapi.com/5',
		(err, response, body) => {
			if (err) return res.status(300).send({message: err})

			return res.send(body)
		}
	)
})
app.get('/p', (req, res)=>{
	console.log("OUT")
	request(
		'http://numbersapi.com/16',
		(err, response, body) => {
			if (err) return res.status(300).send({message: err})

			return res.send(body)
		}
	)
})
app.listen(port, () => console.log("WORK"))