
# NodeJS Api Request

## Api requsting function

A simple example (Örnek):

```javascript
app.get('/api/widgets',function(req,res){
    res.json([
        {nickname: "mustafa", email:"mturkoz93@gmail.com", pwd:"123" },
        {nickname: "ahmet", email:"mturkoz@gmail.com", pwd:"111" },
        {nickname: "ali", email:"turkoz93@gmail.com", pwd:"444" },
    ]);
});
```

### Usage(Kullanım)

Write the link below on your browser:

`http://localhost:3000/api/widgets`

## License

http://adampritchard.mit-license.org/


