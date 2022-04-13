const express = require('express')

const User = require('../models/user')

const Question = require('../models/question')

const ObjectId = require('mongodb').ObjectId;

const router = express.Router()

router.post('/signup', async (req, res, next) => {
    const { body } = req
    const { email } = body

    try {
        let user = await User.findOne({ email })
        if (!user) {
            await User.create({ email })
        }
        user = await User.findOne({ email })
        console.log(user)
        req.session.user = user._id
        console.log(req.session)
        req.session.save()
        res.send('User creation was successful')
    } catch (e) {
        next(e)
    }
})

router.post('/updateAns1', async (req, res, next) => {
    try {
        const { body } = req
        const { _id, ans } = body
        console.log("_id: " + _id)
        console.log("ans: " + ans)
        console.log(req.session)
        await User.updateOne({ "_id": ObjectId(_id) }, { ans1: ans })
        res.send('Answer 1 update sucessful')
    } catch (e) {
        next(e)
    }
})

router.post('/updateAns2', async (req, res, next) => {
    try {
        const { body } = req
        const { _id, ans } = body
        await User.updateOne({ _id }, { ans2: ans })
        res.send('Answer 2 update sucessful')
    } catch (e) {
        next(e)
    }
})

router.post('/updateAns3', async (req, res, next) => {
    try {
        const { body } = req
        const { _id, ans } = body
        await User.updateOne({ _id }, { ans3: ans })
        res.send('Answer 3 update sucessful')
    } catch (e) {
        next(e)
    }
})

router.post('/updateAns4', async (req, res, next) => {
    try {
        const { body } = req
        const { _id, ans } = body
        await User.updateOne({ _id }, { ans4: ans })
        res.send('Answer 4 update sucessful')
    } catch (e) {
        next(e)
    }
})

router.post('/updateAns5', async (req, res, next) => {
    try {
        const { body } = req
        const { _id, ans } = body
        await User.updateOne({ _id }, { ans5: ans })
        res.send('Answer 5 update sucessful')
    } catch (e) {
        next(e)
    }
})

router.post('/updateAns6', async (req, res, next) => {
    try {
        const { body } = req
        const { _id, ans } = body
        await User.updateOne({ _id }, { ans6: ans })
        res.send('Answer 6 update sucessful')
    } catch (e) {
        next(e)
    }
})

router.post('/updateAns7', async (req, res, next) => {
    try {
        const { body } = req
        const { _id, ans } = body
        await User.updateOne({ _id }, { ans7: ans })
        res.send('Answer 7 update sucessful')
    } catch (e) {
        next(e)
    }
})

router.post('/updateAns8', async (req, res, next) => {
    try {
        const { body } = req
        const { _id, ans } = body
        await User.updateOne({ _id }, { ans8: ans })
        res.send('Answer 8 update sucessful')
    } catch (e) {
        next(e)
    }
})

router.post('/updateAns9', async (req, res, next) => {
    try {
        const { body } = req
        const { _id, ans } = body
        await User.updateOne({ _id }, { ans9: ans })
        res.send('Answer 9 update sucessful')
    } catch (e) {
        next(e)
    }
})

router.post('/updateAns10', async (req, res, next) => {
    try {
        const { body } = req
        const { _id, ans } = body
        await User.updateOne({ _id }, { ans10: ans })
        res.send('Answer 10 update sucessful')
    } catch (e) {
        next(e)
    }
})

router.post('/updateAns11', async (req, res, next) => {
    try {
        const { body } = req
        const { _id, ans } = body
        await User.updateOne({ _id }, { ans11: ans })
        res.send('Answer 11 update sucessful')
    } catch (e) {
        next(e)
    }
})

router.post('/updateAns12', async (req, res, next) => {
    try {
        const { body } = req
        const { _id, ans } = body
        await User.updateOne({ _id }, { ans12: ans })
        res.send('Answer 12 update sucessful')
    } catch (e) {
        next(e)
    }
})

router.post('/updateAns13', async (req, res, next) => {
    try {
        const { body } = req
        const { _id, ans } = body
        await User.updateOne({ _id }, { ans13: ans })
        res.send('Answer 13 update sucessful')
    } catch (e) {
        next(e)
    }
})

router.post('/updateAns14', async (req, res, next) => {
    try {
        const { body } = req
        const { _id, ans } = body
        await User.updateOne({ _id }, { ans14: ans })
        res.send('Answer 14 update sucessful')
    } catch (e) {
        next(e)
    }
})

router.post('/updateAns15', async (req, res, next) => {
    try {
        const { body } = req
        const { _id, ans } = body
        await User.updateOne({ _id }, { ans15: ans })
        res.send('Answer 15 update sucessful')
    } catch (e) {
        next(e)
    }
})

router.get('/user', async (req, res, next) => {
    try {
        console.log(req.session.user)
        res.send({
            id: req.session.user
        })
    } catch (e) {
        next(e)
    }
})

router.post('/question', async (req, res, next) => {
    try {
        const { body } = req
        const { number } = body
        const q = await Question.findOne({ number })
        res.json(q)
    } catch (e) {
        next(e)
    }
})

module.exports = router