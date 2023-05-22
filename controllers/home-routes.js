const router = require('express').Router();
const { Groomer , Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.render('login');
});


 // GET all groomers for homepage
router.get('/groomer', withAuth,async (req, res) => {
  try {
    const dbGroomerData = await Groomer.findAll();

    const groomers = dbGroomerData.map((groomer) =>
      groomer.get({ plain: true })
    );
    res.render('groomer', {
      layout: 'groomermain',
      groomers,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE all reviews from user side.
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    
    const commentData = await Comment.findAll({
      where:{"userId": req.session.userId},
      include: [User,Groomer]
    });
 
     const comments = commentData.map((Comment) => Comment.get({ plain: true }));
console.log(comments);
    res.render('all-reviews', {
      layout: 'dashboard',
      comments,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

 

// GET one grommer profile
router.get('/groomer/:id',withAuth, async (req, res) => {
  try {
    const dbGroomerData = await Groomer.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include:[
            {
              model: User,
            }
          ]
     
        },
      ],
    });
const groomer = dbGroomerData.get({ plain: true });

    // console.log(groomer.comment.commentText);
    res.render('profile', {
      layout: 'groomermain',
      groomer,
      loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




// After click on newreview button , go to "newreview" form
router.get('/groomer/:id/newreview', withAuth,async (req, res) => {

  try
  {
    const dbGroomerReview = await Groomer.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include:[
            {
              model: User,
            }
          ]
     
        },
      ],
    });
const groomerreview = dbGroomerReview.get({ plain: true });

    res.render('newreview', {
     layout: 'groomermain',
      groomerreview,
      loggedIn: req.session.loggedIn 
    });
    
  }
  catch (err)
  {
    console.log(err);
    res.status(500).json(err);

  }
  
});

module.exports = router;