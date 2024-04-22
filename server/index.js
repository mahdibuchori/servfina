const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const fetch = require('node-fetch');
const {route} = require("./routes/routes.js");
require('dotenv').config();

const app = express();
const PORT = 8088; 
// app.use(cors({ credentials: true, origin: true }));
app.use(cors({
    origin : ["http://localhost:3000"],
    methods : ["POST", "GET", "PUT", "DELETE"],
    credentials : true,
    secure: true,
    maxAge: 86400,
    sameSite: "none",
}));
app.use(cookieParser());
app.use(express.json());
// app.use(FileUpload());
app.use(express.static("public"))
app.use('/dagsap',route);

app.get('/about', (req, res) => {
	res.send("AboutCekStatus5");
});

app.get('/cekdata', async (req, res) => {
    const response = await fetch('http://114.199.120.169:212/fina/rest/TMfgMethod/sql_data_to_json/select%20i.ITEMTYPE,%20i.ITEMNO,%20i.ITEMDESCRIPTION,%20i.UNIT1,%20i.UNIT2,%20i.UNIT3,%20i.CATEGORYID,(select%20ic.NAME%20from%20ITEMCATEGORY%20ic%20where%20ic.CATEGORYID%20=%20i.CATEGORYID)kategori%20from%20item%20i%20ORDER%20BY%20I.ITEMDESCRIPTION/1');
    const data = await response.json();
    res.send(data);
    /* try {
        for await (const chunk of response.body) {
            console.dir(JSON.parse(chunk.toString()));
        }
    } catch (err) {
        res.send(err.stack);
        console.error(err.stack);
    } */
	
});

 
app.listen(PORT, () => {  
    console.log(`Server is running on port ${PORT}.`);  
}); 