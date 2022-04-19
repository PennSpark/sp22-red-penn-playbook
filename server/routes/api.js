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
        await User.updateOne({ "_id": ObjectId(_id) }, { ans1: ans })
        let user = await User.findOne({_id })
        console.log(user)
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
        let user = await User.findOne({_id })
        console.log(user)
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
        let user = await User.findOne({_id })
        console.log(user)
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
        let user = await User.findOne({_id })
        console.log(user)
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
        let user = await User.findOne({_id })
        console.log(user)
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
        let user = await User.findOne({_id })
        console.log(user)
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
        let user = await User.findOne({_id })
        console.log(user)
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
        let user = await User.findOne({_id })
        console.log(user)
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
        let user = await User.findOne({_id })
        console.log(user)
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
        let user = await User.findOne({_id })
        console.log(user)
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
        let user = await User.findOne({_id })
        console.log(user)
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
        let user = await User.findOne({_id })
        console.log(user)
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
        let user = await User.findOne({_id })
        console.log(user)
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
        let user = await User.findOne({_id })
        console.log(user)
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
        let user = await User.findOne({_id })
        console.log(user)
        res.send('Answer 15 update sucessful')
    } catch (e) {
        next(e)
    }
})

router.get('/user', async (req, res, next) => {
    try {
        console.log("user" + req.session.user)
        res.send({
            id: req.session.user
        })
    } catch (e) {
        next(e)
    }
})

router.get('/allAnswered', async (req, res, next) => {
    let result = true
    try {
        console.log("all answered" + req.session.user)
        const user = await User.findOne({ "_id" : ObjectId(req.session.user) })
        console.log(user)
        result = (user.ans1 && user.ans2 && user.ans3 && user.ans4 && user.ans5 && user.ans6 && user.ans7 && user.ans8 && user.ans9 && user.ans10 && user.ans11 && user.ans12 && user.ans13 && user.ans14)
        console.log("all answered" + result)
        res.send({
            submit : result
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



router.get('/getMinAnsCount', async (req, res, next) => {
    const getMinAns = async (qNum) => {
        const users = await User.find()
        const q = await Question.findOne( {number : qNum} )
        console.log(q)
        let counts = new Array(q.numOp).fill(0);
        users.forEach((user) => {
            const ans = user[`ans${qNum}`]
            if (ans) {
                switch (ans) {
                    case '1':
                      counts[0] = counts[0] + 1
                      break;
                    case '2':
                      counts[1] = counts[1] + 1
                      break;
                    case '3':
                    counts[2] = counts[2] + 1
                      break;
                    case '4':
                        counts[3] = counts[3] + 1
                      break;
                    default:
                        console.log("default")
                        break;
                  }
            }
        })
        let minAns = []
        const min = Math.min(...counts)
        if (counts[0] === min) {
            minAns.push('1')
        }
        if (counts[1] === min) {
            minAns.push('2')
        }
        if (counts[2] === min) {
            minAns.push('3')
        }
        if (counts[3] === min) {
            minAns.push('4')
        }
        console.log("counts "+counts)
        console.log(minAns)
        return minAns
    }
    let count = 0
    let answers = []
    try {
        const user = await User.findOne({ "_id" : ObjectId(req.session.user) })
        const questions = await Question.find()
        for (let i = 1; i <= 15; i++) {
            const minAns = await getMinAns(i)
            console.log(minAns)
            console.log(user[`ans${i}`])
            console.log(user)
            if (minAns.includes(user[`ans${i}`])) {
                count++
            }
            answers.push((questions[i - 1][`op${user[`ans${i}`]}`]).toLowerCase())

        }

        res.send({
            count : count,
            answers : answers
        })
    } catch (e) {
        next(e)
    }
})



module.exports = router