var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/big....');
	this.level = ko.computed(function(){
		console.log(this.clickCount());
		if(this.clickCount() < 10){
			return 'Infant';
		}
		if(this.clickCount() < 19){
			return 'Teen';
		}
		return 'Tiger';
	}, this);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());