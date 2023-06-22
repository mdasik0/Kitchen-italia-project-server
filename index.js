const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

const chefDetails = require('./data/chef-details.json')
const recipeDetails = require('./data/recipe-details.json')

app.use(cors())

app.get('/',(req,res) => {
    res.send('server is cooking')
})

app.get('/chefDetails',(req,res) => {
    res.send(chefDetails)
})

app.get('/chefDetails/:id',(req,res) => {
    const id = req.params.id;
    console.log(id)
    const selectedChef = chefDetails.find(c => c._id === id)
    res.send(selectedChef)
})

app.get('/recipeDetails',(req,res)=> {
    res.send(recipeDetails)
})

app.get('/recipeDetails/:id',(req,res)=> {
    const id = req.params.id;
    const selectedRecipe = recipeDetails.find(r => r.recipe_id === id);
    res.send(selectedRecipe);
})


app.listen(port ,() => {
    console.log(`server in running on port: ${port}`)
})