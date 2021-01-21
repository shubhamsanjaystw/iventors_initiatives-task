const cookieParser = require("cookie-parser");
const express = require("express")
const app = express();

//Google Auth
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '713818330532-77l36ul0pse81sfknjd7tpsfkmhmmnea.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

// Variabel Port for Hosting

const PORT =process.env.PORT || 5000;

//for CSS
app.use(express.static(__dirname + '/public'));


//Middleware for Autherization
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());



app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/login',(req,res)=>{
    res.render("login")

})

app.post('/login',(req,res)=>{
    
    const token =req.body.token;

    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
      }
      verify()
      .then(()=>{
          res.cookie('session-token', token);
          res.send('sucess');
      }).
      catch(console.error);
})

app.get('/dashboard', checkAuthenticated, (req,res)=>{
    const user =req.user;
    res.render('dashboard', {user});
})


app.get('/logout',(req,res)=>{
    res.clearCookie('session-token');
    res.redirect('/login')
})

//Checking for session
function checkAuthenticated(req, res, next){

    const token = req.cookies['session-token'];

    const user = {};
    async function verify(){
        const ticket = await client.verifyIdToken({
            idToken: token,
            audiance: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        user.name =payload.name;
        user.email=payload.name;
        user.picture = payload.picture;        
    }
    verify()
    .then(()=>{
        req.user = user;
        next();
    })
    .catch(err=>{
        res.redirect('/login')
    })
}

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})