const controller = {};

controller.list = (req,res) => {
	req.getConnection((err,conn)=>{
		conn.query('SELECT * FROM Customers',(err,customers)=>{
			if(err){
				res.json(err);
			}
			console.log(customers);
		});
	});
}
// controller.

module.exports = controller;