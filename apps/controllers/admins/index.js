const db = require("../../models");
const Op = db.Sequelize.Op;
const Admins = db.admins

var bcrypt = require("bcryptjs");

exports.create = (req, res) => {
    try {
        const result = Admins.create({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 8),
        });

        if (result) {
            res.send({ message: "Success Registered" })
        } else {
            res.status(404).send({ message: "Error: Create admins" })
        }
    } catch (error) {
        console.log(error)
    }
        
}

exports.login = (req,res) => {
    Admins.findOne({
        where: {username: req.body.username}
    }).then(
        admin => {
            if (!admin) {
                return res.status(404).send({ message: "Username Not found." });
            }
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                admin.password
            );
            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            } else {
                return res.status(200).send({
                    accessToken: null,
                    message: "Valid Password"
                });
            }
        }
    )
}