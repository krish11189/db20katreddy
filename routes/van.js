var express = require('express');
const van_controlers= require('../controllers/van'); 
var router = express.Router();

/* GET home page. */
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
/* GET update costu
/* GET costumes */
router.get('/', van_controlers.van_view_all_Page);

router.get('/detail', van_controlers.van_view_one_Page);
/* GET create costume page */
router.get('/create', van_controlers.van_create_Page);
/* GET create update page */
router.get('/update', van_controlers.van_update_Page);
/* GET create costume page */
router.get('/delete', van_controlers.van_delete_Page);

module.exports = router;