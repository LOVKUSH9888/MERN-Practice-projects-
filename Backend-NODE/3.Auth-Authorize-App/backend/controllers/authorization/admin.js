exports.adminController = async (req, res) => {
    try {
        res.send("Welcome to the Dashboard")
    } catch (error) {
        res.send(error.message)
    }
}