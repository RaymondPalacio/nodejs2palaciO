const rp = {
    
    mon:(req, res)=>{
        res.render('index')
    },
    mon1:(req, res)=>{
        res.render('about')
    },
    mon2:(req, res)=>{
        res.render('service')
    },
    mon3:(req, res)=>{
        res.render('contact')
    },
    mon4:(req, res)=>{
        res.render('home')
    }
};

module.exports = rp;