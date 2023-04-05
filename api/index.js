const express = require('express');
const app = express();
const port = 2000;
const conn = require('./db/conn');
const cors = require('cors');

//solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));

//config json
app.use(express.json())

//public folder
app.use(express.static('public'))

//routes
const ClientRoutes = require('./routes/ClientRoutes');
const CashierRoutes = require('./routes/CashierRoutes');
const OperationRoutes = require('./routes/OperationRoutes');
const TransactionRoutes = require('./routes/TransactionRoutes');

app.use('/clients', ClientRoutes);
app.use('/cashier', CashierRoutes);
app.use('/operation', OperationRoutes);
app.use('/transaction', TransactionRoutes);

//sync db and starts server
conn.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server rodando na porta ${port}`)
    })
}).catch((err) => console.log(err))