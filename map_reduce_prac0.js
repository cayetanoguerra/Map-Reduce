//
// Práctica de ASW: Map-Reduce sobre MongoDB
//


db.sessions.save({
	userid: "juan",
	ts: ISODate('2011-11-03 14:17:00'),
	watching: ["item31", "item25", "item22", "item103", "item14", "item9", "item103"],
	time: 34
});
db.sessions.save({
	userid: "pedro",
	ts: ISODate('2011-11-03 14:23:00'),
	watching: ["item7", "item22", "item56", "item201", "item18"],
	time: 7
});
db.sessions.save({
	userid: "ana91",
	ts: ISODate('2011-11-03 15:02:00'),
	watching: ["item31", "item25"],
	time: 104
});
db.sessions.save({
	userid: "pepe88",
	ts: ISODate('2011-11-03 16:45:00'),
	watching: ["item24", "item30", "item55"],
	time: 88
});
db.sessions.save({
	userid: "juan",
	ts: ISODate('2011-11-04 11:05:00'),
	watching: ["item31", "item19"],
	time: 62
});
db.sessions.save({
	userid: "pedro",
	ts: ISODate('2011-11-04 13:14:00'),
	watching: ["item43", "item13", "item62"],
	time: 19
});
db.sessions.save({
	userid: "ana91",
	ts: ISODate('2011-11-04 17:00:00'),
	watching: ["item31", "item15", "item19"],
	time: 92
});
db.sessions.save({
	userid: "pepe88",
	ts: ISODate('2011-11-04 15:37:00'),
	watching: ["item31", "item5", "item10"],
	time: 32
});

printjson(db.getCollectionNames());

cursor = db.sessions.find();
while (cursor.hasNext()) {
	item = cursor.next();
	printjson(item);
}
