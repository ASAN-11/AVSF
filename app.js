const express = require('express');
const mysql = require('mysql2');
const app = express();

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your-username',
    password: 'your-password',
    database: 'your-database-name'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Endpoint to get data from MySQL
app.get('/data', (req, res) => {
    const query = 'SELECT * FROM your_table';  // Replace with your SQL query
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching data:', error);
            res.status(500).send('Error fetching data');
            return;
        }
        res.json(results);  // Send data as JSON
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});