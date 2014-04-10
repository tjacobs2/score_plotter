function text_to_json(text) {
	var lines = text.split('\n');

	//get rid of the sequence line, if it exists
	if(lines[0].indexOf("SEQUENCE") != -1) {
		lines.shift;
	}
	var n_lines = lines.length;

	var headers = lines[0].match(/\S+/g);;
	var json_scores = [];
	for (var i = 1; i < n_lines; i++) {
		var current_score = {}
		var fields = lines[i].match(/\S+/g);
		if(!fields) continue;
		for (var j = 1; j < fields.length; j++) {
			current_score[headers[j]] = fields[j];
		};
		json_scores.push(current_score);
	};
	return json_scores;
}