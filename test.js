var node = require ("nodegit"),
    gobj = node.Object;
console.log ("baby steps");
node.Repository.open("./").then (function (repository) {
	node.Tag.list (repository).then (function (array) {
		console.log (array);
	});
	repository.getBranchCommit("master").then (function (commit) {
		console.log (commit.message());
		console.log (commit.id());
		gobj.lookup (repository, commit.id(), gobj.TYPE.COMMIT).then (function (obj) {
			console.log ("I has the precious");

			node.Tag.createLightweight (repository, "1.2", obj, 0).then (function (oid) {
				console.log ("Created");
			});
		});
	});
});
