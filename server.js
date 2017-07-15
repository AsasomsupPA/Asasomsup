import Express from 'Express'
import path from 'path'

const port = 8080

const App = Express()

App.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})

App.listen(port, err => {
	console.log('Server is running on prot ' + port)
})