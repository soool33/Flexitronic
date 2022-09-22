const UserModel = require('../models/user.model');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports.deleteUser = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('Cet utilisateur n\'existe pas : ' + req.params.id);

    try{
        // deleteOne instead of remove (deprecated)
        await UserModel.deleteOne({ _id: req.params.id }).exec();
        res.status(200).json({ message: "Successfully deleted. " });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
}