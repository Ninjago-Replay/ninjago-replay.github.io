const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve your static files

app.post('/save', (req, res) => {
    const data = req.body;
    const dir = path.join(__dirname, 'contact');
    
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    
    const files = fs.readdirSync(dir);
    const nextFileName = String(files.length).padStart(6, '0') + '.txt';
    const filePath = path.join(dir, nextFileName);
    
    const fileContent = `Name: ${data.name}\nEmail: ${data.email}\nOptions: ${data.options}\nDescription: ${data.description}`;
    
    fs.writeFile(filePath, fileContent, err => {
        if (err) {
            console.error('Error writing file', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json({ message: 'File saved successfully', fileName: nextFileName });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
